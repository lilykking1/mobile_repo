import { RiskGroupTableColumns } from '../constants';
import {
  darkColumnItemFontColorStyles,
  lightColumnItemFontColorStyles,
  columnItemFontWeightStyles,
  columnItemPaddingStyles,
  darkBackgroundStyles,
  lightBackgroundStyles,
  baseStyles,
} from '../styles';
import {
  getBackgroundStyle,
  getCustomItemColumnStyle,
  getCustomItemContainerStyle,
  getFontColorStyle,
  getFontWeightStyle,
  getPaddingStyle,
} from '../utils';

describe('Risk Table utils methods', () => {
  describe('Get correct Font Color styles based on app theme and color variant', () => {
    it('has a royalBlue.900 text color if variant is default in light theme', () => {
      const result = getFontColorStyle('light', 'default');
      expect(result).toMatchObject(lightColumnItemFontColorStyles.default);
    });
    it('has a green.500 text color if variant is green in light theme', () => {
      const result = getFontColorStyle('light', 'green');
      expect(result).toMatchObject(lightColumnItemFontColorStyles.green);
    });
    it('has a red.500 text color if variant is red in light theme', () => {
      const result = getFontColorStyle('light', 'red');
      expect(result).toMatchObject(lightColumnItemFontColorStyles.red);
    });
    it('has a royalBlue.500 text color if variant is selected in light theme', () => {
      const result = getFontColorStyle('light', 'selected');
      expect(result).toMatchObject(lightColumnItemFontColorStyles.selected);
    });
    it('has a white text color if variant is default in dark theme', () => {
      const result = getFontColorStyle('dark', 'default');
      expect(result).toMatchObject(darkColumnItemFontColorStyles.default);
    });
    it('has a green.500 text color if variant is green in dark theme', () => {
      const result = getFontColorStyle('dark', 'green');
      expect(result).toMatchObject(darkColumnItemFontColorStyles.green);
    });
    it('has a red.500 text color if variant is red in dark theme', () => {
      const result = getFontColorStyle('dark', 'red');
      expect(result).toMatchObject(darkColumnItemFontColorStyles.red);
    });
    it('has a royalBlue.400 text color if variant is selected in dark theme', () => {
      const result = getFontColorStyle('dark', 'selected');
      expect(result).toMatchObject(darkColumnItemFontColorStyles.selected);
    });
  });

  describe('Get correct Font Weight styles based on weight variant', () => {
    it('has a 500 font weight if variant is default', () => {
      const result = getFontWeightStyle('default');
      expect(result).toMatchObject(columnItemFontWeightStyles.default);
    });
    it('has a 900 font weight if variant is selected', () => {
      const result = getFontWeightStyle('selected');
      expect(result).toMatchObject(columnItemFontWeightStyles.selected);
    });
  });

  describe('Get correct padding styles based on padding variant', () => {
    it('has a 6 padding left if variant is default', () => {
      const result = getPaddingStyle('default');
      expect(result).toMatchObject(columnItemPaddingStyles.default);
    });
    it('has a 19 padding left if variant is large', () => {
      const result = getPaddingStyle('large');
      expect(result).toMatchObject(columnItemPaddingStyles.large);
    });
    it('has a 0 padding left if variant is none', () => {
      const result = getPaddingStyle('none');
      expect(result).toMatchObject(columnItemPaddingStyles.none);
    });
  });

  describe('Get correct Background Color styles based on app theme and background variant', () => {
    it('has a grey.300 background color if variant is default in light theme', () => {
      const result = getBackgroundStyle('light', 'default');
      expect(result).toMatchObject(lightBackgroundStyles.default);
    });
    it('has a royalBlue.500 with 0.2 opacity background color if variant is selected in light theme', () => {
      const result = getBackgroundStyle('light', 'selected');
      expect(result).toMatchObject(lightBackgroundStyles.selected);
    });
    it('has a royalBlue.1000 background color if variant is default in dark theme', () => {
      const result = getBackgroundStyle('dark', 'default');
      expect(result).toMatchObject(darkBackgroundStyles.default);
    });
    it('has a royalBlue.400 with 0.2 opacity background color if variant is selected in dark theme', () => {
      const result = getBackgroundStyle('dark', 'selected');
      expect(result).toMatchObject(darkBackgroundStyles.selected);
    });
  });

  describe('Get correct Item Column styles based on app theme, column and if the item is selected/highlighted', () => {
    it('Potential Loss Avg column styles if theme is light and item is not highlighted', () => {
      const result = getCustomItemColumnStyle(
        RiskGroupTableColumns.POTENTIAL_LOSS_AVG,
        false,
        'light'
      );
      expect(result).toMatchObject([
        baseStyles.tableColumnItem,
        getFontColorStyle('light', 'red'),
        getFontWeightStyle('default'),
        getPaddingStyle('default'),
      ]);
    });
    it('Potential Gain Avg column styles if theme is light and item is not highlighted', () => {
      const result = getCustomItemColumnStyle(
        RiskGroupTableColumns.POTENTIAL_GAIN_AVG,
        false,
        'light'
      );
      expect(result).toMatchObject([
        baseStyles.tableColumnItem,
        getFontColorStyle('light', 'green'),
        getFontWeightStyle('default'),
        getPaddingStyle('default'),
      ]);
    });
    it('Risk Groups column styles if theme is light and item is not highlighted', () => {
      const result = getCustomItemColumnStyle(
        RiskGroupTableColumns.GROUPS,
        false,
        'light'
      );
      expect(result).toMatchObject([
        baseStyles.tableColumnItem,
        getFontColorStyle('light', 'default'),
        getFontWeightStyle('default'),
        getPaddingStyle('large'),
      ]);
    });
    it('Risk Number column styles if theme is light and item is not highlighted', () => {
      const result = getCustomItemColumnStyle(
        RiskGroupTableColumns.NUMBER,
        false,
        'light'
      );
      expect(result).toMatchObject([
        baseStyles.tableColumnItem,
        getFontColorStyle('light', 'default'),
        getFontWeightStyle('default'),
        getPaddingStyle('none'),
      ]);
    });
    it('Potential Loss Avg column styles if theme is light and item is highlighted', () => {
      const result = getCustomItemColumnStyle(
        RiskGroupTableColumns.POTENTIAL_LOSS_AVG,
        true,
        'light'
      );
      expect(result).toMatchObject([
        baseStyles.tableColumnItem,
        getFontColorStyle('light', 'red'),
        getFontWeightStyle('selected'),
        getPaddingStyle('default'),
      ]);
    });
    it('Potential Gain Avg column styles if theme is light and item is highlighted', () => {
      const result = getCustomItemColumnStyle(
        RiskGroupTableColumns.POTENTIAL_GAIN_AVG,
        true,
        'light'
      );
      expect(result).toMatchObject([
        baseStyles.tableColumnItem,
        getFontColorStyle('light', 'green'),
        getFontWeightStyle('selected'),
        getPaddingStyle('default'),
      ]);
    });
    it('Risk Groups column styles if theme is light and item is highlighted', () => {
      const result = getCustomItemColumnStyle(
        RiskGroupTableColumns.GROUPS,
        true,
        'light'
      );
      expect(result).toMatchObject([
        baseStyles.tableColumnItem,
        getFontColorStyle('light', 'selected'),
        getFontWeightStyle('selected'),
        getPaddingStyle('large'),
      ]);
    });
    it('Risk Number column styles if theme is light and item is highlighted', () => {
      const result = getCustomItemColumnStyle(
        RiskGroupTableColumns.NUMBER,
        true,
        'light'
      );
      expect(result).toMatchObject([
        baseStyles.tableColumnItem,
        getFontColorStyle('light', 'selected'),
        getFontWeightStyle('selected'),
        getPaddingStyle('none'),
      ]);
    });
    it('Potential Loss Avg column styles if theme is dark and item is not highlighted', () => {
      const result = getCustomItemColumnStyle(
        RiskGroupTableColumns.POTENTIAL_LOSS_AVG,
        false,
        'dark'
      );
      expect(result).toMatchObject([
        baseStyles.tableColumnItem,
        getFontColorStyle('dark', 'red'),
        getFontWeightStyle('default'),
        getPaddingStyle('default'),
      ]);
    });
    it('Potential Gain Avg column styles if theme is dark and item is not highlighted', () => {
      const result = getCustomItemColumnStyle(
        RiskGroupTableColumns.POTENTIAL_GAIN_AVG,
        false,
        'dark'
      );
      expect(result).toMatchObject([
        baseStyles.tableColumnItem,
        getFontColorStyle('dark', 'green'),
        getFontWeightStyle('default'),
        getPaddingStyle('default'),
      ]);
    });
    it('Risk Groups column styles if theme is dark and item is not highlighted', () => {
      const result = getCustomItemColumnStyle(
        RiskGroupTableColumns.GROUPS,
        false,
        'dark'
      );
      expect(result).toMatchObject([
        baseStyles.tableColumnItem,
        getFontColorStyle('dark', 'default'),
        getFontWeightStyle('default'),
        getPaddingStyle('large'),
      ]);
    });
    it('Risk Number column styles if theme is dark and item is not highlighted', () => {
      const result = getCustomItemColumnStyle(
        RiskGroupTableColumns.NUMBER,
        false,
        'dark'
      );
      expect(result).toMatchObject([
        baseStyles.tableColumnItem,
        getFontColorStyle('dark', 'default'),
        getFontWeightStyle('default'),
        getPaddingStyle('none'),
      ]);
    });
    it('Potential Loss Avg column styles if theme is dark and item is highlighted', () => {
      const result = getCustomItemColumnStyle(
        RiskGroupTableColumns.POTENTIAL_LOSS_AVG,
        true,
        'dark'
      );
      expect(result).toMatchObject([
        baseStyles.tableColumnItem,
        getFontColorStyle('dark', 'red'),
        getFontWeightStyle('selected'),
        getPaddingStyle('default'),
      ]);
    });
    it('Potential Gain Avg column styles if theme is dark and item is highlighted', () => {
      const result = getCustomItemColumnStyle(
        RiskGroupTableColumns.POTENTIAL_GAIN_AVG,
        true,
        'dark'
      );
      expect(result).toMatchObject([
        baseStyles.tableColumnItem,
        getFontColorStyle('dark', 'green'),
        getFontWeightStyle('selected'),
        getPaddingStyle('default'),
      ]);
    });
    it('Risk Groups column styles if theme is dark and item is highlighted', () => {
      const result = getCustomItemColumnStyle(
        RiskGroupTableColumns.GROUPS,
        true,
        'dark'
      );
      expect(result).toMatchObject([
        baseStyles.tableColumnItem,
        getFontColorStyle('dark', 'selected'),
        getFontWeightStyle('selected'),
        getPaddingStyle('large'),
      ]);
    });
    it('Risk Number column styles if theme is dark and item is highlighted', () => {
      const result = getCustomItemColumnStyle(
        RiskGroupTableColumns.NUMBER,
        true,
        'dark'
      );
      expect(result).toMatchObject([
        baseStyles.tableColumnItem,
        getFontColorStyle('dark', 'selected'),
        getFontWeightStyle('selected'),
        getPaddingStyle('none'),
      ]);
    });
  });
  describe('Get correct Item Container styles based on app theme and if the item is selected/highlighted', () => {
    it('Item container styles if theme is light and item is not highlighted', () => {
      const result = getCustomItemContainerStyle(false, 'light');
      expect(result).toMatchObject([
        baseStyles.tableItemContainer,
        getBackgroundStyle('light', 'default'),
      ]);
    });
    it('Item container styles if theme is light and item is highlighted', () => {
      const result = getCustomItemContainerStyle(true, 'light');
      expect(result).toMatchObject([
        baseStyles.tableItemContainer,
        getBackgroundStyle('light', 'selected'),
      ]);
    });
    it('Item container styles if theme is dark and item is not highlighted', () => {
      const result = getCustomItemContainerStyle(false, 'dark');
      expect(result).toMatchObject([
        baseStyles.tableItemContainer,
        getBackgroundStyle('dark', 'default'),
      ]);
    });
    it('Item container styles if theme is dark and item is highlighted', () => {
      const result = getCustomItemContainerStyle(true, 'dark');
      expect(result).toMatchObject([
        baseStyles.tableItemContainer,
        getBackgroundStyle('dark', 'selected'),
      ]);
    });
  });
});
