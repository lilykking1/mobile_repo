import React, { FC } from 'react';
import { View, Image } from 'react-native';

import { Typography } from '@app/components';
import { SuccessCoin } from '@app/assets/images';
import { translate } from '@app/i18n';

import styles from './styles';

const Status: FC = () => (
  <View style={styles.container}>
    <Image
      source={SuccessCoin}
      style={styles.image}
      accessibilityIgnoresInvertColors
    />

    <Typography size="h4" style={styles.text}>
      {translate('swap.status.success.title')}
    </Typography>
  </View>
);

export default Status;
