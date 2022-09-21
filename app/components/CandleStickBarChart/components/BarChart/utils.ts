import { filledStyle, variantStyle } from './styles';
import { ChartType, StyleType } from './types';

export const getVariantStyle = (chartType: ChartType) =>
  chartType === 'gain' ? variantStyle.gainChart : variantStyle.lossChart;

export const getFilledStyle = (chartType: ChartType) =>
  chartType === 'gain'
    ? filledStyle.gainFilledChart
    : filledStyle.lossFilledChart;

export const getBubbleStyle = (chartType: ChartType) =>
  chartType === 'gain'
    ? filledStyle.gainBubbleChart
    : filledStyle.lossBubbleChart;

export const convertPercentage = (
  currentPercentage: number,
  maxPercentage: number,
  styleType: StyleType,
  chartType: ChartType
) => {
  const proportionalPercentage = (currentPercentage * 100) / maxPercentage;
  const percentageString = `${proportionalPercentage.toString()}%`;

  if (styleType === StyleType.FILLED_STYLE) {
    return { width: percentageString };
  }

  switch (chartType) {
    case 'gain':
      return { left: percentageString };
    default:
      return { right: percentageString };
  }
};
