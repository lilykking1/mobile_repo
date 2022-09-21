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
  coinCard: {
    marginBottom: 16,
  },
  container: {
    flex: 1,
  },
  contentContainer: {
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  conversionWarningMessage: {
    paddingBottom: 16,
    paddingHorizontal: 4,
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
  productListTitle: {
    lineHeight: 22,
    marginBottom: 16,
  },
  sceneContainer: {
    flex: 1,
    paddingHorizontal: 16,
  },
  scrollView: {
    paddingTop: 29,
  },
  title: {
    lineHeight: 24,
  },
});

export default styles;
