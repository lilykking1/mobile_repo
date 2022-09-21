import React, { FC } from 'react';
import { View } from 'react-native';
import { Typography } from '@app/components';
import { translate } from '@app/i18n';
import styles from './styles';

const ListEmptyView: FC = () => (
  <View style={styles.container}>
    <Typography style={styles.text}>
      {translate('screens.stackedWallet.oneToManySelectFrom.emptyStateText')}
    </Typography>
  </View>
);

export default ListEmptyView;
