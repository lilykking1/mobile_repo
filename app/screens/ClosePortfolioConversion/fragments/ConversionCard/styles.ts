import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  amountContainer: {
    alignItems: 'flex-end',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
    width: '100%',
  },
  amountText: {
    lineHeight: 21,
    marginBottom: 2,
  },
  buttonLabel: {
    fontWeight: 'bold',
  },
  card: {
    marginBottom: 33,
    paddingHorizontal: 32,
    paddingVertical: 27,
  },
  coinAmount: {
    lineHeight: 18,
  },
  coinAmountContainer: {
    paddingBottom: 10,
  },
  confirmButtonContainer: {
    marginVertical: 24,
  },
  fiatAmount: {
    fontSize: 48,
    lineHeight: 60,
    textAlign: 'center',
  },
  waitingContainer: {
    marginBottom: 36,
    marginTop: 24,
  },
  walletCard: {
    marginTop: 8,
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  walletText: {
    lineHeight: 20,
    marginBottom: 4,
  },
  walletTypeText: {
    lineHeight: 16,
  },
});

export default styles;
