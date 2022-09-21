import { StyleSheet } from 'react-native';
import { palette } from '@app/theme';

const styles = StyleSheet.create({
  backgroundBottom: {
    flexDirection: 'column',
    height: 220,
    paddingHorizontal: 16,
    paddingTop: 18,
  },
  backgroundFlatList: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
  containerHeader: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 30,
  },
  flatList: {
    paddingHorizontal: 16,
  },
  flatListFooter: {
    backgroundColor: palette.transparent,
    height: 20,
  },
});

export default styles;
