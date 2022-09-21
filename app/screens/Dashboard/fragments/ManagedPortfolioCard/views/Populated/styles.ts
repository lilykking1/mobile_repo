import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  accrualCard: {
    flex: 0,
    marginTop: 8,
    paddingHorizontal: 9,
    paddingVertical: 10,
  },
  container: {
    marginBottom: 16,
  },
  paddings: {
    paddingHorizontal: 18,
    paddingTop: 18,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    lineHeight: 24,
    maxWidth: 145,
  },
  valuesContainer: {
    alignItems: 'flex-end',
  },
});

export default styles;
