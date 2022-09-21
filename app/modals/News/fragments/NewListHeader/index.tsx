import React, { memo } from 'react';

import { View } from 'react-native';
import { Typography } from '@app/components';
import { translate } from '@app/i18n';
import styles from './styles';

const NewsListHeader = () => (
  <View style={styles.newsListHeader}>
    <Typography strong size="h2">
      {translate('news.title')}
    </Typography>
  </View>
);

export default memo<typeof NewsListHeader>(NewsListHeader);
