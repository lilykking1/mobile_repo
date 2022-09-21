import { StyleSheet } from 'react-native';
import { EXCHANGE_CARD_WIDTH, EXCHANGE_CARD_HEIGHT } from '../constants';

const styles = StyleSheet.create({
  badge: {
    position: 'absolute',
    top: 12,
  },
  container: {
    alignItems: 'center',
    borderRadius: 20,
    borderWidth: 1,
    height: EXCHANGE_CARD_HEIGHT,
    justifyContent: 'center',
    width: EXCHANGE_CARD_WIDTH,
  },
  exchangeText: {
    marginTop: 5,
  },
  iconContainer: {
    alignItems: 'flex-end',
    height: 30,
    position: 'absolute',
    right: 20,
    top: 15,
    width: 30,
    zIndex: 2,
  },
  labels: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
  },
  logo: {
    alignSelf: 'center',
    height: 45,
  },
  titleContainer: {
    flexDirection: 'row',
  },
});

export default styles;
