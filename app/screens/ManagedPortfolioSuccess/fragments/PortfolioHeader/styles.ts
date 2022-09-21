import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  bottomHeaderContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 22,
    width: '100%',
  },
  chevronRightIconsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginHorizontal: 8,
    paddingTop: 18,
  },
  firstChevronRightIcon: {
    marginRight: -8,
  },
  headerContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 16,
    paddingRight: 24,
    width: '100%',
  },
  leftHeaderContainer: {
    width: 170,
  },
  riskCard: {
    borderRadius: 5,
    padding: 4,
  },
  riskLabel: {
    textAlign: 'center',
  },
  risksContainer: {
    flexDirection: 'row',
  },
  topHeaderContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  topRightHeaderContainer: {
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
});

export default styles;
