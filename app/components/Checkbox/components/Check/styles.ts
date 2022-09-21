import { StyleSheet } from 'react-native';

import { palette } from '@app/theme';
import { DisabledStyle, ErrorStyle, StateStyle } from './types';

export const stateStyle = StyleSheet.create<StateStyle>({
  checkedDark: {
    backgroundColor: palette.royalBlue[400],
    borderColor: palette.royalBlue[400],
  },
  checkedLight: {
    backgroundColor: palette.royalBlue[400],
    borderColor: palette.royalBlue[400],
  },
  uncheckedDark: {
    backgroundColor: palette.grey[700],
    borderColor: palette.grey[600],
  },
  uncheckedLight: {
    backgroundColor: palette.white,
    borderColor: palette.grey[500],
  },
});

export const disabledStyle = StyleSheet.create<DisabledStyle>({
  checkedDark: {
    backgroundColor: palette.royalBlue[900],
    borderColor: palette.royalBlue[900],
  },
  checkedLight: {
    backgroundColor: palette.grey[500],
    borderColor: palette.grey[500],
  },
  uncheckedDark: {
    backgroundColor: palette.royalBlue[900],
    borderColor: palette.transparent,
  },
  uncheckedLight: {
    backgroundColor: palette.white,
    borderColor: palette.grey[500],
  },
});

export const errorStyle = StyleSheet.create<ErrorStyle>({
  checked: {
    backgroundColor: palette.red[500],
    borderColor: palette.red[500],
  },
  unchecked: {
    backgroundColor: palette.white,
    borderColor: palette.red[500],
  },
});

const styles = StyleSheet.create({
  base: {
    alignItems: 'center',
    borderRadius: 6,
    borderWidth: 1,
    height: 20,
    justifyContent: 'center',
    overflow: 'hidden',
    width: 20,
  },
});

export default styles;
