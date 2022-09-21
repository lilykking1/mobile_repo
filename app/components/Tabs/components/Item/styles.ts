import { StyleSheet } from 'react-native';
import { palette } from '@app/theme';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexWrap: 'nowrap',
    flex: 1,
    justifyContent: 'center',
    minHeight: '100%',
    paddingHorizontal: 10,
  },
  label: {
    lineHeight: 24,
  },
  selectedBox: {
    backgroundColor: palette.white,
    borderRadius: 12,
  },
});

export default styles;
