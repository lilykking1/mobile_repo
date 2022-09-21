import { StyleSheet } from 'react-native';

import { palette } from '@app/theme';

const styles = StyleSheet.create({
  card: {
    alignItems: 'center',
    padding: 12,
  },
  coin: {
    marginBottom: 6,
  },
  coinTitle: {
    color: palette.grey[600],
  },
  wrapper: {
    flexDirection: 'row',
  },
});

export default styles;
