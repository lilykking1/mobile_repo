import { palette } from '@app/theme';
import Color from 'color';
import { StyleSheet } from 'react-native';

export const baseStyles = StyleSheet.create({
  tableColumnItem: {
    flex: 1,
    lineHeight: 17,
    textAlign: 'left',
  },
  tableContainer: {
    backgroundColor: palette.grey[300],
  },
  tableHeaderContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 4,
    width: '100%',
  },
  tableHeaderItem: {
    flex: 1,
  },
  tableItemContainer: {
    borderRadius: 30,
    flexDirection: 'row',
    marginBottom: 13,
    paddingVertical: 6,
    width: '100%',
  },
  title: {
    marginBottom: 27,
    marginTop: 43,
  },
});

export const lightColumnItemFontColorStyles = StyleSheet.create({
  default: {
    color: palette.royalBlue[900],
  },
  green: {
    color: palette.green[500],
  },
  red: {
    color: palette.red[500],
  },
  selected: {
    color: palette.royalBlue[500],
  },
});

export const darkColumnItemFontColorStyles = StyleSheet.create({
  default: {
    color: palette.white,
  },
  green: {
    color: palette.green[500],
  },
  red: {
    color: palette.red[500],
  },
  selected: {
    color: palette.royalBlue[400],
  },
});

export const columnItemFontWeightStyles = StyleSheet.create({
  default: {
    fontWeight: '500',
  },
  selected: {
    fontWeight: '900',
  },
});

export const columnItemPaddingStyles = StyleSheet.create({
  default: {
    paddingLeft: 6,
  },
  large: {
    paddingLeft: 19,
  },
  none: {
    paddingLeft: 0,
  },
});

export const lightBackgroundStyles = StyleSheet.create({
  default: {
    backgroundColor: palette.grey[300],
  },
  selected: {
    backgroundColor: Color(palette.royalBlue[500]).alpha(0.2).toString(),
  },
});

export const darkBackgroundStyles = StyleSheet.create({
  default: {
    backgroundColor: palette.royalBlue[1000],
  },
  selected: {
    backgroundColor: Color(palette.royalBlue[400]).alpha(0.2).toString(),
  },
});
