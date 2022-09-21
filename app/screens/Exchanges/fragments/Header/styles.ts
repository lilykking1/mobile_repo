import { palette } from '@app/theme';
import { StyleSheet } from 'react-native';
import {
  HEADER_HORIZONTAL_PADDING,
  HEADER_TEXT_HORIZONTAL_PADDING,
} from '../../views/Empty/constants';

const styles = StyleSheet.create({
  backButton: {
    backgroundColor: palette.grey[300],
  },
  backButtonContainer: {
    height: 40,
    justifyContent: 'center',
    width: 40,
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
});

export default styles;
