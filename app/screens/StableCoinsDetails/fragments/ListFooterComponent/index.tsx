import React, { FC } from 'react';
import { View } from 'react-native';
import { Typography, Icon } from '@app/components';
import { palette } from '@app/theme';

import styles from './styles';
import {
  LENDING_MESSAGE_CONTENT,
  LENDING_MESSAGE_TITLE,
  STABLE_COINS_MESSAGE_CONTENT,
  STABLE_COINS_MESSAGE_TITLE,
} from './constants';

interface ListFooterComponentProps {
  isLending: boolean;
}

const ListFooterComponent: FC<ListFooterComponentProps> = ({ isLending }) => {
  const footerItem = (title: string, content: string) => (
    <View style={styles.footerItemContainer}>
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
  return (
    <View style={styles.footerContainer}>
      {footerItem(STABLE_COINS_MESSAGE_TITLE, STABLE_COINS_MESSAGE_CONTENT)}
      {isLending && footerItem(LENDING_MESSAGE_TITLE, LENDING_MESSAGE_CONTENT)}
    </View>
  );
};

export default ListFooterComponent;
