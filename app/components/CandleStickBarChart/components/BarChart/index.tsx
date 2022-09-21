import React, { FC, useMemo } from 'react';
import { View, ViewProps } from 'react-native';

import styles from './styles';
import {
  getVariantStyle,
  getFilledStyle,
  getBubbleStyle,
  convertPercentage,
} from './utils';
import { ChartType, StyleType } from './types';

interface BarChartProps extends ViewProps {
  percentage: number;
  maxPercentage?: number;
  chartType: ChartType;
}

const BarChart: FC<BarChartProps> = ({
  percentage,
  maxPercentage = 100,
  chartType,
}) => {
  const barStyle = [styles.base, getVariantStyle(chartType)];
  const filledStyle = useMemo(
    () => [
      styles.filledChartBase,
      getFilledStyle(chartType),
      convertPercentage(
        percentage,
        maxPercentage,
        StyleType.FILLED_STYLE,
        chartType
      ),
    ],
    [chartType, percentage, maxPercentage]
  );
  const bubbleStyle = useMemo(
    () => [
      styles.bubbleBase,
      getBubbleStyle(chartType),
      convertPercentage(
        percentage,
        maxPercentage,
        StyleType.BUBBLE_STYLE,
        chartType
      ),
    ],
    [chartType, percentage, maxPercentage]
  );

  return (
    <View style={barStyle}>
      <View style={filledStyle} />
      <View style={bubbleStyle} />
    </View>
  );
};

export default BarChart;
