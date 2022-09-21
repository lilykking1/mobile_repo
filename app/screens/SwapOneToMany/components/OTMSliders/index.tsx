import React, { FC, useCallback } from 'react';
import { View, NativeSyntheticEvent, NativeScrollEvent } from 'react-native';
import { variationAssetsList } from '@app/mocks/Coins';
import { useNavigation, NavigationProp } from '@react-navigation/core';
import { Background, Button, List, Typography } from '@app/components';
import { translate } from '@app/i18n';
import { Routes } from '@app/navigation/types';
import { Asset } from '@app/models';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import CoinSlider from './components/CoinSlider';
import styles from './styles';
import {
  BUTTON_CONTAINER_BOTTOM_PADDING,
  CONTAINER_BOTTOM_PADDING,
} from './constants';

export interface MTOSlidersProps {
  onScroll?: (event: NativeSyntheticEvent<NativeScrollEvent>) => void;
  selectedToCoins: Asset[];
}

const OTMSliders: FC<MTOSlidersProps> = ({ selectedToCoins, onScroll }) => {
  const navigation = useNavigation<NavigationProp<Routes>>();
  const keyExtractor = useCallback((item) => item?.name, []);

  const { bottom } = useSafeAreaInsets();

  const containerStyle = {
    paddingBottom: bottom + CONTAINER_BOTTOM_PADDING,
  };
  const buttonContainerStyle = {
    bottom: bottom + BUTTON_CONTAINER_BOTTOM_PADDING,
  };

  const renderFlatListItem = ({ item, index }) => (
    <CoinSlider
      item={item}
      initialValue={{
        value: 0,
        timestamp: 0,
      }}
      onValueChange={() => {}}
      isFirstIndex={index === 0}
    />
  );

  const onSwapPress = () => {
    navigation.navigate('MultipleSwapConfirmation', {
      assetsList: variationAssetsList,
      swapTitle: translate(
        'screens.stackedWallet.oneToManySelectFrom.headerTitle'
      ),
    });
  };

  const renderFlatListHeader = useCallback(
    () => (
      <View style={styles.containerHeader}>
        <Typography variant="grey.600" size="body2" strong>
          {translate(
            'screens.stackedWallet.manyToOneSwap.slidersScreen.footerTitle'
          )}
        </Typography>
      </View>
    ),
    []
  );

  return (
    <View style={styles.container}>
      <Background style={styles.container}>
        <List
          onScroll={onScroll}
          headerComponent={renderFlatListHeader}
          items={selectedToCoins}
          renderItem={renderFlatListItem}
          keyExtractor={keyExtractor}
          contentContainerStyle={containerStyle}
          customContentStyle={styles.customList}
        />
      </Background>
      <View style={[styles.absoluteButton, buttonContainerStyle]}>
        <Button
          label={translate('exchanges.actions.swap.title')}
          variant="green"
          onPress={onSwapPress}
        />
      </View>
    </View>
  );
};

export default OTMSliders;
