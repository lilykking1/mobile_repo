import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  actions: {
    flexDirection: 'row',
  },
  header: {
    paddingBottom: 16,
    paddingHorizontal: 14,
    paddingTop: 15,
    zIndex: 2,
  },
  headerContent: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 10,
  },
  searchInputContainer: {
    marginTop: 20,
  },
  spacer: {
    marginRight: 8,
  },
});

export default styles;
