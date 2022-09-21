import { StyleSheet } from 'react-native';

import { IconButtonSizeStyle } from './types';

export const containerSizes = StyleSheet.create<IconButtonSizeStyle>({
  large: {
    padding: 12,
  },
  normal: {
    padding: 10,
  },
  small: {
    padding: 6,
  },
  xlarge: {
    padding: 14,
  },
});

const styles = StyleSheet.create({
  base: {
    alignItems: 'center',
    borderRadius: 12,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  text: {
    alignSelf: 'center',
  },
});

export default styles;
