import { StyleSheet } from 'react-native';
import { palette } from '@app/theme';

import {
  LIGHT_ACTIVE_BACKGROUND,
  LIGHT_DEFAULT_BACKGROUND,
  LIGHT_ACTIVE_BORDER,
  LIGHT_DEFAULT_BORDER,
  LIGHT_ERROR_BORDER,
  LIGHT_FILLED_BORDER,
  DARK_ACTIVE_BACKGROUND,
  DARK_DEFAULT_BACKGROUND,
  DARK_ACTIVE_BORDER,
  DARK_DEFAULT_BORDER,
  DARK_ERROR_BORDER,
  DARK_FILLED_BORDER,
} from './constants';
import { ContainerStyleVarient } from './types';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    borderRadius: 12,
    borderWidth: 1.5,
    flexDirection: 'row',
    lineHeight: 24,
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
});

export const lightStyles = StyleSheet.create<ContainerStyleVarient>({
  active: {
    backgroundColor: LIGHT_ACTIVE_BACKGROUND,
    borderColor: LIGHT_ACTIVE_BORDER,
  },
  default: {
    backgroundColor: LIGHT_DEFAULT_BACKGROUND,
    borderColor: LIGHT_DEFAULT_BORDER,
  },
  error: {
    borderColor: LIGHT_ERROR_BORDER,
    borderWidth: 1.5,
  },
  filled: {
    backgroundColor: LIGHT_ACTIVE_BACKGROUND,
    borderColor: LIGHT_FILLED_BORDER,
    borderWidth: 1,
    color: palette.royalBlue[900],
  },
});

export const darkStyles = StyleSheet.create<ContainerStyleVarient>({
  active: {
    backgroundColor: DARK_ACTIVE_BACKGROUND,
    borderColor: DARK_ACTIVE_BORDER,
  },
  default: {
    backgroundColor: DARK_DEFAULT_BACKGROUND,
    borderColor: DARK_DEFAULT_BORDER,
  },
  error: {
    borderColor: DARK_ERROR_BORDER,
    borderWidth: 1.5,
  },
  filled: {
    backgroundColor: DARK_ACTIVE_BACKGROUND,
    borderColor: DARK_FILLED_BORDER,
    borderWidth: 1,
  },
});

export default styles;
