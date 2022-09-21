import React, { FC } from 'react';
import { View } from 'react-native';

import { CustomSpinner, Typography } from '@app/components';
import { translate } from '@app/i18n';

import styles from './styles';

const WaitingIndicator: FC = () => (
  <View style={styles.container}>
    <Typography strong size="body1" style={styles.text}>
      {translate('screens.portfolioCryptoDeposit.waiting')}
    </Typography>

    <CustomSpinner size={17} hasBox={false} />
  </View>
);

export default WaitingIndicator;
