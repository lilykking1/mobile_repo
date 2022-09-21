import React, { FC } from 'react';
import { View } from 'react-native';
import { Typography, Icon } from '@app/components';
import { translate } from '@app/i18n';
import { palette } from '@app/theme';

import styles from './styles';

const CredentialsError: FC = () => (
  <View style={styles.credentialsErrorContainer}>
    <Icon.Attention tint={palette.red[500]} />
    <Typography variant="red" style={styles.text}>
      {translate('screens.signIn.validations.credentialsError')}
    </Typography>
  </View>
);

export default CredentialsError;
