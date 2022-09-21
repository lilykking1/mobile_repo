import { isNumber } from 'lodash';

/**
 * Calcs number of labels to render and which ones so there's no overlapping text
 * @param {number} width width of graph
 * @param {number} dataLength length of data
 * @param {number} labelWidth width of label
 * @returns number[]
 */
const getIntervalArray = (
  width: number,
  dataLength: number,
  labelWidth: number
): number[] => {
  // check types
  if (!isNumber(width) || !isNumber(dataLength) || !isNumber(labelWidth)) {
    return [];
  }

  // how many to render? Can't render a fraction so round down
  const optimalNumberOfLabels = Math.floor(width / labelWidth);

  // default data points spacing... 1 per point
  const defaultSpacing = width / dataLength;

  // What index should labels start so first label is not hidden at all
  // appropriate interval works the same as what index to start on but round down
  // to cleany populate index's to render
  const interval = Math.ceil(labelWidth / defaultSpacing);

  // what indexs in data array should we render based on interval
  const renderLabelArray = [...Array(optimalNumberOfLabels).keys()]
    .slice(1)
    .map((x) => x * interval)
    .filter((x) => x <= dataLength - 2); // when the data length is low protects from rendering last 2 valuess

  return renderLabelArray;
};

export default getIntervalArray;
