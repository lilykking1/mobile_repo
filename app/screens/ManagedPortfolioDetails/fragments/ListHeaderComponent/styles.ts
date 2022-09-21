import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  customPeriodPosition: {
    alignSelf: 'flex-end',
  },
  headerContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 30,
    width: '100%',
  },
  headerContainerMissingChart: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 76,
    marginTop: 19,
    width: '100%',
  },
  portfolioChange: {
    flex: 0,
    position: 'absolute',
    zIndex: 2,
  },
  rowContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
    marginTop: 30,
    paddingHorizontal: 12,
    width: '100%',
  },
});

export default styles;
