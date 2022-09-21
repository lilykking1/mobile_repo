import { Dimensions, StyleSheet } from 'react-native';
import Color from 'color';
import { palette } from '@app/theme';
import { LOADING_BACKGROUND_COLOR_OPACITY } from './constants';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  spinner: {
    alignSelf: 'center',
    backgroundColor: Color(palette.black)
      .alpha(LOADING_BACKGROUND_COLOR_OPACITY)
      .toString(),
    height: windowHeight,
    position: 'absolute',
    width: windowWidth,
  },
});

export default styles;
