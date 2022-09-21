import React, { FC } from 'react';
import { View } from 'react-native';

import { Typography, Icon, Background } from '@app/components';
import { palette } from '@app/theme';
import { translate } from '@app/i18n';

import styles from './styles';
import { getBorderStyle } from './utils';

interface AddExchangeCardProps {
  isDarkTheme?: boolean;
}

const AddExchangeCard: FC<AddExchangeCardProps> = ({ isDarkTheme }) => {
  const borderStyle = getBorderStyle(isDarkTheme);

  return (
    <Background secondary style={[styles.container, borderStyle]}>
      <View style={styles.icon}>
        <Icon.PlusIcon width={28} height={28} tint={palette.grey[500]} />
      </View>
      <Typography
        variant="grey.500"
        size="body1"
        numberOfLines={1}
        style={styles.label}
      >
        {translate('screens.exchanges.action.addExchange')}
      </Typography>
    </Background>
  );
};

export default AddExchangeCard;
