import React, { FC } from 'react';
import { Image, View } from 'react-native';

import { Typography } from '@app/components';
import { RightGoldCoinFull } from '@app/assets/images';
import { translate } from '@app/i18n';

import styles from './styles';

const Title: FC = () => (
  <View style={styles.title}>
    <Typography strong size="h2">
      {translate('screens.portfolioCryptoDeposit.title')}
    </Typography>
    <Image
      accessibilityIgnoresInvertColors
      source={RightGoldCoinFull}
      style={styles.coin}
    />
  </View>
);

export default Title;
