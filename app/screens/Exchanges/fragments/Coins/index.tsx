import React, { FC } from 'react';
import { Image } from 'react-native';
import { GoldCoin, BlueCoin } from '@app/assets/images';
import styles from './styles';

const Coins: FC = () => (
  <>
    <Image
      accessibilityIgnoresInvertColors
      source={GoldCoin}
      style={styles.rightCoinImage}
    />
    <Image
      accessibilityIgnoresInvertColors
      source={BlueCoin}
      style={styles.leftCoinImage}
    />
  </>
);

export default Coins;
