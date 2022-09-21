import { palette } from '@app/theme';
import { StyleSheet } from 'react-native';

import { getFontStyleForWeight } from '@app/utils/font';

const styles = StyleSheet.create({
  base: {
    flexDirection: 'row',
  },
  container: {},
  error: {
    ...getFontStyleForWeight({
      fontFamily: 'VisueltPro',
      fontWeight: '500',
    }),
    color: palette.red[500],
    fontSize: 12,
    lineHeight: 18,
    marginLeft: 14,
    paddingTop: 2,
  },
  label: {
    ...getFontStyleForWeight({
      fontFamily: 'VisueltPro',
      fontWeight: '500',
    }),
    color: palette.grey[600],
    fontSize: 12,
    lineHeight: 18,
    marginLeft: 14,
    paddingTop: 2,
  },
});

export default styles;
