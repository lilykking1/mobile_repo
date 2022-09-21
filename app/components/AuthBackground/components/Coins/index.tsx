import React, { FC } from 'react';
import { Image } from 'react-native';
import {
  BlueLeftDownCoin,
  EthereumPurple,
  GoldCoinFull,
  EthereumBlue,
  BlueCoinRight,
} from '@app/assets/images';

import styles from './styles';

const Coins: FC = () => (
  <>
    <Image
      accessibilityIgnoresInvertColors
      source={BlueLeftDownCoin}
      style={styles.blueLeftDownCoin}
    />
    <Image
      accessibilityIgnoresInvertColors
      source={EthereumPurple}
      style={styles.ethereumPurple}
    />
    <Image
      accessibilityIgnoresInvertColors
      source={GoldCoinFull}
      style={styles.goldCenterCoin}
    />
    <Image
      accessibilityIgnoresInvertColors
      source={EthereumBlue}
      style={styles.ethereumBlue}
    />
    <Image
      accessibilityIgnoresInvertColors
      source={BlueCoinRight}
      style={styles.blueCoinRight}
    />
  </>
);

export default Coins;
