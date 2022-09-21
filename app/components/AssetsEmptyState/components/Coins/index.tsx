import React, { FC } from 'react';
import { Image } from 'react-native';
import { GoldCoinLeft, BlueCoinRight } from '@app/assets/images';

import styles from './styles';

const Coins: FC = () => (
  <>
    <Image
      accessibilityIgnoresInvertColors
      source={GoldCoinLeft}
      style={styles.goldCoin}
    />
    <Image
      accessibilityIgnoresInvertColors
      source={BlueCoinRight}
      style={styles.blueCoin}
    />
  </>
);

export default Coins;
