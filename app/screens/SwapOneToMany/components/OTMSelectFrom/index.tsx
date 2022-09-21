import React, { FC, useState, useCallback } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { AssetsItem, List, SearchInput, Typography } from '@app/components';
import { translate } from '@app/i18n';

import { useWallet } from '@app/hooks';
import { Asset } from '@app/models';
import styles from './styles';
import { ListEmptyView } from './components';

interface OtmSelectFromProps {
  handleSelectToCoin: (coin: Asset) => void;
}

const OTMSelectFrom: FC<OtmSelectFromProps> = ({ handleSelectToCoin }) => {
  const {
    wallet: { tokens },
  } = useWallet();
  const [searchValue, setSearchValue] = useState('');
  const [data, setData] = useState(tokens);

  const keyExtractor = (item: Asset, index: number) => `${item?.name}-${index}`;

  const renderItem = useCallback(
    ({ item }) => {
      const { symbol, coinAmount, fiatAmount } = item;
      return (
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => handleSelectToCoin(item)}
        >
          <AssetsItem
            coin={symbol}
            coinAmount={coinAmount}
            fiatAmount={fiatAmount}
            prefixValue="$"
          />
        </TouchableOpacity>
      );
    },
    [handleSelectToCoin]
  );

  const handleFilterCoins = (text) => {
    setSearchValue(text);

    if (text !== '') {
      const filteredCoins = tokens.filter(
        (coin) =>
          coin.symbol.toLowerCase().includes(text.toLowerCase()) ||
          coin.name.toLowerCase().includes(text.toLowerCase())
      );

      setData(filteredCoins);
    } else {
      setData(tokens);
    }
  };

  return (
    <View style={styles.container}>
      <Typography size="title" style={styles.centralTitle} strong>
        {translate('screens.stackedWallet.oneToManySelectFrom.fromTitle')}
      </Typography>
      <SearchInput
        placeholder={translate(
          'screens.stackedWallet.oneToManySelectFrom.searchPlaceholder'
        )}
        value={searchValue}
        onChangeText={handleFilterCoins}
      />
      <List
        items={data}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        customStyle={styles.listItems}
        customContentStyle={styles.content}
        showsVerticalScrollIndicator={false}
        emptyListView={ListEmptyView}
      />
    </View>
  );
};

export default OTMSelectFrom;
