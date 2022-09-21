import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  content: {
    flex: 1,
  },
  header: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },
  space: {
    marginHorizontal: 7.5,
  },
  title: {
    lineHeight: 24,
    textAlign: 'center',
  },
  walletButtonsView: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
  },
});

export default styles;
