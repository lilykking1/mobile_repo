export const calculatePercentage = (highValue: number, lowValue: number) =>
  highValue > 100
    ? { high: 100, low: (lowValue / highValue) * 100 }
    : { high: highValue, low: lowValue };
