import { StyleSheet } from 'react-native';

export const BACKGROUND_COLOR = '#625FD7';

const styles = StyleSheet.create({
  amountContainer: {
    flex: 0.7,
    justifyContent: 'flex-end',
  },
  container: {
    alignItems: 'center',
    borderRadius: 20,
    flexDirection: 'row',
    height: 117,
    justifyContent: 'space-between',
    paddingBottom: 11,
    paddingHorizontal: 32,
    paddingTop: 17,
  },
  copyButton: {
    borderRadius: 8,
  },
  fiatAmount: {
    opacity: 0.4,
  },
  fiatAmountContainer: {
    flex: 0.25,
  },
  title: {
    lineHeight: 22,
  },
  titleContainer: {
    flex: 0.3,
  },
});

export default styles;
