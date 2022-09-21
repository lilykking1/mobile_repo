import { StyleSheet } from 'react-native';
import { ICON_BUTTON_SIZE, TEXT_PADDING_LEFT } from '../../constants';

const styles = StyleSheet.create({
  iconButtonContainer: {
    height: ICON_BUTTON_SIZE,
    width: ICON_BUTTON_SIZE,
  },
  iconContainer: {
    justifyContent: 'center',
  },
  mainContainer: {
    flexDirection: 'row',
    paddingVertical: 16,
  },
  textContainer: {
    flex: 1,
    flexDirection: 'column',
    paddingLeft: TEXT_PADDING_LEFT,
    justifyContent: 'center',
  },
});

export default styles;
