import { StyleSheet, Dimensions } from 'react-native';

const FULL_WITH = Dimensions.get('window').width;

const styles = StyleSheet.create({
  buyBox: {
    flex: 1,
    flexDirection: 'row',
  },
  buyButton: {
    width: 70,
  },
  buyCryptoContainer: {
    marginBottom: 40,
    paddingHorizontal: 24,
  },
  container: {
    flex: 1,
  },
  content: {
    paddingBottom: 32,
    paddingHorizontal: 25,
  },
  gemCard: {
    alignSelf: 'center',
    width: FULL_WITH,
  },
  gemPurchase: {
    marginTop: 27,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  metricsContainer: {
    marginBottom: 32,
    marginTop: 40,
    paddingHorizontal: 24,
  },
});

export default styles;
