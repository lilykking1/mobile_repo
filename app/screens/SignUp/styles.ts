import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  checkBoxStyle: {
    marginRight: 15,
    marginTop: 5,
  },
  container: {
    alignItems: 'center',
    height: '100%',
    padding: 44,
    paddingTop: 0,
    flex: 1,
  },
  dontHaveAccount: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical: 32,
  },
  footer: {
    marginTop: 20,
    width: '100%',
  },
  footerKeyboardOpen: {
    display: 'flex',
    justifyContent: 'flex-end',
    marginBottom: 10,
    marginTop: 10,
    width: '100%',
  },
  forgotPasswordLink: {
    alignSelf: 'flex-end',
    fontWeight: '400',
    marginBottom: 24,
  },
  iconLeft: {
    left: 16,
    position: 'absolute',
    top: 52,
  },
  inputStyle: {
    marginBottom: 14,
    width: '100%',
  },
  linkContainer: {
    marginHorizontal: 4,
  },
  linkStyle: {
    marginBottom: -3,
    paddingLeft: 3,
  },
  scrollKeyboardOpen: {
    maxHeight: 370,
    width: '100%',
  },
  scrollViewStyle: {
    maxHeight: 460,
    width: '100%',
  },
  selectCountryContainer: {
    width: '100%',
  },
  selectStateContainer: {
    marginTop: 14,
    width: '100%',
  },
  terms: {
    flexDirection: 'row',
    marginRight: 20,
    marginVertical: 16,
  },
  textTerms: {
    width: 235,
  },
  title: {
    alignSelf: 'flex-start',
    marginBottom: 10,
    paddingTop: 15,
  },
  titleKeyboardOpen: {
    alignSelf: 'center',
    marginBottom: 30,
    marginTop: 20,
  },
  typographyAndLink: {
    flexDirection: 'row',
  },
});

export default styles;
