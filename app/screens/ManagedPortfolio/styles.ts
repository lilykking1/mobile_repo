import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
  buttonContainer: {
    bottom: 25,
    paddingHorizontal: 16,
    position: 'absolute',
    width: Dimensions.get('screen').width,
  },
  chartContainer: {
    height: 100,
  },
  container: {
    flex: 1,
  },
  emptyView: {
    height: 30,
  },
  headerValues: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 30,
    width: '100%',
  },
  portfolioButton: {
    marginRight: 30,
  },
  sceneContainer: {
    flex: 1,
    paddingHorizontal: 16,
  },
  sceneTabsContainer: {
    paddingHorizontal: 16,
    paddingVertical: 24,
  },
  scrollView: {
    paddingTop: 29,
  },
});

export default styles;
