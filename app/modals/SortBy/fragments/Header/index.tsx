import React, { FC } from 'react';
import { View } from 'react-native';

import { Typography } from '@app/components';
import { translate } from '@app/i18n';

import styles from './styles';

const Header: FC = () => (
  <View style={styles.container}>
    <Typography variant="secondary.900" strong size="h6" style={styles.text}>
      {translate('modals.sortBy.title')}
    </Typography>
  </View>
);

export default Header;
