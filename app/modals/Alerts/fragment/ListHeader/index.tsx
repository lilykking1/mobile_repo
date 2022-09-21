import { Typography } from '@app/components';
import { translate } from '@app/i18n';
import React, { FC, memo } from 'react';
import { TouchableOpacity, View } from 'react-native';
import styles from './styles';

interface ListHeaderProps {
  handleMarkAllPress: () => void;
}
const ListHeader: FC<ListHeaderProps> = ({ handleMarkAllPress }) => (
  <View style={styles.alertsListHeader}>
    <Typography strong size="h2">
      {translate('modals.alerts.title')}
    </Typography>
    <TouchableOpacity onPress={() => handleMarkAllPress()}>
      <Typography strong size="buttons" altLight="main.500" altDark="main.400">
        {translate('modals.alerts.markAllRead')}
      </Typography>
    </TouchableOpacity>
  </View>
);

export default memo<typeof ListHeader>(ListHeader);
