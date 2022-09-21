import { StyleSheet } from 'react-native';

import { getFontStyleForWeight } from '@app/utils/font';

export const levelStyles = StyleSheet.create({
  active: {
    zIndex: 2,
  },
  error: {
    zIndex: 1,
  },
  normal: {
    zIndex: 0,
  },
});

const styles = StyleSheet.create({
  container: {
    paddingVertical: 8,
  },
  helperText: {
    ...getFontStyleForWeight({
      fontFamily: 'VisueltPro',
      fontWeight: '300',
    }),
    lineHeight: 20,
    marginLeft: 16,
    marginTop: 4,
  },
  label: {
    justifyContent: 'flex-end',
    lineHeight: 15,
    marginBottom: 4,
    marginRight: 17,
    textAlign: 'right',
  },
});

export default styles;
