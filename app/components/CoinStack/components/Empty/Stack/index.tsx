/* eslint-disable react/jsx-one-expression-per-line */
import React, { FC } from 'react';
import { View, ViewProps } from 'react-native';

import EmptyCoin from '@app/components/CoinStack/components/Empty/Coin';
import { DEFAULT_COIN_SIZE } from '@app/components/CoinStack/constants';

import { DEFAULT_EMPTY_COINS } from './constants';
import styles from './styles';

export interface EmptyStackProps extends ViewProps {
  size?: number;
  length?: number;
}

const EmptyStack: FC<EmptyStackProps> = ({
  size = DEFAULT_COIN_SIZE,
  length = DEFAULT_EMPTY_COINS,
  ...rest
}) => (
  <View style={styles.row} {...rest}>
    {Array(length)
      .fill(null)
      .map((_, i: number) => (
        <EmptyCoin
          // eslint-disable-next-line react/no-array-index-key
          key={i}
          size={size}
          index={i}
          arrayLength={length}
        />
      ))}
  </View>
);

export default EmptyStack;
