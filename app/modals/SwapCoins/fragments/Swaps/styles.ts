import { StyleSheet } from 'react-native';
import { DOT_SIZE } from './constants';

const styles = StyleSheet.create({
  container: {
    borderRadius: DOT_SIZE / 2,
    elevation: 9,
    height: DOT_SIZE,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.5,
    width: DOT_SIZE,
  },
});

export default styles;
