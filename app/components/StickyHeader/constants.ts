import { Dimensions, Platform, StatusBar } from 'react-native';

import { palette } from '@app/theme';
import Color from 'color';

export const STICKY_HEADER_HEIGHT = 105;
export const STICKY_HEADER_THRESHOLD = 50;
export const STICKY_THROTTLE_DELAY = 300;
export const STICKY_HEADER_HORIZONTAL_MARGIN =
  Dimensions.get('window').width * 0.04;

export const STICKY_HEADER_START_FADING_POSITION = 10;

export const ICON_COLOR = {
  light: palette.royalBlue[900],
  dark: palette.white,
};
export const DEFAULT_BACK_PRESS_ICON_SIZE = 24;

export const BORDER_COLOR = {
  light: Color(palette.grey[500]).alpha(0.6).toString(),
  dark: Color(palette.grey[700]).alpha(0.6).toString(),
};
export const STATUSBAR_HEIGHT =
  Platform.OS === 'ios' ? 45 : StatusBar.currentHeight;
