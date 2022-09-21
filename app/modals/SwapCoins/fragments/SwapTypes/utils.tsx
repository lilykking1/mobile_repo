/* eslint-disable react/no-array-index-key */
import React, { ReactNode } from 'react';
import { View } from 'react-native';
import { reverse } from 'lodash';

import {
  KEY_LEFT,
  KEY_RIGHT,
  SWAP_COLORS,
  SWAP_COLOR_GREEN,
  SWAP_COLOR_ORANGE,
} from './constants';
import { CoinSwipeType } from '../../types';
import styles from './styles';
import Swaps from '../Swaps';

export const swapRightElements = (type: CoinSwipeType): ReactNode => {
  switch (type) {
    case CoinSwipeType.MANY_TO_ONE:
      return <Swaps color={SWAP_COLOR_GREEN} />;
    case CoinSwipeType.ONE_TO_MANY:
      return (
        <View style={styles.rowDots}>
          {reverse(SWAP_COLORS.slice()).map((color, index) => (
            <Swaps
              key={`${index}-${KEY_RIGHT}`}
              arrayLength={SWAP_COLORS.length}
              index={index}
              color={color}
            />
          ))}
        </View>
      );
    default:
      return <Swaps color={SWAP_COLOR_ORANGE} />;
  }
};

export const swapLeftElements = (type: CoinSwipeType): ReactNode => {
  switch (type) {
    case CoinSwipeType.MANY_TO_ONE:
      return (
        <View style={styles.rowDots}>
          {SWAP_COLORS.map((color, index) => (
            <Swaps
              key={`${index}-${KEY_LEFT}`}
              arrayLength={SWAP_COLORS.length}
              index={index}
              color={color}
            />
          ))}
        </View>
      );
    case CoinSwipeType.ONE_TO_MANY:
      return <Swaps color={SWAP_COLOR_GREEN} />;
    default:
      return <Swaps color={SWAP_COLOR_GREEN} />;
  }
};
