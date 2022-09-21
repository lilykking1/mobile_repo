import React, {
  FC,
  useContext,
  useMemo,
  useState,
  useRef,
  useCallback,
} from 'react';
import { View } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/core';
import { observer } from 'mobx-react';
import { BottomSheetModal, useBottomSheetModal } from '@gorhom/bottom-sheet';
import {
  Icon,
  IconButton,
  Typography,
  SafeArea,
  ExchangesCarousel,
  Background,
} from '@app/components';
import { palette } from '@app/theme';
import { translate } from '@app/i18n';
import { Routes } from '@app/navigation/types';
import { RootContext } from '@app/state';
import { ExchangesCarouselItemData } from '@app/components/ExchangesCarousel/types';

import styles from './styles';
import {
  AssetsList,
  ModalActions,
  ModalEditExchange,
  ModalDeleteExchange,
} from './fragments';

import {
  getAssetsListHeader,
  getButtonSecretIcon,
  getButtonSecretStyle,
  getCarouselItems,
  getIsOnline,
} from './utils';
import { CardType } from './types';

const AssetsArea: FC = () => {
  const dotsActionsBottomSheetRef = useRef<BottomSheetModal>(null);
  const renameExchangeBottomSheetRef = useRef<BottomSheetModal>(null);
  const navigation = useNavigation<NavigationProp<Routes>>();
  const { dismissAll } = useBottomSheetModal();

  const {
    settingsStore: { theme },
  } = useContext(RootContext);

  const [carouselItems] = useState<ExchangesCarouselItemData[]>(
    getCarouselItems()
  );
  const [isModalDeleteVisible, setModalDeleteVisible] = useState(false);
  const [isValuesSecret, setIsValuesSecret] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const [exchangeName, setExchangeName] = useState('');

  const handleNavigateBack = () => {
    navigation.goBack();
  };

  const handleToggleValuesIsSecret = () => {
    setIsValuesSecret((currentValue) => !currentValue);
  };

  const buttonSecretIcon = getButtonSecretIcon(isValuesSecret, theme);
  const buttonSecretStyle = getButtonSecretStyle(isValuesSecret, theme);

  const handleSetSelected = (index: number) => {
    setSelectedIndex(index);
  };

  const selectedCardIsOnline = getIsOnline(carouselItems[selectedIndex]);
  const selectedCardType =
    carouselItems[selectedIndex]?.type || CardType.ALL_ASSETS;

  const selectedCardTitle = carouselItems[selectedIndex]?.title;

  const selectedContainWebProducts =
    carouselItems[selectedIndex]?.hasWebProducts;

  const selectedAssets = carouselItems[selectedIndex]?.assets;
  const selectedAssetsListHeader = useMemo(
    () =>
      getAssetsListHeader(selectedIndex, carouselItems, selectedCardIsOnline),
    [carouselItems, selectedCardIsOnline, selectedIndex]
  );

  const handleOpenDotsAction = () =>
    dotsActionsBottomSheetRef.current?.present();

  const handleRenameAction = () => {
    renameExchangeBottomSheetRef.current?.present();
  };

  const handleRenamePortfolio = () => {
    dismissAll();
  };

  const onChangeExchangeName = useCallback((e) => {
    setExchangeName(e.nativeEvent.text);
  }, []);

  const requestCloseDeleteModal = useCallback(() => {
    setModalDeleteVisible(false);
  }, []);

  const requestOpenDeleteModal = useCallback(() => {
    setModalDeleteVisible(true);
  }, []);

  const handleDeletePortfolio = () => {
    requestCloseDeleteModal();
    dismissAll();
  };

  return (
    <>
      <SafeArea secondary edges={['top']}>
        <Background secondary>
          <View style={styles.header}>
            <IconButton
              onPress={handleNavigateBack}
              size="normal"
              startIcon={<Icon.ChevronLeft tint={palette.royalBlue[900]} />}
            />

            <Typography strong size="h6" style={styles.title}>
              {translate('screens.dashboard.cards.selfDirected.title')}
            </Typography>

            <IconButton
              onPress={handleToggleValuesIsSecret}
              size="normal"
              startIcon={buttonSecretIcon}
              containerStyle={buttonSecretStyle}
            />
          </View>

          <ExchangesCarousel
            items={carouselItems}
            selectedIndex={selectedIndex}
            handleSetSelected={handleSetSelected}
            isValuesSecret={isValuesSecret}
            onActionPress={handleOpenDotsAction}
          />
        </Background>

        <Background style={styles.content}>
          <AssetsList
            assets={selectedAssets}
            headerComponent={selectedAssetsListHeader}
            isValuesSecret={isValuesSecret}
            selectedCardType={selectedCardType}
          />
        </Background>
      </SafeArea>
      <ModalActions
        title={selectedCardTitle}
        ref={dotsActionsBottomSheetRef}
        onEditAction={handleRenameAction}
        onDeleteAction={requestOpenDeleteModal}
        disabled={selectedContainWebProducts}
      />

      <ModalEditExchange
        ref={renameExchangeBottomSheetRef}
        value={exchangeName || selectedCardTitle}
        onChangeText={onChangeExchangeName}
        onSaveAction={handleRenamePortfolio}
      />

      <ModalDeleteExchange
        visible={isModalDeleteVisible}
        onRequestClose={requestCloseDeleteModal}
        onConfirm={handleDeletePortfolio}
      />
    </>
  );
};

export default observer(AssetsArea);
