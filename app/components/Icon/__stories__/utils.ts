import contrast from 'contrast';
import color from 'color';
import { memoize } from 'lodash';

import styles from './styles';

export const getLabelStyle = memoize((tint: string) => ({
  color: color(tint).hex(),
}));

export const getBackgroundStyle = memoize((tint: string) => {
  const hex = color(tint).hex();
  const theme = contrast(hex);

  switch (theme) {
    case 'dark':
      return styles.light;
    case 'light':
    default:
      return styles.dark;
  }
});
