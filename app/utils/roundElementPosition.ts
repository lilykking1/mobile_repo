import { ViewStyle } from 'react-native';

// icon overlap relative to icon size
export const COIN_OVERLAP_SIZE_RATIO = 0.125;

/**
 * Adjusts icon margin to create overlap of icons and correct z index
 * @param {number} index icon index in array
 * @param {number} size size of icon
 * @param {number} length length of coin array
 * @param {number} overlap overlap between elements
 * @returns ViewStyle for item
 */
export const getElementsPosition = (
  index: number,
  size: number,
  length: number,
  overlap: number = COIN_OVERLAP_SIZE_RATIO
): ViewStyle => {
  const zIndex = length - index;
  const marginLeft = index > 0 ? -(size * overlap) : 0;

  return {
    zIndex,
    marginLeft,
  };
};
