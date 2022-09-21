import React, { FC, useMemo } from 'react';
import { View, ViewProps, TouchableOpacity } from 'react-native';
import { noop } from 'lodash';

import { Icon, Typography } from '@app/components';
import { EXCHANGES } from '@app/models';

import styles from './styles';
import { getActionTint, getHeader, getTitle } from './utils';
import DotNotConnected from './components/DotNotConnected';
import CardContent from './components/CardContent';

interface ExchangeCardContainerProps extends ViewProps {
  amount: string;
  exchange: EXCHANGES;
  stackedWallet: boolean;
  isSecret?: boolean;
  isSelected?: boolean;
  onActionPress?: () => void;
  isOnline?: boolean;
  isDarkTheme?: boolean;
}

const ExchangeCardContainer: FC<ExchangeCardContainerProps> = ({
  amount,
  exchange,
  stackedWallet,
  style,
  isSecret = false,
  isSelected = false,
  isOnline = true,
  isDarkTheme = false,
  onActionPress = noop,
}) => {
  const custom = useMemo(() => [styles.container, style], [style]);
  const headerCardElement = useMemo(() => getHeader(exchange, stackedWallet), [
    exchange,
    stackedWallet,
  ]);
  const cardTitle = useMemo(() => getTitle(exchange, stackedWallet), [
    exchange,
    stackedWallet,
  ]);
  const actionIconTint = useMemo(() => getActionTint(isDarkTheme), [
    isDarkTheme,
  ]);

  return (
    <View style={[styles.container, custom]}>
      {isSelected && !stackedWallet && isOnline && (
        <TouchableOpacity
          onPress={onActionPress}
          activeOpacity={0.6}
          style={styles.iconContainer}
        >
          <Icon.Actions tint={actionIconTint} width={16} height={16} />
        </TouchableOpacity>
      )}
      <View>
        {headerCardElement}
        {!isOnline && !stackedWallet && <DotNotConnected />}
      </View>
      <Typography
        strong
        size="h6"
        numberOfLines={2}
        style={styles.exchangeText}
      >
        {cardTitle}
      </Typography>
      <CardContent
        amount={amount}
        isSecret={isSecret}
        isOnline={isOnline}
        stackedWallet={stackedWallet}
      />
    </View>
  );
};

export default ExchangeCardContainer;
