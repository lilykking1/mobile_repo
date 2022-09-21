import React, { FC, useMemo } from 'react';
import { View } from 'react-native';
import { noop } from 'lodash';

import { ExchangeCard, AllAssetsCard } from '@app/components';
import { EXCHANGES, WALLETS } from '@app/models';

import { CardType } from '@app/screens/AssetsArea/types';
import { getStyle } from './utils';

interface ItemProps {
  title: EXCHANGES | string[];
  amount: string;
  isSecret: boolean;
  type: CardType;
  isSelected?: boolean;
  isOnline?: boolean;
  onSelect?: (index: number, title: string) => void;
  onActionPress?: () => void;
}

const Item: FC<ItemProps> = ({
  title,
  amount,
  type,
  isSecret = false,
  isSelected = false,
  isOnline = true,
  onSelect = noop,
  onActionPress = noop,
}) => {
  const content = useMemo(() => {
    if (type === CardType.ADD_EXCHANGE) {
      return <ExchangeCard onPress={onSelect} />;
    }

    const isNotAllAssetsCard =
      type === CardType.EXCHANGE || type === CardType.WALLET;

    if (isNotAllAssetsCard) {
      const isStackedWallet =
        title?.toString() === WALLETS.StackedWallet.toString();

      return (
        <ExchangeCard
          stackedWallet={isStackedWallet}
          onPress={onSelect}
          exchange={title as EXCHANGES}
          isSecret={isSecret}
          amount={amount}
          isSelected={isSelected}
          onActionPress={onActionPress}
          isOnline={isOnline}
        />
      );
    }

    return (
      <AllAssetsCard
        onPress={onSelect}
        amount={amount}
        assets={title as string[]}
        isSecret={isSecret}
      />
    );
  }, [
    amount,
    isOnline,
    isSecret,
    onSelect,
    title,
    isSelected,
    onActionPress,
    type,
  ]);

  const baseStyles = useMemo(() => getStyle(isSelected), [isSelected]);

  return <View style={baseStyles}>{content}</View>;
};

export default Item;
