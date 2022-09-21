import React, { FC, useCallback } from 'react';

import { List, AssetsItem } from '@app/components';
import { Asset } from '@app/models';
import { keyExtractor } from './utils';

interface TokensListProps {
  tokens: Asset[];
  isValuesSecret: boolean;
  suffixValue?: string;
  prefixValue?: string;
}

const TokensList: FC<TokensListProps> = ({
  tokens,
  isValuesSecret,
  suffixValue,
  prefixValue,
}) => {
  const renderItem = useCallback(
    ({ item }) => (
      <AssetsItem
        coin={item.symbol}
        fiatAmount={item.fiatAmount}
        coinAmount={item.coinAmount}
        isSecret={isValuesSecret}
        suffixValue={suffixValue}
        prefixValue={prefixValue}
      />
    ),
    [isValuesSecret, prefixValue, suffixValue]
  );

  return (
    <List items={tokens} renderItem={renderItem} keyExtractor={keyExtractor} />
  );
};

export default TokensList;
