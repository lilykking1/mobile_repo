import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  buttonContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  container: {
    flex: 1,
    height: '100%',
    paddingHorizontal: 24,
    width: '100%',
  },
  copyWalletContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  copyWalletInnerContainer: {
    marginTop: 3,
    width: '83%',
  },
  iconButton: {
    height: 50,
    width: 50,
  },
  subtitle: {
    marginBottom: 30,
  },
  title: {
    marginBottom: 68,
    marginTop: 23,
  },
});

export default styles;
