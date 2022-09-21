import { translate } from '@app/i18n';
import { palette } from '@app/theme';
import Color from 'color';

export const MARKER_BACKGROUND_COLOR = Color(palette.white)
  .alpha(0.35)
  .toString();
export const CAMERA_BACKGROUND_COLOR = Color(palette.black)
  .alpha(0.65)
  .toString();

export const PERMISSION_MESSAGE = translate(
  'modals.qrCodeScanner.cameraPermissionMessage'
);
