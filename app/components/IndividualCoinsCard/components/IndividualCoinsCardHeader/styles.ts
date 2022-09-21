import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  labelContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
    width: '100%',
  },
  leftLabel: {
    flex: 4,
  },
  mainContainer: {
    flexDirection: 'column',
    width: '100%',
  },
  middleLabel: {
    flex: 4,
    textAlign: 'left',
  },
  rightLabel: {
    flex: 2,
    textAlign: 'right',
  },
});

export default styles;
