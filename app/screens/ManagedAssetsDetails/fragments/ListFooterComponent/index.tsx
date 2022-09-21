import React, { FC } from 'react';
import { View } from 'react-native';
import { observer } from 'mobx-react';
import { Typography, Icon } from '@app/components';
import { palette } from '@app/theme';

import styles from './styles';

interface ListFooterComponentProps {
  content: string;
  title: string;
}

const ListFooterComponent: FC<ListFooterComponentProps> = ({
  content,
  title,
}) => (
  <View style={styles.footerContainer}>
    <Icon.Question tint={palette.grey[600]} width={24} height={24} />
    <View style={styles.infoContainer}>
      <Typography
        altDark="white"
        altLight="secondary.900"
        size="body1"
        strong
        style={styles.footerContentTitle}
      >
        {title}
      </Typography>
      <Typography style={styles.footerContentText} variant="grey.600">
        {content}
      </Typography>
    </View>
  </View>
);

export default observer(ListFooterComponent);
