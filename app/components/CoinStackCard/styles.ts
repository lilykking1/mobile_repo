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
  },
  cardPercentage: {
    marginTop: 10,
  },
  cardTitle: {
    marginBottom: 10,
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
