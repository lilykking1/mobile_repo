import { isNumber } from 'lodash';

export const getIntervalArray = (
  width: number,
  dataLength: number,
  labelWidth: number
): number[] => {
  if (!isNumber(width) || !isNumber(dataLength) || !isNumber(labelWidth)) {
    return [];
  }

  const optimalNumberOfLabels = Math.floor(width / labelWidth);

  const defaultSpacing = width / dataLength;

  const interval = Math.ceil(labelWidth / defaultSpacing);

  const renderLabelArray = [...Array(optimalNumberOfLabels).keys()]
    .slice(1)
    .map((x) => x * interval)
    .filter((x) => x <= dataLength - 2);

  return renderLabelArray;
};
