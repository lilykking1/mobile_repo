import React, { FC, useMemo } from 'react';
import { View } from 'react-native';

import { BarChart } from './components';
import { calculatePercentage } from './utils';
import styles from './styles';

export interface CandleStickBarChartProps {
  high: number;
  low: number;
  style?;
}

const CandleStickBarChart: FC<CandleStickBarChartProps> = ({
  low,
  high,
  style,
}) => {
  const finalPercentage = calculatePercentage(high, low);
  const containerStyles = useMemo(() => [styles.container, style], [style]);

  return (
    <View style={containerStyles}>
      <BarChart percentage={finalPercentage.low} chartType="loss" />
      <BarChart percentage={finalPercentage.high} chartType="gain" />
    </View>
  );
};

export default CandleStickBarChart;
