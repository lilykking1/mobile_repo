import { palette } from '@app/theme';
import { StyleSheet } from 'react-native';
import { HEADER_HORIZONTAL_PADDING } from '../../views/Empty/constants';

const styles = StyleSheet.create({
  flatList: {
    width: '100%',
  },
  flatListContainer: {
    alignItems: 'center',
    backgroundColor: palette.grey[300],
    flex: 1,
    justifyContent: 'flex-start',
    paddingTop: 10,
  },
  flatListContentContainer: {
    paddingHorizontal: HEADER_HORIZONTAL_PADDING,
    paddingTop: 20,
  },
});

export default styles;
