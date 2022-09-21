import { StyleSheet, Dimensions } from 'react-native';
import { HORIZONTAL_PADDING } from './constants';

const width = Dimensions.get('window').width - HORIZONTAL_PADDING;

const styles = StyleSheet.create({
  footer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
  },
  title: {
    marginBottom: 69,
    marginTop: 50,
  },
  xLabels: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width,
  },
});

export default styles;
