import React, { FC, useCallback, useEffect, useState } from 'react';
import { SectionList, TouchableOpacity, View } from 'react-native';
import {
  AssetsItem,
  Background,
  SearchInput,
  Typography,
} from '@app/components';
import { translate } from '@app/i18n';
import { palette } from '@app/theme';
import { Asset } from '@app/models';
import { ListEmptyView } from './fragments';
import { CoinSectionData } from '../../mock/data';

import styles from './styles';

interface MTOSelectToProps {
  coinBalances: CoinSectionData[];
  handleSelectCoin: (selectedCoin: Asset) => void;
}

const MTOSelectTo: FC<MTOSelectToProps> = ({
  coinBalances,
  handleSelectCoin,
}) => {
  const [searchValue, setSearchValue] = useState('');
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    setFilteredData(coinBalances);
  }, [coinBalances]);

  const handleSelect = useCallback((item) => handleSelectCoin(item), [
    handleSelectCoin,
  ]);

  const handleFilterCoins = (text) => {
    setSearchValue(text);

    if (text !== '') {
      const filteredCoins = coinBalances.reduce((acc, section) => {
        const { title, data } = section;
        const filteredItems = data.filter(
          (crypto: Asset) =>
            crypto.symbol.toLowerCase().includes(text.toLowerCase()) ||
            crypto.name.toLowerCase().includes(text.toLowerCase())
        );

        if (filteredItems.length !== 0) {
          acc.push({
            title,
            data: filteredItems,
          });
        }

        return acc;
      }, []);

      setFilteredData(filteredCoins);
    } else {
      setFilteredData(coinBalances);
    }
  };

  const renderItem = useCallback(
    ({ item }) => {
      const { symbol, coinAmount, fiatAmount } = item;
      return (
        <TouchableOpacity onPress={() => handleSelect(item)}>
          <AssetsItem
            coin={symbol}
            coinAmount={coinAmount}
            fiatAmount={fiatAmount}
            prefixValue="$"
          />
        </TouchableOpacity>
      );
    },
    [handleSelect]
  );

  const renderSectionHeader = useCallback(({ section }) => {
    const { title } = section;
    return (
      <View style={styles.sectionTitle}>
        <Typography size="body2" variant="grey.600">
          {title.toUpperCase()}
        </Typography>
      </View>
    );
  }, []);

  const Title = (
    <Typography size="title" style={styles.centralTitle} strong>
      {translate('screens.stackedWallet.manyToOneSelectTo.title')}
    </Typography>
  );

  const Search = (
    <View style={styles.headerContainer}>
      <SearchInput
        placeholder={translate(
          'screens.stackedWallet.manyToOneSelectTo.searchPlaceholder'
        )}
        value={searchValue}
        onChangeText={handleFilterCoins}
      />
    </View>
  );

  const keyExtractor = (item: CoinSectionData, index: number) =>
    `${item?.title}-${index}`;

  const List = (
    <SectionList
      sections={filteredData}
      keyExtractor={keyExtractor}
      renderItem={renderItem}
      renderSectionHeader={renderSectionHeader}
      style={styles.listContentContainer}
      showsVerticalScrollIndicator={false}
      ListEmptyComponent={ListEmptyView}
    />
  );

  return (
    <Background altLight={palette.white} style={styles.container}>
      {Title}
      {Search}
      {List}
    </Background>
  );
};

export default MTOSelectTo;
