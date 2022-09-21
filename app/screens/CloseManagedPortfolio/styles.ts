import { StyleSheet, Dimensions } from 'react-native';

export const { height } = Dimensions.get('screen');
const styles = StyleSheet.create({
  amountContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 70,
  },
  amountInputContainer: {
    marginBottom: 20,
    marginTop: 5,
  },
  bottomContainer: {
    marginTop: height - height / 1.1,
  },
  coinContainer: {
    alignItems: 'center',
    borderBottomWidth: 1,
    paddingBottom: 24,
    width: '100%',
  },
  container: {
    flex: 1,
    height: '100%',
    paddingHorizontal: 24,
    width: '100%',
  },
  convertToLabel: {
    marginBottom: 10,
    marginLeft: 3,
  },
  hintText: {
    marginTop: 52,
    textAlign: 'left',
  },
  hintTextMargin: {
    marginTop: '10%',
  },
  topContainer: {
    flex: 1,
  },
  typographyAmount: {
    fontSize: 48,
  },
  withdrawContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    paddingHorizontal: 24,
    width: '100%',
  },
});

export default styles;
