import React, { FC, useMemo } from 'react';
import { View, ViewProps } from 'react-native';
import { StackedBarChartData } from '../../types';
import StackedBarChartItem from '../StackedBarChartItem';
import styles from './styles';
import { itemKeyExtractor } from './utils';

interface StackedBarChartProps extends ViewProps {
  data: StackedBarChartData[];
}

const StackedBarChart: FC<StackedBarChartProps> = ({
  data,
  style,
  ...rest
}) => {
  const customStyle = useMemo(() => [styles.base, style], [style]);

  const mappedDataItems = useMemo(() => {
    const items = data.map((item: StackedBarChartData, index: number) => {
      const isInitialItem = index === 0;
      const isLastItem = index === data.length - 1;

      return (
        <StackedBarChartItem
          color={item.color}
          key={itemKeyExtractor(item)}
          percentage={item.percentage}
          leftBorderRounded={isInitialItem}
          rightBorderRounded={isLastItem}
        />
      );
    });

    return items;
  }, [data]);

  return (
    <View style={customStyle} {...rest}>
      {mappedDataItems}
    </View>
  );
};

export default StackedBarChart;
