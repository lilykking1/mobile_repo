import { StyleSheet } from 'react-native';

import { ActionButtonSizeStyle } from './types';

export const sizes = StyleSheet.create<ActionButtonSizeStyle>({
  large: {
    height: 76,
    paddingHorizontal: 36,
  },
  normal: {
    height: 68,
    paddingHorizontal: 32,
  },
  small: {
    height: 60,
    paddingHorizontal: 27,
  },
});

const styles = StyleSheet.create({
  base: {
    alignItems: 'center',
    borderRadius: 12,
    justifyContent: 'center',
  },
  fullWidth: {
    flex: 1,
  },
  iconContainer: {
    marginBottom: 7,
  },
  label: {
    alignSelf: 'center',
    textAlign: 'center',
  },
  message: {
    lineHeight: 18,
    textAlign: 'center',
  },
});

export default styles;
