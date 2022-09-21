import React, { FC } from 'react';
import { View } from 'react-native';

import { Typography } from '@app/components';

import { translate } from '@app/i18n';
import styles from './styles';

const Empty: FC = () => (
  <View style={styles.container}>
    <Typography size="body1">
      {translate('components.assetsVariationTable.noAssets')}
    </Typography>
  </View>
);
export default Empty;
