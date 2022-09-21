import React, { FC } from 'react';
import { View } from 'react-native';

import { Typography } from '@app/components';

import { translate } from '@app/i18n';
import styles from './styles';

const Headers: FC = () => (
  <View style={styles.container}>
    <Typography variant="grey.600" size="body2" strong style={styles.header}>
      {translate('components.assetsVariationTable.assets')}
    </Typography>

    <Typography variant="grey.600" size="body2" strong style={styles.header}>
      {translate('components.assetsVariationTable.current')}
    </Typography>

    <Typography variant="grey.600" size="body2" strong style={styles.header}>
      {translate('components.assetsVariationTable.end')}
    </Typography>
  </View>
);
export default Headers;
