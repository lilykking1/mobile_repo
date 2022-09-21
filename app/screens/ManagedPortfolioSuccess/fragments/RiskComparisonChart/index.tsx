import React, { FC, useMemo } from 'react';
import { Dimensions, View } from 'react-native';
import { G, Svg, Path } from 'react-native-svg';
import { palette } from '@app/theme';
import { Typography } from '@app/components';
import { translate } from '@app/i18n';
import { Flagpole, GradientBg, XLabels } from './components';
import { Footer } from './fragments';
import { HORIZONTAL_PADDING, CHART_HEIGHT, BOTTOM_PADDING } from './constants';
import { getCoordinateFromPoint, makeGraph, lineScaleY } from './utils';
import { graphData, xAxisLabels } from './fixtures';
import { GRADIENT_ID } from './components/GradientBg/constants';

import styles from './styles';

interface RiskComparisonChartProps {
  title: string;
  riskValue: number;
}

const RiskComparisonChart: FC<RiskComparisonChartProps> = ({
  title,
  riskValue,
}) => {
  const width = Dimensions.get('window').width - HORIZONTAL_PADDING;
  const riskValueXCoord = getCoordinateFromPoint(riskValue, width);
  const data = [makeGraph(graphData, width)];

  const yKey = 'value';

  const scaleY = useMemo(() => lineScaleY(graphData, CHART_HEIGHT, 15, yKey), [
    yKey,
  ]);

  return (
    <View>
      <Typography size="h6" strong style={styles.title}>
        {title}
      </Typography>
      <Svg width={width} height={CHART_HEIGHT}>
        <G y={-BOTTOM_PADDING}>
          <Path d={data[0].curve} fill={`url(#${GRADIENT_ID})`} />
          <GradientBg gradientColor={palette.royalBlue[500]} />
          <Flagpole riskValue={riskValue} riskValueXCoord={riskValueXCoord} />
          <XLabels width={width} scaleY={scaleY} data={xAxisLabels} />
        </G>
      </Svg>
      <Footer
        leftText={translate(
          'screens.managedPortfolioSuccess.riskNumberComparison.avoidingRisk'
        )}
        rightText={translate(
          'screens.managedPortfolioSuccess.riskNumberComparison.seekingRisk'
        )}
      />
    </View>
  );
};

export default RiskComparisonChart;
