import { palette } from '@app/theme';
import { StyleSheet } from 'react-native';
import {
  HEADER_HORIZONTAL_PADDING,
  HEADER_TEXT_HORIZONTAL_PADDING,
} from './constants';

const styles = StyleSheet.create({
  backButton: {
    backgroundColor: palette.grey[300],
  },
  backButtonContainer: {
    height: 40,
    justifyContent: 'center',
    width: 40,
  },
  container: {
    backgroundColor: palette.white,
    flex: 1,
    position: 'relative',
  },
  exchangeIcon: {
    marginRight: 15,
  },
  exchangeText: {
    color: palette.royalBlue[900],
  },
  flatList: {
    width: '100%',
  },
  flatListContainer: {
    alignItems: 'center',
    backgroundColor: palette.grey[300],
    flex: 1,
    justifyContent: 'flex-start',
    paddingTop: 30,
  },
  flatListContentContainer: {
    paddingHorizontal: HEADER_HORIZONTAL_PADDING,
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
  headerContainer: {
    alignItems: 'center',
    backgroundColor: palette.white,
    height: 276,
    justifyContent: 'flex-start',
    paddingHorizontal: HEADER_HORIZONTAL_PADDING,
  },
  headerText: {
    color: palette.royalBlue[900],
    paddingHorizontal: HEADER_TEXT_HORIZONTAL_PADDING,
    textAlign: 'center',
  },
  headerTextContainer: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  left: {
    alignItems: 'flex-start',
    backgroundColor: palette.green[300],
    height: 40,
    justifyContent: 'flex-start',
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
