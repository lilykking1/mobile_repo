import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  chevronRightIconsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginHorizontal: 8,
    paddingTop: 18,
  },
  container: {
    marginBottom: 16,
    padding: 18,
  },
  countdownContainer: {
    alignSelf: 'flex-start',
    borderRadius: 12,
    flexDirection: 'row',
    marginTop: 23,
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  firstChevronRightIcon: {
    marginRight: -8,
  },
  riskCard: {
    borderRadius: 5,
    padding: 4,
  },
  riskLabel: {
    textAlign: 'center',
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
    flexDirection: 'row',
  },
});

export default styles;
