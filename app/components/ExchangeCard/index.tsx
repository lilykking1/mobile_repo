import React, { FC, useContext, useMemo } from 'react';
import { TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { observer } from 'mobx-react';
import { noop } from 'lodash';

import { EXCHANGES } from '@app/models';
import { RootContext } from '@app/state';
import { ExchangeCardContainer, AddExchangeCard } from './components';
import { getExchangeCardStyles } from './utils';

interface ExchangeCardProps extends TouchableOpacityProps {
  amount?: string;
  exchange?: EXCHANGES;
  stackedWallet?: boolean;
  isSecret?: boolean;
  isSelected?: boolean;
  onActionPress?: () => void;
  isOnline?: boolean;
}

const ExchangeCard: FC<ExchangeCardProps> = ({
  stackedWallet = false,
  exchange,
  amount,
  isSecret = false,
  isSelected = false,
  onActionPress = noop,
  isOnline = true,
  ...rest
}) => {
  const {
    settingsStore: { theme },
  } = useContext(RootContext);

  const custom = useMemo(
    () => getExchangeCardStyles(exchange, stackedWallet, theme),
    [exchange, stackedWallet, theme]
  );

  const isDarkTheme = theme === 'dark';

  const card = useMemo(
    () =>
      exchange || stackedWallet ? (
        <ExchangeCardContainer
          exchange={exchange}
          amount={amount}
          stackedWallet={stackedWallet}
          style={custom}
          isSecret={isSecret}
          isSelected={isSelected}
          onActionPress={onActionPress}
          isOnline={isOnline}
          isDarkTheme={isDarkTheme}
        />
      ) : (
        <AddExchangeCard isDarkTheme={isDarkTheme} />
      ),
    [
      exchange,
      stackedWallet,
      amount,
      custom,
      isSecret,
      isSelected,
      onActionPress,
      isOnline,
      isDarkTheme,
    ]
  );

  return (
    <TouchableOpacity activeOpacity={0.65} {...rest}>
      {card}
    </TouchableOpacity>
  );
};

export default observer(ExchangeCard);
