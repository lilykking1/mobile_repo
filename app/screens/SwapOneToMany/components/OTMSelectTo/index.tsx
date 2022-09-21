import React, { FC, useState, useCallback, useMemo } from 'react';
import { View, TouchableOpacity, SectionList } from 'react-native';
import { includes, find } from 'lodash';

import { AssetsItem, Button, SearchInput, Typography } from '@app/components';
import { translate } from '@app/i18n';

import { useWallet } from '@app/hooks';
import { Asset } from '@app/models';
import styles from './styles';
import { MAX_SELECTABLE_COINS } from './constants';
import { ListEmptyView } from './components';
import { getCoinsDataList } from './mock';

interface OTMSelectToProps {
  handleSelectToCoins: (coin: Asset[]) => void;
}

const OTMSelectTo: FC<OTMSelectToProps> = ({ handleSelectToCoins }) => {
  const {
    wallet: { tokens },
  } = useWallet();

  const [searchValue, setSearchValue] = useState('');

  const [selectedCoins, setSelectedCoin] = useState<Asset[]>([]);

  const [coinsData, setCoinsData] = useState(getCoinsDataList(tokens));

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

  const keyExtractor = (item: Asset, index: number) => `${item?.name}-${index}`;

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
    const coinsDataList = getCoinsDataList(tokens);
    if (text !== '') {
      const filteredCoins = coinsDataList.reduce((acc, section) => {
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

      setCoinsData(filteredCoins);
    } else {
      setCoinsData(coinsDataList);
    }
  };

  const handleNextStep = () => {
    handleSelectToCoins(selectedCoins);
  };

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

  return (
    <View style={styles.container}>
      <Typography size="title" style={styles.centralTitle} strong>
        {translate('screens.stackedWallet.oneToManySelectTo.toTitle')}
      </Typography>
      <SearchInput
        placeholder={translate(
          'screens.stackedWallet.oneToManySelectTo.searchPlaceholder'
        )}
        value={searchValue}
        onChangeText={handleFilterCoins}
      />
      <SectionList
        sections={coinsData}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        renderSectionHeader={renderSectionHeader}
        style={styles.listContentContainer}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={ListEmptyView}
        contentContainerStyle={styles.content}
      />
      <View style={styles.absoluteButton}>
        <Button
          temporaryValue={`${selectedCoins.length}/${MAX_SELECTABLE_COINS}`}
          label={translate(
            'screens.stackedWallet.oneToManySelectTo.buttonNext'
          )}
          variant="green"
          disabled={!selectedCoins.length}
          onPress={handleNextStep}
        />
      </View>
    </View>
  );
};

export default OTMSelectTo;
