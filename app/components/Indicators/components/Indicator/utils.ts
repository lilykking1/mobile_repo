import { ViewStyle } from 'react-native';
import { INDICATOR_VARIANT } from './constants';
import { IndicatorVariant } from './types';

export const getIndicatorStyle = (variant: IndicatorVariant): ViewStyle => {
  const currentSize = INDICATOR_VARIANT[variant];
  return {
    borderRadius: currentSize / 2,
    height: currentSize,
    marginHorizontal: currentSize / 2,
    width: currentSize,
  };
};
