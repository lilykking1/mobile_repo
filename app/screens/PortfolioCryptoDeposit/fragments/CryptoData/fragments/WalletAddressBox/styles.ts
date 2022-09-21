import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  buttonsRow: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 2,
    marginTop: 20,
  },
  container: {
    borderRadius: 30,
    paddingHorizontal: 32,
    paddingTop: 83,
    paddingVertical: 17,
    position: 'absolute',
    top: 51,
    width: '100%',
    zIndex: -1,
  },
  generateButton: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  generateContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  iconContainer: {
    alignItems: 'center',
    borderRadius: 8,
    height: 32,
    justifyContent: 'center',
    marginRight: 12,
    width: 32,
  },
  qrButton: {
    height: 40,
    marginLeft: 16,
    width: 40,
  },
  walletAddress: {
    marginTop: 5,
  },
});

export default styles;
