import { ViewStyle } from 'react-native';

import { Theme } from '@app/state/stores/settings/types';
import {
  MAX_MODAL_HEIGHT,
  DRAWER_THEME,
  MODAL_VARIANTS,
  DRAWER_THEME_INDICATOR,
  MODAL_BLUR_TYPE,
  modalTransparency,
  BlurType,
} from './constants';

/**
 * Calculate the height of the bottom sheet modal. snapToContent for small non-scrollable content,
 * or 90% of screen height and scrollable.
 * @param  {number} height height of screen
 * @param  {boolean} snapToContent should the modal adjust to height of content in the modal or the max height of 90%
 * @param  {number} contentHeight animatedContentHeight.value from useBottomSheetDynamicSnapPoints
 * @param  {number} handleHeight animatedHandleHeight.value from useBottomSheetDynamicSnapPoints
 */
export const getModalHeight = (
  height: number,
  snapToContent: boolean,
  contentHeight: number,
  handleHeight: number
): ViewStyle => {
  'worklet';

  // adds the content and top handle
  const sheetHeight = contentHeight + handleHeight;
  // if snapToContent false then modal will be MAX_MODAL_HEIGHT% of screen height,
  // if not, then just use the height of sheet
  // prop is needed because calculating this within useAnimatedStyle was
  // throwing inconsistent behavior and not fully reculating
  const maxHeight = height * MAX_MODAL_HEIGHT;
  const snapPointHeight = snapToContent ? sheetHeight : maxHeight;

  return { height: snapPointHeight };
};

export const getModalTheme = (theme: Theme): ViewStyle => {
  const backgroundColor = DRAWER_THEME[theme] || DRAWER_THEME.light;
  return { backgroundColor };
};

export const getModalIndicator = (theme: Theme): ViewStyle => {
  const backgroundColor =
    DRAWER_THEME_INDICATOR[theme] || DRAWER_THEME_INDICATOR.light;
  return { backgroundColor };
};

export const getBlurConfig = (theme: Theme): MODAL_VARIANTS =>
  modalTransparency[theme] || modalTransparency.light;

export const getBlurVariant = (theme: Theme): BlurType =>
  MODAL_BLUR_TYPE[theme] || MODAL_BLUR_TYPE.light;
