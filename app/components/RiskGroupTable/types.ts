export type RiskGroup = {
  index: number;
  potentialGainAvg?: number;
  potentialLossAvg?: number;
  range: string;
};

export type ColumnFontWeightVariant = 'default' | 'selected';

export type ColumnFontColorVariant = 'default' | 'selected' | 'green' | 'red';

export type ItemBackgroundColorVariant = 'default' | 'selected';

export type ColumnPaddingVariant = 'default' | 'large' | 'none';
