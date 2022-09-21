import React, { FC, useContext, useMemo, useState } from 'react';
import { LayoutChangeEvent, StyleSheet, View, ViewStyle } from 'react-native';
import {
  GestureEvent,
  GestureHandlerRootView,
  HandlerStateChangeEvent,
  PanGestureHandler,
  PanGestureHandlerEventPayload,
} from 'react-native-gesture-handler';
import { getYForX, parse } from 'react-native-redash';
import Svg, { Circle, G } from 'react-native-svg';
import Animated, {
  runOnJS,
  useAnimatedProps,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
} from 'react-native-reanimated';
import { observer } from 'mobx-react';
import { isEmpty } from 'lodash';
import AccrualCard from '@app/components/AccrualCard';
import PeriodButton from '@app/components/PeriodButton';
import Typography from '@app/components/Typography';
import { translate } from '@app/i18n';
import { RootContext } from '@app/state';
import { palette, PaletteColor } from '@app/theme';

import { GradientStops, Grid, Line, Tooltip, XLabels } from './components';
import {
  getLastPointCoordinates,
  handlePanGestureHandlerStateChange,
  lineD,
  lineScaleX,
  lineScaleY,
  tooltipDefaultDescriptionFormat,
  tooltipDefaultTitleFormat,
} from './utils';

import { getBaseStyles, styles } from './styles';
import { CurveShape } from './types';
import {
  CHART_DEFAULT_PADDING,
  CHART_DEFAULT_RIGHT_PADDING,
  CIRCLE_MARKER_RADIUS,
  GRID_DEFAULT_VERTICAL_PADDING,
  RELATIVE_HEIGHT_BETWEEN_TOOLTIP_AND_CIRCLE,
  TOOLTIP_FIXED_WIDTH,
} from './constants';

interface LineChartProps {
  accrualPercentage?: number;
  accrualValue?: number;
  chartHeight: number;
  children?: React.ReactNode;
  curveShape?: CurveShape;
  data: any[];
  firstLabel?: string;
  gradientColor?: PaletteColor;
  gridVerticalPadding?: number;
  isSecret?: boolean;
  isSolidBackground?: boolean;
  lastLabel?: string;
  noMiddleLabels?: boolean;
  padding?: number;
  periodLabel?: string;
  rightPadding?: number;
  showGradient?: boolean;
  showXLabels?: boolean;
  showGrid?: boolean;
  showPeriodSelectButton?: boolean;
  strokeColor: PaletteColor;
  style?: ViewStyle;
  width: number;
  xKey: string;
  yKey: string;
  onPressPeriodFilter?: () => void;
  xLabelTransform?: (label: any) => string;
  tooltipTitleFormat?: (label: any) => string;
  tooltipDescriptionFormat?: (label: any) => string;
}

const AnimatedCircleMarker = Animated.createAnimatedComponent(Circle);

const LineChart: FC<LineChartProps> = ({
  accrualValue,
  accrualPercentage,
  chartHeight,
  children,
  curveShape = 'linear',
  data,
  gradientColor = palette.royalBlue[500],
  gridVerticalPadding = GRID_DEFAULT_VERTICAL_PADDING,
  isSecret = false,
  isSolidBackground = false,
  padding = CHART_DEFAULT_PADDING,
  periodLabel = '',
  rightPadding = CHART_DEFAULT_RIGHT_PADDING,
  showGradient = true,
  showGrid = true,
  showXLabels = true,
  showPeriodSelectButton = true,
  strokeColor,
  style,
  width,
  xKey,
  yKey,
  onPressPeriodFilter,
  xLabelTransform,
  tooltipTitleFormat,
  tooltipDescriptionFormat,
}) => {
  const [tooltipTitle, setTooltipTitle] = useState('');
  const [tooltipDescription, setTooltipDescription] = useState('');
  const [childrenHeight, setChildrenHeight] = useState(0);

  const isEmptyData = useMemo(() => isEmpty(data), [data]);

  const totalHeight = useMemo(() => chartHeight + childrenHeight, [
    childrenHeight,
    chartHeight,
  ]);

  const viewStyles = useMemo(() => {
    const currentHeight = isEmptyData ? childrenHeight : totalHeight;
    const base = [getBaseStyles(currentHeight, width).container, style];
    return base;
  }, [childrenHeight, isEmptyData, totalHeight, width, style]);

  const lineWidth = useMemo(() => width - rightPadding, [width, rightPadding]);

  const scaleX = useMemo(() => {
    const scaleData = data || [];
    return lineScaleX(scaleData, lineWidth, xKey);
  }, [data, lineWidth, xKey]);

  const scaleY = useMemo(() => {
    const scaleData = data || [];
    return lineScaleY(scaleData, chartHeight, padding, yKey);
  }, [data, chartHeight, padding, yKey]);

  const pathDefinition = useMemo(() => {
    const lineData = data || [];
    return lineD(lineData, xKey, yKey, scaleX, scaleY, curveShape);
  }, [data, xKey, yKey, scaleX, scaleY, curveShape]);

  const path = useMemo(() => {
    if (!pathDefinition) {
      return null;
    }
    return parse(pathDefinition);
  }, [pathDefinition]);
  const xTouchPoint = useSharedValue(50);
  const yTouchPoint = useSharedValue(50);
  const tooltipOpacity = useSharedValue(0);

  const circleAnimatedProps = useAnimatedProps(() => {
    const x = xTouchPoint.value;
    const y = yTouchPoint.value;

    return {
      cx: x,
      cy: y,
      opacity: tooltipOpacity.value,
    };
  }, [xTouchPoint.value, yTouchPoint.value, tooltipOpacity.value]);

  const tooltipAnimatedStyle = useAnimatedStyle(() => {
    const tooltipMaxX = width - TOOLTIP_FIXED_WIDTH / 2;
    const tooltipMinX = TOOLTIP_FIXED_WIDTH / 2;
    let x = xTouchPoint.value;
    if (x > tooltipMaxX) {
      x = tooltipMaxX;
    }
    if (x < tooltipMinX) {
      x = tooltipMinX;
    }
    const circleMarkerRelativeHeight = yTouchPoint.value + childrenHeight;
    const y =
      circleMarkerRelativeHeight - RELATIVE_HEIGHT_BETWEEN_TOOLTIP_AND_CIRCLE;

    return {
      left: x,
      top: y,
      opacity: tooltipOpacity.value,
    };
  }, [xTouchPoint.value, yTouchPoint.value]);

  const onPanGestureEvent = (
    event: GestureEvent<PanGestureHandlerEventPayload>
  ) => {
    const { x } = event.nativeEvent;
    xTouchPoint.value = x <= lineWidth ? x : lineWidth;
  };

  const onPanGestureHandlerStateChange = (
    state: HandlerStateChangeEvent<PanGestureHandlerEventPayload>
  ) => {
    const clickedPositionY = state.nativeEvent.y;
    const clickedOutsideChartArea =
      totalHeight > chartHeight + clickedPositionY;

    if (clickedOutsideChartArea) {
      return;
    }

    const { opacity, xValue } = handlePanGestureHandlerStateChange(
      state.nativeEvent.state,
      state.nativeEvent.x,
      lineWidth
    );

    xTouchPoint.value = xValue;
    tooltipOpacity.value = opacity;
  };

  const getTooltipValues = (x: number) => {
    if (!path) {
      return;
    }
    const y = getYForX(path, xTouchPoint.value);
    yTouchPoint.value = y;
    const xValue = scaleX.invert(x);
    const yValue = scaleY.invert(y);

    const title = tooltipTitleFormat
      ? tooltipTitleFormat(yValue)
      : tooltipDefaultTitleFormat(yValue);
    const description = tooltipDescriptionFormat
      ? tooltipDescriptionFormat(xValue)
      : tooltipDefaultDescriptionFormat(xValue);

    setTooltipTitle(title);
    setTooltipDescription(description);
  };

  const { x: lastPointX, y: lastPointY } = useMemo(() => {
    if (isEmptyData) {
      return { x: 0, y: 0 };
    }

    const xCoordinate = data[data.length - 1][xKey];
    const yCoordinate = data[data.length - 1][yKey];

    const coordinates = getLastPointCoordinates(
      xCoordinate,
      yCoordinate,
      scaleX,
      scaleY
    );
    return coordinates;
  }, [scaleX, scaleY, xKey, yKey, isEmptyData, data]);

  useDerivedValue(() => {
    runOnJS(getTooltipValues)(xTouchPoint.value);
  }, [xTouchPoint.value]);

  const onChildrenLayoutChange = (nativeEvent: LayoutChangeEvent) => {
    const roundedChildrenHeight = Math.ceil(
      nativeEvent.nativeEvent.layout.height
    );
    setChildrenHeight(roundedChildrenHeight);
  };

  const {
    settingsStore: { theme },
  } = useContext(RootContext);

  const isDarkTheme = useMemo(() => theme === 'dark', [theme]);

  const showAccrualCard = useMemo(() => accrualPercentage && accrualValue, [
    accrualPercentage,
    accrualValue,
  ]);

  return (
    <GestureHandlerRootView>
      <View style={styles.childrenContainer} onLayout={onChildrenLayoutChange}>
        {children}
        <View style={styles.mainContainer}>
          <View style={styles.sideContainer} />
          <View style={styles.centralContainer}>
            {showAccrualCard && (
              <AccrualCard
                isSecret={isSecret}
                value={accrualValue}
                percentageChange={accrualPercentage?.toString()}
                precision={0}
                style={styles.card}
              />
            )}
          </View>
          <View style={styles.sideContainer}>
            {showPeriodSelectButton && (
              <PeriodButton label={periodLabel} onPress={onPressPeriodFilter} />
            )}
          </View>
        </View>
        <Tooltip
          isDarkTheme={isDarkTheme}
          title={tooltipTitle}
          description={tooltipDescription}
          style={tooltipAnimatedStyle}
        />
        {isEmptyData && (
          <View style={styles.emptyChartContainer}>
            <Typography>
              {translate('components.lineChart.noChartData')}
            </Typography>
          </View>
        )}
      </View>
      <PanGestureHandler
        onHandlerStateChange={onPanGestureHandlerStateChange}
        onGestureEvent={onPanGestureEvent}
      >
        <View style={viewStyles}>
          <Svg style={StyleSheet.absoluteFill}>
            {!isEmptyData && (
              <G y={childrenHeight}>
                {showGradient && (
                  <GradientStops
                    isDarkTheme={isDarkTheme}
                    isSolidBackground={isSolidBackground}
                    pathDefinition={pathDefinition}
                    chartHeight={chartHeight}
                    totalHeight={totalHeight}
                    width={lineWidth}
                    gradient={gradientColor}
                    lastPointX={lastPointX}
                    lastPointY={lastPointY}
                  />
                )}
                {showXLabels && (
                  <XLabels
                    width={width}
                    scaleY={scaleY}
                    data={data}
                    isDarkTheme={isDarkTheme}
                    valueKey={xKey}
                    padding={padding}
                    xLabelTransform={xLabelTransform}
                  />
                )}
                <Line
                  strokeColor={strokeColor as string}
                  pathDefinition={pathDefinition}
                />
                <Circle
                  cx={lastPointX}
                  cy={lastPointY}
                  r={CIRCLE_MARKER_RADIUS}
                  fill={strokeColor as string}
                />
                <AnimatedCircleMarker
                  animatedProps={circleAnimatedProps}
                  r={CIRCLE_MARKER_RADIUS}
                  stroke={strokeColor as string}
                  strokeWidth={2}
                  fill={palette.white}
                />
              </G>
            )}
            {showGrid && (
              <Grid
                isDarkTheme={isDarkTheme}
                width={width}
                height={totalHeight}
                verticalPadding={gridVerticalPadding}
              />
            )}
          </Svg>
        </View>
      </PanGestureHandler>
    </GestureHandlerRootView>
  );
};

export default observer(LineChart);
