import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    width: '100%',
  },
  generateButton: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  generateContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  iconButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  iconButtonsMargin: {
    marginRight: 16,
  },
  iconContainer: {
    alignItems: 'center',
    borderRadius: 8,
    height: 32,
    justifyContent: 'center',
    marginRight: 12,
    width: 32,
  },
  walletAddress: {
    marginTop: 5,
  },
});

export default styles;
