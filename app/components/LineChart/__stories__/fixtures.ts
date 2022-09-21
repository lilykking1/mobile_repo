import { translate } from '@app/i18n';
import { palette, PaletteColor } from '@app/theme';

export const colorOptions: PaletteColor[] = [
  palette.royalBlue[500],
  palette.green[600],
  palette.red[600],
  palette.yellow[600],
];

export const periodLabelOptions = [
  translate('IntervalShortLabels.allTime'),
  translate('IntervalShortLabels.5years'),
  translate('IntervalShortLabels.year'),
  translate('IntervalShortLabels.3months'),
  translate('IntervalShortLabels.1month'),
  translate('IntervalShortLabels.1week'),
  translate('IntervalShortLabels.24hours'),
];

export const generateDataArray = (dataLength: number): any[] =>
  Array(dataLength)
    .fill(1)
    .map((_, i) => ({
      time: new Date(2022, 4, 1 + i),
      value: Math.random() * 10000,
    }));
