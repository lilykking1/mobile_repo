import React, { FC } from 'react';
import { View } from 'react-native';
import { StackedWalletEmpty, StackedWalletPopulated } from './views';
import styles from './styles';

const StackedWallet: FC = () => {
  const hasData = true;

  const dashboardView = hasData ? (
    <StackedWalletPopulated />
  ) : (
    <StackedWalletEmpty />
  );

  return <View style={styles.background}>{dashboardView}</View>;
};

export default StackedWallet;
