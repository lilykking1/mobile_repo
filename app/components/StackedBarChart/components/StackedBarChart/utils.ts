import { StackedBarChartData } from '../../types';

export function itemKeyExtractor(item: StackedBarChartData): string {
  return `${item.percentage}-${item.color}`;
}
