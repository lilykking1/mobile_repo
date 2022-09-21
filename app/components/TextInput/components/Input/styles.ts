import { StyleSheet } from 'react-native';

import { getFontStyleForWeight } from '@app/utils/font';

import {
  LIGHT_DISABLED_TEXT,
  LIGHT_FILLED_TEXT,
  DARK_DISABLED_TEXT,
  DARK_FILLED_TEXT,
} from './constants';
import { InputStyleVariant } from './types';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexGrow: 1,
    flexShrink: 1,
  },
  input: {
    width: '100%',
    ...getFontStyleForWeight({
      fontFamily: 'VisueltPro',
      fontWeight: '400',
      fontSize: 16,
    }),
  },
  suffix: {
    alignSelf: 'flex-end',
    height: 19,
  },
});

export const lightTextStyles = StyleSheet.create<InputStyleVariant>({
  disabled: {
    color: LIGHT_DISABLED_TEXT,
  },
  filled: {
    color: LIGHT_FILLED_TEXT,
  },
});

export const darkTextStyles = StyleSheet.create<InputStyleVariant>({
  disabled: {
    color: DARK_DISABLED_TEXT,
  },
  filled: {
    color: DARK_FILLED_TEXT,
  },
});

export default styles;
