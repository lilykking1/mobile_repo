import { ViewStyle } from 'react-native';

export function getColor(color: string): ViewStyle {
  return { backgroundColor: color };
}

// Using flex (instead of width %) ensures that
// the <StackedBarChartItem> percentages will fit
// PROPORTIONALLY even if the total sum of percentages
// does not equal 100 exactly.
export function getPercentage(percentage?: number): ViewStyle {
  return { flex: percentage };
}

export function getSideBorderRadius(
  side: 'Right' | 'Left',
  isRounded: boolean
): ViewStyle {
  const DEFAULT_RADIUS = 4;

  const sideBorderRadius = isRounded ? DEFAULT_RADIUS : 0;

  return {
    [`borderTop${side}Radius`]: sideBorderRadius,
    [`borderBottom${side}Radius`]: sideBorderRadius,
  };
}
