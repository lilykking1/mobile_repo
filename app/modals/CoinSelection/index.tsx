import React, {
  useEffect,
  useState,
  forwardRef,
  ForwardRefRenderFunction,
  useCallback,
} from 'react';
import { View, TouchableOpacity, FlatList } from 'react-native';
import {
  AssetsItem,
  SearchInput,
  Typography,
  BottomSheetModal,
} from '@app/components';
import { BottomSheetModal as GorhomBottomSheetModal } from '@gorhom/bottom-sheet';
import { translate } from '@app/i18n';
import { Asset } from '@app/models';
import { ListEmptyView } from './fragments';
import styles from './styles';

interface CoinSelectionProps {
  title?: string;
  searchPlaceholder?: string;
  coinBalances: Asset[];
  handleSelectCoin: (chosenCoin: Asset) => void;
}

const CoinSelection: ForwardRefRenderFunction<
  GorhomBottomSheetModal,
  CoinSelectionProps
> = (
  {
    coinBalances,
    handleSelectCoin,
    title = translate('modals.coinSelection.title'),
    searchPlaceholder = translate('modals.coinSelection.searchPlaceholder'),
  },
  ref
) => {
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
      const filteredCoins = coinBalances.filter(
        (coin) =>
          coin.symbol.toLowerCase().includes(text.toLowerCase()) ||
          coin.name.toLowerCase().includes(text.toLowerCase())
      );
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
          />
        </TouchableOpacity>
      );
    },
    [handleSelect]
  );

  const Header = (
    <View style={styles.headerContainer}>
      <Typography strong size="h6" style={styles.title}>
        {title}
      </Typography>
      <SearchInput
        placeholder={searchPlaceholder}
        value={searchValue}
        onChangeText={handleFilterCoins}
      />
    </View>
  );

  const keyExtractor = (item: Asset, index: number) =>
    `${item?.symbol}-${item?.name}-${index}`;

  const List = (
    <View style={styles.listContainer}>
      <FlatList
        ListEmptyComponent={<ListEmptyView />}
        data={filteredData}
        renderItem={renderItem}
        style={styles.listContentContainer}
        keyExtractor={keyExtractor}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );

  const BottomSheetContent = (
    <View style={styles.container}>
      {Header}
      {List}
    </View>
  );

  return (
    <BottomSheetModal
      ref={ref}
      // We use the header component because the children of the BottomSheetModal is being wrapped by
      // a ScrollView and we can't have nested VirtualizedLists
      headerComponent={BottomSheetContent}
    />
  );
};

export default forwardRef(CoinSelection);
