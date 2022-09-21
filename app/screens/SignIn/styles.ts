import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 44,
    width: '100%',
  },
  credentialsErrorContainer: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  emailInput: {
    marginBottom: 14,
    marginTop: 20,
    width: '100%',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 30,
  },
  forgotPasswordLink: {
    alignSelf: 'flex-end',
    fontWeight: '400',
  },
  linkContainer: {
    marginHorizontal: 4,
  },
  title: {
    alignSelf: 'flex-start',
  },
});

export default styles;
