import React, { FC, useCallback, useState } from 'react';
import { debounce, isNaN } from 'lodash';
import {
  FlatList,
  NativeScrollEvent,
  NativeSyntheticEvent,
  View,
} from 'react-native';
import { Background, Button, TextButton, Typography } from '@app/components';
import { formatNumberToLocale } from '@app/utils/numbers';
import { translate } from '@app/i18n';
import { NavigationProp, useNavigation } from '@react-navigation/core';
import { Routes } from '@app/navigation/types';
import { Asset } from '@app/models';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { createAssetList, currencyToCoinAmount } from '@app/utils/assets';
import { calculateTotalExchange, updateCoinsToMaxValue } from './utils';
import styles from './styles';
import { CoinSlider, TotalCoinExchanged } from './components';
import { BOTTOM_PADDING } from './constants';

export interface MTOSlidersProps {
  onScroll?: (event: NativeSyntheticEvent<NativeScrollEvent>) => void;
  swapFromCoins: Array<Asset>;
  selectedToCoin: Asset;
}

const MTOSliders: FC<MTOSlidersProps> = ({
  swapFromCoins,
  selectedToCoin,
  onScroll,
}) => {
  const navigation = useNavigation<NavigationProp<Routes>>();
  const [coinsValue, setCoinsValue] = useState({});
  const [initialValueCoins, setInitialValueCoins] = useState({
    values: {},
    timestamp: 0,
  });
  const [isLoading, setIsLoading] = useState(false);
  const [exchangedCoinQuantity, setExchangedCoinQuantity] = useState('0');

  const { bottom } = useSafeAreaInsets();
  const containerBottomStyle = { paddingBottom: bottom + BOTTOM_PADDING };

  const updateValueAfterExchange = React.useRef(
    debounce(
      (
        currentCoinsValue,
        coinsToUpdate: Array<Asset>,
        selectedToCoinFiatAmount: number,
        swapCoins: Array<Asset>
      ) => {
        const copyCoinsValue = JSON.parse(JSON.stringify(currentCoinsValue));
        coinsToUpdate.forEach(
          (coinToUpdate) =>
            (copyCoinsValue[coinToUpdate.symbol] = coinToUpdate.coinAmount)
        );
        const newValueAfterExchange = calculateTotalExchange(
          swapCoins,
          copyCoinsValue
        );

        if (isNaN(newValueAfterExchange)) {
          setExchangedCoinQuantity('0');
        } else {
          const coinAmountWithoutLocale = currencyToCoinAmount(
            newValueAfterExchange,
            selectedToCoinFiatAmount
          );
          const coinAmountWithLocale = formatNumberToLocale(
            coinAmountWithoutLocale
          );

          setExchangedCoinQuantity(coinAmountWithLocale);
        }
        setIsLoading(false);
        setCoinsValue(copyCoinsValue);
      },
      100
    )
  ).current;

  const keyExtractor = useCallback(({ coin }) => coin, []);

  const changeValuesToMax = useCallback(() => {
    const newValues = updateCoinsToMaxValue(swapFromCoins);

    setIsLoading(true);
    updateValueAfterExchange(
      coinsValue,
      swapFromCoins,
      selectedToCoin.fiatAmount,
      swapFromCoins
    );
    setCoinsValue(newValues);

    setInitialValueCoins({
      values: newValues,
      timestamp: new Date().getTime(),
    });
  }, [
    coinsValue,
    selectedToCoin.fiatAmount,
    swapFromCoins,
    updateValueAfterExchange,
  ]);

  const handleOnPressButton = useCallback(() => {
    navigation.navigate('MultipleSwapConfirmation', {
      assetsList: createAssetList(
        selectedToCoin,
        swapFromCoins,
        coinsValue,
        exchangedCoinQuantity
      ),
      swapTitle: translate('screens.stackedWallet.manyToOneSwap.headerTitle'),
    });
  }, [
    coinsValue,
    exchangedCoinQuantity,
    navigation,
    selectedToCoin,
    swapFromCoins,
  ]);

  const handleOnValueChangeSlider = useCallback(
    (item: Asset, sliderValue: number) => {
      const coinToUpdate: Array<Asset> = [
        {
          symbol: item.symbol,
          coinAmount: sliderValue,
          fiatAmount: item.fiatAmount,
          name: item.name,
        },
      ];

      setIsLoading(true);
      updateValueAfterExchange(
        coinsValue,
        coinToUpdate,
        selectedToCoin.fiatAmount,
        swapFromCoins
      );
    },
    [
      coinsValue,
      selectedToCoin.fiatAmount,
      swapFromCoins,
      updateValueAfterExchange,
    ]
  );

  const renderFlatListFooter = () => <View style={styles.flatListFooter} />;

  const renderFlatListHeader = () => (
    <View style={styles.containerHeader}>
      <Typography variant="grey.600" size="body2" strong>
        {translate('screens.stackedWallet.manyToOneSwap.slidersScreen.title')}
      </Typography>
      <TextButton
        label={translate(
          'screens.stackedWallet.manyToOneSwap.slidersScreen.maxAll'
        )}
        size="small"
        onPress={changeValuesToMax}
      />
    </View>
  );

  const renderFlatListItem = ({ item }) => (
    <CoinSlider
      item={item}
      initialValue={{
        value: initialValueCoins?.values[item.symbol] || 0,
        timestamp: initialValueCoins?.timestamp || 0,
      }}
      onValueChange={(sliderValue) =>
        handleOnValueChangeSlider(item, sliderValue)}
    />
  );

  return (
    <View style={styles.container}>
      <Background style={styles.backgroundFlatList}>
        <FlatList
          onScroll={onScroll}
          style={styles.flatList}
          ListHeaderComponent={renderFlatListHeader}
          data={swapFromCoins}
          renderItem={renderFlatListItem}
          keyExtractor={keyExtractor}
          ListFooterComponent={renderFlatListFooter}
        />
      </Background>

      <Background
        secondary
        style={[styles.backgroundBottom, containerBottomStyle]}
      >
        <Typography variant="grey.600" size="body2" strong>
          {translate(
            'screens.stackedWallet.manyToOneSwap.slidersScreen.footerTitle'
          )}
        </Typography>

        <TotalCoinExchanged
          coin={selectedToCoin.symbol}
          isLoading={isLoading}
          selectedToCoinQuantity={exchangedCoinQuantity}
        />
        <Button variant="green" label="Swap" onPress={handleOnPressButton} />
      </Background>
    </View>
  );
};

export default MTOSliders;
