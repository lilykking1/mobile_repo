import React, {
  memo,
  ReactElement,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react';
import { LayoutChangeEvent, View, ViewStyle } from 'react-native';
import Svg from 'react-native-svg';
import Animated, { useAnimatedStyle } from 'react-native-reanimated';
import { isUndefined } from 'lodash';
import { observer } from 'mobx-react';

import { Background } from '@app/components';
import {
  getArrowColor,
  getBorderColor,
  getDefaultBackPressButton,
} from '@app/components/StickyHeader/utils';
import { AltBackgroundColors } from '@app/interfaces/Colors';
import { RootContext } from '@app/state';
import { Grid } from '../LineChart/components';

import {
  Sticky,
  StickyBottomHeader,
  StickyHeaderRight,
  StickyHeaderTitle,
} from './components';
import {
  STATUSBAR_HEIGHT,
  STICKY_HEADER_START_FADING_POSITION,
  STICKY_HEADER_THRESHOLD,
} from './constants';
import styles from './styles';

export interface StickyHeaderProps extends AltBackgroundColors {
  Title?: ReactElement;
  CollapsedTitle?: ReactElement;
  Right?: ReactElement;
  Left?: ReactElement;
  CollapsedRight?: ReactElement;
  BottomTitle?: string | ReactElement;
  BottomRight?: ReactElement;
  handleBackPress?: () => void;
  scroll?: Animated.SharedValue<number>;
  handleHeaderLayout?: ({ nativeEvent }: LayoutChangeEvent) => void;
  handleBottomHeaderLayout?: ({ nativeEvent }: LayoutChangeEvent) => void;
  titleFadingPosition?: number;
  titleStartFadeInPosition?: number;
  rightFadingPosition?: number;
  rightStartFadeInPosition?: number;
  secondaryBackground?: boolean;
  hasInlineBottomComponents?: boolean;
  onPressRight?: () => void;
  arrowLeft?: boolean;
  useInternalGrid?: boolean;
}

const StickyHeader: React.FC<StickyHeaderProps> = ({
  Title,
  CollapsedTitle,
  Right,
  Left,
  onPressRight,
  CollapsedRight,
  BottomTitle,
  handleBackPress,
  BottomRight,
  scroll,
  handleHeaderLayout,
  handleBottomHeaderLayout,
  titleFadingPosition = STICKY_HEADER_THRESHOLD,
  titleStartFadeInPosition = STICKY_HEADER_START_FADING_POSITION,
  rightFadingPosition = STICKY_HEADER_THRESHOLD,
  rightStartFadeInPosition = STICKY_HEADER_START_FADING_POSITION,
  secondaryBackground = false,
  altLight,
  altDark,
  hasInlineBottomComponents = false,
  arrowLeft = false,
  useInternalGrid = false,
}) => {
  const {
    settingsStore: { theme },
  } = useContext(RootContext);

  const [headerHeight, setHeaderHeight] = useState(0);
  const animatedHeaderStyle = useAnimatedStyle(() => {
    if (scroll?.value >= STICKY_HEADER_THRESHOLD) {
      return {
        borderBottomWidth: 1,
      };
    }
    return {
      borderBottomWidth: 0,
    };
  });

  const animatedGridOpacity = useAnimatedStyle(() => {
    if (scroll?.value >= STICKY_HEADER_THRESHOLD) {
      return {
        opacity: 0,
      };
    }
    return {
      opacity: 1,
    };
  });

  const renderStickyComponent = useCallback(() => {
    if (scroll && (BottomTitle || BottomRight)) {
      return (
        <Sticky scroll={scroll} onLayout={handleBottomHeaderLayout}>
          <StickyBottomHeader
            BottomRight={BottomRight}
            BottomTitle={BottomTitle}
            hasInlineComponents={hasInlineBottomComponents}
          />
        </Sticky>
      );
    }
    if (!scroll && (BottomTitle || BottomRight)) {
      return (
        <View style={styles.bottomHeaderContainer}>
          <StickyBottomHeader
            BottomRight={BottomRight}
            BottomTitle={BottomTitle}
            hasInlineComponents={hasInlineBottomComponents}
          />
        </View>
      );
    }
    return null;
  }, [
    BottomRight,
    BottomTitle,
    handleBottomHeaderLayout,
    hasInlineBottomComponents,
    scroll,
  ]);

  const arrowColor = useMemo(() => getArrowColor(theme), [theme]);
  const borderStyle = useMemo(
    (): ViewStyle => ({
      borderColor: getBorderColor(theme),
    }),
    [theme]
  );

  const Content = useMemo(() => (!useInternalGrid ? Background : View), [
    useInternalGrid,
  ]);

  const isDarkTheme = useMemo(() => theme === 'dark', [theme]);

  const LeftContent = useMemo(() => {
    if (!isUndefined(Left)) {
      return Left;
    }

    return (
      handleBackPress &&
      getDefaultBackPressButton({
        arrowColor,
        arrowLeft,
        handleBackPress,
        secondaryBackground,
        altDark,
      })
    );
  }, [
    Left,
    altDark,
    arrowColor,
    arrowLeft,
    handleBackPress,
    secondaryBackground,
  ]);

  return (
    <>
      <Content
        altDark={altDark}
        altLight={altLight}
        secondary={secondaryBackground}
        onLayout={(event) => {
          const { height } = event.nativeEvent.layout;
          setHeaderHeight(height);
        }}
      >
        <Animated.View
          pointerEvents="box-none"
          style={[styles.header, animatedHeaderStyle, borderStyle]}
          onLayout={handleHeaderLayout}
        >
          <Background
            secondary={secondaryBackground}
            altLight={altLight}
            altDark={altDark}
            style={styles.left}
          >
            {LeftContent}
          </Background>

          <Background
            secondary={secondaryBackground}
            altLight={altLight}
            altDark={altDark}
            style={styles.headerTitle}
          >
            <StickyHeaderTitle
              scroll={scroll}
              Title={Title}
              CollapsedTitle={CollapsedTitle}
              titleStartFadeInPosition={titleStartFadeInPosition}
              titleFadingPosition={titleFadingPosition}
            />
          </Background>

          <Background
            secondary={secondaryBackground}
            altLight={altLight}
            altDark={altDark}
            style={styles.right}
          >
            <StickyHeaderRight
              scroll={scroll}
              Right={Right}
              onPressRight={onPressRight}
              CollapsedRight={CollapsedRight}
              rightStartFadeInPosition={rightStartFadeInPosition}
              rightFadingPosition={rightFadingPosition}
            />
          </Background>
        </Animated.View>

        {renderStickyComponent()}
      </Content>

      {useInternalGrid && (
        <Animated.View style={[styles.absoluteLines, animatedGridOpacity]}>
          <Svg style={styles.gridLines}>
            <Grid
              verticalPadding={0}
              isDarkTheme={isDarkTheme}
              height={headerHeight + STATUSBAR_HEIGHT}
            />
          </Svg>
        </Animated.View>
      )}
    </>
  );
};

export default memo<typeof StickyHeader>(observer(StickyHeader));
