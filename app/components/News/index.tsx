import React, { FC } from 'react';
import { View } from 'react-native';
import { Icon, IconButton, Typography } from '@app/components';
import { translate } from '@app/i18n';
import { palette } from '@app/theme';
import { noop } from 'lodash';
import styles from './styles';

export interface NewsProps {
  articles: React.ReactNode[];
  onHeaderSelect?: () => void;
}

const News: FC<NewsProps> = ({ articles, onHeaderSelect = noop }) => (
  <View style={styles.container}>
    <View style={styles.containerHeader}>
      <View style={styles.header}>
        <Typography strong size="h6">
          {translate('components.news.title')}
        </Typography>
      </View>
      <View>
        <IconButton
          altDark={palette.royalBlue[950]}
          altLight={palette.white}
          startIcon={<Icon.ChevronRight tint={palette.grey[600]} />}
          onPress={onHeaderSelect}
          size="small"
        />
      </View>
    </View>
    <View style={styles.articleContainer}>{articles}</View>
  </View>
);

export default News;
