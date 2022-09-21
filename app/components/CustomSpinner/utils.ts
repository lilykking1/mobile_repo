import { ViewStyle } from 'react-native';
import { LARGE_SIZE, NORMAL_SIZE, SMALL_SIZE } from './constants';
import { CustomSpinnerSizes } from './types';
import styles from './styles';

export const getSize = (size: CustomSpinnerSizes): number => {
  switch (size) {
    case 'large':
      return LARGE_SIZE;
    case 'normal':
      return NORMAL_SIZE;
    case 'small':
      return SMALL_SIZE;
    default:
      return NORMAL_SIZE;
  }
};

const getBoxBorderRadius = (size: number): ViewStyle => {
  const borderRadius = size * 2;
  return { borderRadius };
};

export const getContainerStyles = (
  hasBox: boolean,
  size: number
): ViewStyle[] => hasBox && [styles.box, getBoxBorderRadius(size)];
