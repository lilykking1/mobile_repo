import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  accrualCard: {
    flex: 0,
    paddingHorizontal: 9,
    paddingVertical: 10,
  },
  bottomSpace: {
    marginBottom: 8,
  },
  container: {
    borderBottomWidth: 1,
    paddingVertical: 18,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    lineHeight: 24,
  },
  value: {
    fontSize: 16,
    lineHeight: 24,
  },
  withoutSeparator: {
    borderBottomWidth: 0,
  },
});

export default styles;
