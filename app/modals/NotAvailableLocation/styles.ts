import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  backgroundImage: {
    position: 'absolute',
    top: 0,
    width: '100%',
  },
  coinImage: {
    alignSelf: 'center',
    height: 120,
    marginBottom: 18,
    width: 120,
  },
  container: {
    alignContent: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  notAvailableLocationSubtitle: {
    lineHeight: 20,
    marginBottom: 37,
    marginLeft: 33,
    marginRight: 31,
    marginTop: 16,
    textAlign: 'center',
  },
  notAvailableLocationTitle: {
    marginTop: 35,
    textAlign: 'center',
  },
});

export default styles;
