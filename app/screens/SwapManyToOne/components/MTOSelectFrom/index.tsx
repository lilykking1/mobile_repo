import React, { FC, useCallback, useEffect, useMemo, useState } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { find, includes } from 'lodash';
import {
  AssetsItem,
  Button,
  List,
  SearchInput,
  Typography,
} from '@app/components';
import { translate } from '@app/i18n';
import { Asset } from '@app/models';
import { useWallet } from '@app/hooks/useWallet';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import styles from './styles';
import { BOTTOM_PADDING, MAX_SELECTABLE_COINS } from './constants';

interface MtoSelectFromProps {
  onPressNext: () => void;
  handleSelectCoins: (selectedCoin: Array<Asset>) => void;
}

const MTOSelectFrom: FC<MtoSelectFromProps> = ({
  onPressNext,
  handleSelectCoins,
}) => {
  const {
    wallet: { tokens },
  } = useWallet();

  const [searchValue, setSearchValue] = useState('');
  const [selectedCoins, setSelectedCoin] = useState<Asset[]>([]);
  const [data, setData] = useState(tokens);

  const { bottom } = useSafeAreaInsets();
  const buttonBottomStyle = { bottom: bottom + BOTTOM_PADDING };

  useEffect(() => {
    handleSelectCoins(selectedCoins);
  }, [handleSelectCoins, selectedCoins]);

  const addItem = (item: Asset) => {
    setSelectedCoin((prevState) => [...prevState, item]);
  };

  const removeItem = (item: Asset) => {
    setSelectedCoin((prevState) =>
      prevState.filter((stateItem) => stateItem !== item)
    );
  };

  const handleChange = useCallback(
    (checked, value) => (!checked ? addItem(value) : removeItem(value)),
    []
  );

  const keyExtractor = (item: Asset) => item?.name;

  const isMaxReached = useMemo(
    () => MAX_SELECTABLE_COINS === selectedCoins.length,
    [selectedCoins.length]
  );

  const onAssetPress = useCallback(
    (item: Asset) => {
      const isSelected = includes(selectedCoins, item);
      if (!isMaxReached || isSelected) {
        handleChange(isSelected, item);
      }
    },
    [selectedCoins, handleChange, isMaxReached]
  );

  const renderItem = useCallback(
    ({ item }) => {
      const { symbol, coinAmount, fiatAmount } = item;
      const isSelected = find(
        selectedCoins,
        (coin: Asset) => coin.symbol === symbol
      );
      return (
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => onAssetPress(item)}
        >
          <AssetsItem
            coin={symbol}
            coinAmount={coinAmount}
            fiatAmount={fiatAmount}
            prefixValue="$"
            isMultiSelect
            checked={!!isSelected}
          />
        </TouchableOpacity>
      );
    },
    [selectedCoins, onAssetPress]
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
        {translate('screens.stackedWallet.manyToOneSwap.fromTitle')}
      </Typography>
      <SearchInput
        placeholder={translate(
          'screens.stackedWallet.manyToOneSwap.searchPlaceholder'
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
      />
      <View style={[styles.absoluteButton, buttonBottomStyle]}>
        <Button
          temporaryValue={`${selectedCoins.length}/${MAX_SELECTABLE_COINS}`}
          label={translate('screens.stackedWallet.manyToOneSwap.buttonNext')}
          variant="green"
          disabled={!selectedCoins.length}
          onPress={onPressNext}
        />
      </View>
    </View>
  );
};

export default MTOSelectFrom;
