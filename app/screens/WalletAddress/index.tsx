import React, { FC, useCallback, useRef, useState } from 'react';
import { Share, View } from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import { NavigationProp, useNavigation } from '@react-navigation/core';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { BottomSheetModal } from '@gorhom/bottom-sheet';
import { Modal } from '@app/modals';
import { translate } from '@app/i18n';
import {
  Button,
  CopyWalletAddress,
  Icon,
  IconButton,
  SafeArea,
  StickyHeader,
  Typography,
} from '@app/components';
import { Routes } from '@app/navigation/types';
import {
  CHEVRON_ICON_SIZE,
  FROM_ALT_COLOR,
  ICON_BUTTON_BG_ALT_DARK,
  ICON_BUTTON_DARK,
  ICON_BUTTON_LIGHT,
  QR_CODE_COLOR,
  TO_ALT_COLOR,
  WALLET_ADDRESS,
} from './constants';
import { networkAddressSelected } from './utils';
import styles from './styles';

type WalletAddressProps = BottomTabScreenProps<Routes, 'WalletAddress'>;

const WalletAddress: FC<WalletAddressProps> = () => {
  const networkAddressesOptionsBottomSheetRef = useRef<BottomSheetModal>(null);
  const navigation = useNavigation<NavigationProp<Routes>>();
  const [
    selectedNetworkAddressOption,
    setSelectedNetworkAddressesOptions,
  ] = useState<string>(
    translate('modals.selectNetwork.menuOptions.ethMainnet')
  );

  const handleCloseNetworkAddressesOptions = useCallback(
    () => networkAddressesOptionsBottomSheetRef.current?.close(),
    []
  );

  const handleOpenSortByOptionsFilter = useCallback(
    () => networkAddressesOptionsBottomSheetRef.current?.present(),
    []
  );

  const handleSelectSortByOptions = useCallback(
    (selectedSortByOptions) => {
      setSelectedNetworkAddressesOptions(selectedSortByOptions);

      handleCloseNetworkAddressesOptions();
    },
    [handleCloseNetworkAddressesOptions]
  );

  const handleBackPress = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  const handleShare = async () => {
    await Share.share({
      title: translate('screens.walletAddress.action.share'),
      message: WALLET_ADDRESS,
    });
  };

  const renderIconChevronDown = (
    <View style={styles.containerIconChevronDown}>
      <Icon.ChevronDown width={CHEVRON_ICON_SIZE} height={CHEVRON_ICON_SIZE} />
    </View>
  );

  const renderTitle = (
    <Typography strong size="h6">
      {translate('screens.walletAddress.title')}
    </Typography>
  );

  return (
    <>
      <SafeArea altLight={FROM_ALT_COLOR} altDark={TO_ALT_COLOR}>
        <StickyHeader
          altLight={FROM_ALT_COLOR}
          altDark={TO_ALT_COLOR}
          handleBackPress={handleBackPress}
          Title={renderTitle}
        />
        <View style={styles.container}>
          <IconButton
            containerStyle={styles.iconButtonContainer}
            size="small"
            label={selectedNetworkAddressOption}
            startIcon={
              networkAddressSelected(selectedNetworkAddressOption).icon
            }
            endIcon={renderIconChevronDown}
            extraLabelStyle={styles.iconButtonLabelStyle}
            onPress={handleOpenSortByOptionsFilter}
            altDark={ICON_BUTTON_BG_ALT_DARK}
            typographyAltLight={ICON_BUTTON_DARK}
            typographyAltDark={ICON_BUTTON_LIGHT}
          />
          <View style={styles.topContainer}>
            <Typography
              style={styles.subtitleStyle}
              variant="grey.600"
              size="buttons"
            >
              {translate('screens.walletAddress.firstSubtitle', {
                coinType: networkAddressSelected(selectedNetworkAddressOption)
                  .text,
              })}
            </Typography>
            <Typography
              style={styles.subtitleStyle}
              variant="grey.600"
              size="body2"
            >
              {translate('screens.walletAddress.secondSubtitle', {
                coinType: networkAddressSelected(selectedNetworkAddressOption)
                  .text,
              })}
            </Typography>
          </View>
          <View style={styles.qrCodeBackground}>
            <QRCode size={230} value={WALLET_ADDRESS} color={QR_CODE_COLOR} />
          </View>
          <View style={styles.bottomContainer}>
            <CopyWalletAddress walletAddress={WALLET_ADDRESS} />
            <View style={styles.shareButton}>
              <Button
                onPress={handleShare}
                variant="primary"
                label={translate('screens.walletAddress.action.share')}
              />
            </View>
          </View>
        </View>
      </SafeArea>
      <Modal.NetworkAddresses
        ref={networkAddressesOptionsBottomSheetRef}
        selected={selectedNetworkAddressOption}
        onSelect={handleSelectSortByOptions}
      />
    </>
  );
};

export default WalletAddress;
