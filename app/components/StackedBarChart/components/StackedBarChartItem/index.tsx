import React, { FC, useMemo } from 'react';
import { View, ViewProps } from 'react-native';
import styles from './styles';
import { getPercentage, getColor, getSideBorderRadius } from './utils';

interface StackedBarChartItemProps extends ViewProps {
  percentage?: number;
  color?: string;
  leftBorderRounded?: boolean;
  rightBorderRounded?: boolean;
}

const StackedBarChartItem: FC<StackedBarChartItemProps> = ({
  color,
  percentage,
  style,
  leftBorderRounded,
  rightBorderRounded,
  ...rest
}) => {
  const customStyles = useMemo(
    () => [
      styles.base,
      getPercentage(percentage),
      getColor(color),
      getSideBorderRadius('Right', rightBorderRounded),
      getSideBorderRadius('Left', leftBorderRounded),
      style,
    ],
    [style, percentage, color, leftBorderRounded, rightBorderRounded]
  );

  // Do not render if the percentage is invalid
  if (!percentage || percentage <= 0) {
    return null;
  }

  return <View style={customStyles} {...rest} />;
};

export default StackedBarChartItem;
