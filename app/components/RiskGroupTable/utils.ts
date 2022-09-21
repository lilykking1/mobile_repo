import { Theme } from '@app/state/stores/settings/types';
import { StyleProp, TextStyle, ViewStyle } from 'react-native';
import { RiskGroupTableColumns } from './constants';
import {
  columnItemFontWeightStyles,
  columnItemPaddingStyles,
  darkBackgroundStyles,
  darkColumnItemFontColorStyles,
  lightBackgroundStyles,
  lightColumnItemFontColorStyles,
  baseStyles,
} from './styles';
import {
  ColumnFontColorVariant,
  ColumnFontWeightVariant,
  ColumnPaddingVariant,
  ItemBackgroundColorVariant,
} from './types';

export const getFontColorStyle = (
  theme: Theme = 'light',
  color: ColumnFontColorVariant
): TextStyle => {
  const isDarkTheme = theme === 'dark';
  return isDarkTheme
    ? darkColumnItemFontColorStyles[color]
    : lightColumnItemFontColorStyles[color];
};

export const getFontWeightStyle = (
  weight: ColumnFontWeightVariant
): TextStyle => columnItemFontWeightStyles[weight];

export const getPaddingStyle = (padding: ColumnPaddingVariant): ViewStyle =>
  columnItemPaddingStyles[padding];

export const getBackgroundStyle = (
  theme: Theme = 'light',
  background: ItemBackgroundColorVariant = 'default'
): ViewStyle => {
  const isDarkTheme = theme === 'dark';
  return isDarkTheme
    ? darkBackgroundStyles[background]
    : lightBackgroundStyles[background];
};

export function getCustomItemColumnStyle(
  column: RiskGroupTableColumns,
  isSelected: boolean,
  theme: Theme = 'light'
): StyleProp<TextStyle> {
  const fontStyles = isSelected ? 'selected' : 'default';

  if (column === RiskGroupTableColumns.POTENTIAL_LOSS_AVG) {
    return [
      baseStyles.tableColumnItem,
      getFontColorStyle(theme, 'red'),
      getFontWeightStyle(fontStyles),
      getPaddingStyle('default'),
    ];
  }
  if (column === RiskGroupTableColumns.POTENTIAL_GAIN_AVG) {
    return [
      baseStyles.tableColumnItem,
      getFontColorStyle(theme, 'green'),
      getFontWeightStyle(fontStyles),
      getPaddingStyle('default'),
    ];
  }
  if (column === RiskGroupTableColumns.GROUPS) {
    return [
      baseStyles.tableColumnItem,
      getFontColorStyle(theme, fontStyles),
      getFontWeightStyle(fontStyles),
      getPaddingStyle('large'),
    ];
  }
  if (column === RiskGroupTableColumns.NUMBER) {
    return [
      baseStyles.tableColumnItem,
      getFontColorStyle(theme, fontStyles),
      getFontWeightStyle(fontStyles),
      getPaddingStyle('none'),
    ];
  }

  return baseStyles.tableColumnItem;
}

export function getCustomItemContainerStyle(
  isSelected: boolean,
  theme: Theme = 'light'
): StyleProp<ViewStyle> {
  const backgroundStyle: ItemBackgroundColorVariant = isSelected
    ? 'selected'
    : 'default';
  return [
    baseStyles.tableItemContainer,
    getBackgroundStyle(theme, backgroundStyle),
  ];
}
