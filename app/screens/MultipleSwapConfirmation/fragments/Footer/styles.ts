import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  button: {
    flex: 1,
  },
  buttonsContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  container: {
    alignItems: 'center',
    flex: 0.15,
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
  },
  message: {
    marginBottom: 12,
    width: '100%',
  },
  spaceLeft: {
    marginLeft: 20,
  },
});

export default styles;
