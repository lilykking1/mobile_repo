import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 52,
    width: '100%',
  },
  cancel: {
    flex: 1,
    paddingRight: 8,
  },
  changeNumber: {
    flex: 1,
    paddingLeft: 8,
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer: {
    marginBottom: 40,
    marginTop: 40,
  },
  subtitle: {
    textAlign: 'center',
  },
  title: {
    marginBottom: 32,
    textAlign: 'center',
  },
});

export default styles;
