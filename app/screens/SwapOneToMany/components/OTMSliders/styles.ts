import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  absoluteButton: {
    alignSelf: 'center',
    position: 'absolute',
    width: '95%',
    zIndex: 2,
  },
  backgroundFlatList: {
    flex: 1,
  },
  container: {
    flex: 1,
    height: '100%',
  },
  containerHeader: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: -30,
    paddingLeft: 16,
  },
  customList: {
    paddingHorizontal: 0,
  },
});

export default styles;
