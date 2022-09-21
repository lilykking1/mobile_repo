import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  coinsContainerFirst: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  coinsContainerSecond: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: '30%',
    paddingRight: '9%',
    paddingTop: '4%',
  },
  container: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
  },
  imageCoinsContainer: {
    flexGrow: 3.0,
    flex: 3.0,
    width: '100%',
  },
  imageStaking: {
    marginTop: '10%',
  },
  lottieView: {
    width: '100%',
  },
  lottieViewContainer: {
    flexGrow: 5.0,
    flex: 5.0,
    justifyContent: 'center',
  },
  subtitle: {
    flexGrow: 1.0,
    flex: 1.0,
    paddingHorizontal: 48,
    textAlign: 'center',
  },
  title: {
    flexGrow: 1.0,
    flex: 1.0,
    fontWeight: '700',
    textAlign: 'center',
  },
});

export default styles;
