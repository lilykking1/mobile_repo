import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  button: {
    position: 'relative',
    width: '100%',
  },
  card: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 88,
    paddingBottom: 11,
    paddingRight: 18,
    paddingTop: 18,
  },
  cardTitle: {
    marginBottom: 10,
  },
  coinAmount: {
    lineHeight: 20,
  },
  fiatAmount: {
    lineHeight: 14,
    marginTop: 5,
  },
  leftContainer: {
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  rightContainer: {
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
});

export default styles;
