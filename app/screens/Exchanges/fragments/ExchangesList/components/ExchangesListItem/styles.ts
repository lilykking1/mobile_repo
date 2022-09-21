import { palette } from '@app/theme';
import { StyleSheet } from 'react-native';
import { HEADER_HORIZONTAL_PADDING } from '@app/screens/Exchanges/views/Empty/constants';

const styles = StyleSheet.create({
  exchangeIcon: {
    marginRight: 15,
  },
  exchangeText: {
    color: palette.royalBlue[900],
  },
  flatListItemContainer: {
    alignItems: 'center',
    backgroundColor: palette.white,
    borderRadius: 12,
    flexDirection: 'row',
    height: 62,
    justifyContent: 'space-between',
    marginBottom: 10,
    paddingHorizontal: HEADER_HORIZONTAL_PADDING,
    width: '100%',
  },
  leftFlatListItemContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  rightFlatListItemText: {
    color: palette.royalBlue[500],
  },
});

export default styles;
