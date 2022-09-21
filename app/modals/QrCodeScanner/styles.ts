import { StyleSheet } from 'react-native';

import { palette } from '@app/theme';
import { CAMERA_BACKGROUND_COLOR, MARKER_BACKGROUND_COLOR } from './constants';

const styles = StyleSheet.create({
  bottom: {
    backgroundColor: palette.primary,
    flex: 0,
  },
  camera: {
    backgroundColor: CAMERA_BACKGROUND_COLOR,
    height: '100%',
    zIndex: -1,
  },
  cameraContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  container: {
    backgroundColor: palette.white,
    flex: 1,
  },
  marker: {
    backgroundColor: MARKER_BACKGROUND_COLOR,
    borderColor: palette.white,
    borderRadius: 16,
    borderWidth: 5,
  },
  mask: {
    backgroundColor: CAMERA_BACKGROUND_COLOR,
    flex: 1,
    height: '100%',
    position: 'absolute',
    top: 0,
    width: '100%',
    zIndex: 1,
  },
  top: {
    backgroundColor: palette.transparent,
    flex: 0,
    justifyContent: 'flex-end',
    position: 'absolute',
    top: 50,
  },
});

export default styles;
