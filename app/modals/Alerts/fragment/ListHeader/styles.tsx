import { StyleSheet } from 'react-native';
import { ALERTS_LIST_HEADER_HEIGHT } from '../../constants';

const styles = StyleSheet.create({
  alertsListHeader: {
    alignItems: 'center',
    flexDirection: 'row',
    height: ALERTS_LIST_HEADER_HEIGHT,
    justifyContent: 'space-between',
  },
});

export default styles;
