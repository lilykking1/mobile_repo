import { StyleSheet } from 'react-native';
import { palette } from '@app/theme';

const styles = StyleSheet.create({
  amountInputContainer: {
    marginBottom: 8,
    marginTop: 8,
  },
  arrowsStyle: {
    bottom: -10,
    flexDirection: 'row',
    paddingHorizontal: 10,
    position: 'absolute',
  },
  avaliableAmountContainer: {
    flexDirection: 'row',
  },
  buttonStyle: {
    marginTop: 15,
  },
  container: {
    flex: 1,
  },
  footer: {
    bottom: 18,
    justifyContent: 'center',
    left: 24,
    position: 'absolute',
    right: 24,
  },
  fromCoinContainer: {
    alignItems: 'center',
    borderBottomWidth: 1,
    height: '55%',
    justifyContent: 'flex-end',
    paddingBottom: 27,
    width: '100%',
  },
  marketMessage: {
    color: palette.grey[600],
    textAlign: 'center',
  },
  maxLink: {
    marginLeft: 6,
    marginTop: -2,
  },
  swapContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 160,
    paddingHorizontal: 24,
    width: '100%',
  },
  toCoinButton: {
    marginTop: 15,
  },
  toCoinContainer: {
    alignItems: 'center',
    height: '55%',
    justifyContent: 'flex-start',
    paddingTop: 15,
    width: '100%',
  },
  youWillGetText: {
    marginTop: 9,
  },
  youWillGetValue: {
    marginTop: 6,
  },
});

export default styles;
