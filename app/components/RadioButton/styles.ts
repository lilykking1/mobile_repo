import { StyleSheet } from 'react-native';

import { palette } from '@app/theme';

import { RadioButtonVariantStyle } from './types';

export const contentStyles = StyleSheet.create<RadioButtonVariantStyle>({
  danger: {
    backgroundColor: palette.red[500],
  },
  primary: {
    backgroundColor: palette.royalBlue[500],
  },
  success: {
    backgroundColor: palette.green[500],
  },
  transparent: {
    backgroundColor: palette.grey[600],
  },
  warning: {
    backgroundColor: palette.yellow[500],
  },
});

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    backgroundColor: palette.grey[300],
    borderColor: palette.grey[300],
    borderRadius: 12,
    borderWidth: 1,
    overflow: 'hidden',
    padding: 4,
    position: 'relative',
  },
  contentActive: {
    flexDirection: 'row',
    flexWrap: 'nowrap',
  },
  contentInactive: {
    flexDirection: 'row',
    flexWrap: 'nowrap',
    margin: 4,
    position: 'absolute',
    zIndex: -1,
  },
  mask: {
    // Must be black to mask the alpha channel
    backgroundColor: palette.black,
    borderRadius: 8,
    height: '100%',
    left: 0,
    top: 0,
    width: 0,
  },
});

export default styles;
