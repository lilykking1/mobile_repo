import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  buttonBuyCrypto: {
    height: 44,
    width: 138,
  },
  buttonDeposit: {
    height: 44,
    marginRight: 15,
    width: 138,
  },
  container: {
    alignContent: 'stretch',
    alignItems: 'flex-start',
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'nowrap',
    height: '100%',
    justifyContent: 'space-between',
  },
  containerButtons: {
    alignItems: 'center',
    alignSelf: 'center',
    flexDirection: 'row',
    flexGrow: 1.5,
    flex: 1.5,
  },
  containerDescription: {
    alignItems: 'center',
    alignSelf: 'center',
    flexGrow: 1.5,
    flex: 1.5,
    justifyContent: 'center',
    paddingHorizontal: 60,
  },
  containerTitle: {
    alignItems: 'center',
    alignSelf: 'center',
    flexGrow: 2,
    flex: 2,
    justifyContent: 'center',
  },
  description: {
    textAlign: 'center',
  },
  image: {
    alignSelf: 'center',
    flexGrow: 5,
    flex: 5,
    width: '100%',
  },
});

export default styles;
