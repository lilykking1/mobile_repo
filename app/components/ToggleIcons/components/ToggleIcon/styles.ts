import { StyleSheet } from 'react-native';

import { palette } from '@app/theme';

import {
  CONTAINER_HEIGHT,
  CONTAINER_OUTER_HEIGHT,
  CONTAINER_PADDING,
} from './constants';

export const pillStyles = StyleSheet.create({
  base: {
    alignItems: 'center',
    backgroundColor: palette.grey[300],
    flexDirection: 'row',
    height: '100%',
  },
  disabled: {
    backgroundColor: palette.grey[400],
  },
});

export const containerStyles = StyleSheet.create({
  base: {
    alignItems: 'center',
    borderRadius: 12,
    height: CONTAINER_OUTER_HEIGHT,
    overflow: 'hidden',
    padding: CONTAINER_PADDING,
  },
  disabled: {
    backgroundColor: palette.grey[500],
  },
  enabledDark: {
    backgroundColor: palette.royalBlue[1000],
  },
  enabledLight: {
    backgroundColor: palette.grey[300],
  },
  rounded: {
    borderRadius: 999,
  },
  underLayer: {
    flexDirection: 'row',
    height: CONTAINER_HEIGHT + CONTAINER_PADDING * 2,
    position: 'absolute',
    zIndex: -1,
  },
});

export const maskStyles = StyleSheet.create({
  base: {
    alignSelf: 'center',
    backgroundColor: palette.black,
    borderRadius: 8,
    elevation: 18,
    height: '100%',
    position: 'absolute',
    width: '50%',
  },
  rounded: {
    borderRadius: 999,
  },
});
