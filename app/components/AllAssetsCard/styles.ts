import { StyleSheet } from 'react-native';

import { EXCHANGE_CARD_WIDTH, EXCHANGE_CARD_HEIGHT } from './constants';

const styles = StyleSheet.create({
  absolute: {
    left: 8,
    position: 'absolute',
    top: 20,
    zIndex: 1,
  },
  container: {
    alignItems: 'center',
    borderRadius: 20,
    borderWidth: 2,
    height: EXCHANGE_CARD_HEIGHT,
    justifyContent: 'center',
    width: EXCHANGE_CARD_WIDTH,
  },
  content: {
    flex: 1,
    paddingHorizontal: 16,
  },
  dollarLabel: {
    left: 7,
    marginRight: 'auto',
    top: 20,
    zIndex: 1,
  },
  label: {
    marginTop: 10,
  },
  maskContainer: {
    flexDirection: 'row',
    marginLeft: '68%',
  },
  maskedValue: {
    left: 20,
    margin: 0,
    padding: 0,
    position: 'absolute',
    top: 20,
    zIndex: 1,
  },
});

export default styles;
