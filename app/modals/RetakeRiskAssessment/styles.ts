import { StyleSheet, Platform } from 'react-native';

const styles = StyleSheet.create({
  btnCancel: {
    flex: 1,
  },
  btnRetake: {
    flex: 1,
    marginLeft: 16,
  },
  buttonsContainer: {
    flexDirection: 'row',
    marginBottom: Platform.OS === 'ios' ? 40 : 16,
  },
  container: {
    flex: 1,
  },
  image: {
    alignSelf: 'center',
    marginBottom: 40,
    marginTop: 60,
  },
  subtitle: {
    marginBottom: 40,
    textAlign: 'center',
  },
  title: {
    marginBottom: 20,
    textAlign: 'center',
  },
});

export default styles;
