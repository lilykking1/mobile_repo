import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  alertIcon: {
    bottom: 15,
    position: 'absolute',
    right: -15,
  },
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
  riskContainer: {
    marginTop: 40,
    paddingBottom: 29,
    position: 'relative',
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
