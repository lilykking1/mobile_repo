import { StyleSheet } from 'react-native';

import { palette } from '@app/theme';

import {
  CONTAINER_OUTER_HEIGHT,
  CONTAINER_PADDING,
  CONTAINER_HEIGHT,
} from './constants';

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    borderRadius: 12,
    height: CONTAINER_OUTER_HEIGHT,
    overflow: 'hidden',
    padding: CONTAINER_PADDING,
  },
  mask: {
    alignSelf: 'center',
    backgroundColor: palette.black,
    borderRadius: 8,
    elevation: 18,
    height: '100%',
    position: 'absolute',
    width: '50%',
  },
  pill: {
    alignItems: 'center',
    flexDirection: 'row',
    height: '100%',
  },
  underLayer: {
    flexDirection: 'row',
    height: CONTAINER_HEIGHT + CONTAINER_PADDING * 2,
    position: 'absolute',
    zIndex: -1,
  },
});
