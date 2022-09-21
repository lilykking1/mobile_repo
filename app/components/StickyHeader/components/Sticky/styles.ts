import { StyleSheet } from 'react-native';
import { STICKY_HEADER_HORIZONTAL_MARGIN } from '../../constants';

const styles = StyleSheet.create({
  sticky: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: STICKY_HEADER_HORIZONTAL_MARGIN,
    paddingBottom: STICKY_HEADER_HORIZONTAL_MARGIN / 2,
  },
});

export default styles;
