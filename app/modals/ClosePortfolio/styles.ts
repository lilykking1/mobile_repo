import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  centeredText: {
    textAlign: 'center',
  },
  content: {
    marginBottom: 45,
    paddingHorizontal: 24,
  },
  goBackButton: {
    flex: 1,
    paddingLeft: 8,
  },
  innerContent: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  proceedButton: {
    flex: 1,
    paddingRight: 8,
  },
  subtitle: {
    marginBottom: 40,
    marginTop: 24,
  },
  title: {
    marginTop: 38,
  },
});

export default styles;
