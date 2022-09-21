import React, { FC } from 'react';
import { View } from 'react-native';

import { Typography } from '@app/components';
import { translate } from '@app/i18n';

import styles from './styles';

const Header: FC = () => (
  <View style={styles.container}>
    <Typography size="body2" variant="secondary.400" style={styles.text}>
      {translate('modals.themeSelection.message')}
    </Typography>
  </View>
);

export default Header;
