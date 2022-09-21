import React, { FC } from 'react';
import { View } from 'react-native';

import { Typography } from '@app/components';
import { translate } from '@app/i18n';

import styles from './styles';

const Header: FC = () => (
  <View style={styles.container}>
    <Typography strong size="h6" style={styles.text}>
      {translate('modals.periodFilter.period')}
    </Typography>
  </View>
);

export default Header;
