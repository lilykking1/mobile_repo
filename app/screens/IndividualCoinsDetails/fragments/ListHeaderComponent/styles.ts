import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  headerContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 8,
    marginVertical: 24,
  },
  headerSubtitle: {
    marginBottom: 11,
  },
  infoContainer: {
    alignItems: 'flex-end',
    justifyContent: 'center',
    textAlign: 'right',
  },
  percentageContainer: {
    marginBottom: -10,
  },
  percentageText: {
    fontWeight: '700',
    lineHeight: 60,
    paddingTop: 14,
  },
});

export default styles;
