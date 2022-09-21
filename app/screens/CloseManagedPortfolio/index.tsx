import React, { useCallback, useState, useMemo } from 'react';
import { NavigationProp, useNavigation } from '@react-navigation/core';
import { View, ViewStyle, KeyboardAvoidingView } from 'react-native';
import { translate } from '@app/i18n';
import { getTotalAmount } from '@app/mocks/Portfolio';
import { WalletAddress } from '@app/components/TextInput/components';
import {
  Typography,
  StickyHeader,
  SafeArea,
  Button,
  IconButton,
  Icon,
  Quantity,
} from '@app/components';
import { Routes } from '@app/navigation/types';
import { palette } from '@app/theme';
import { getLabelConversionAmount } from './utils';
import {
  TABS_CONTAINER_DARK_COLOR,
  COINS_OPTIONS,
  COINS_OPTIONS_DATA,
  KEYBOARD_AVOIDING_VIEW_OFFSET,
} from './constants';
import styles from './styles';
import TabsWithCoinLabel from './fragments/TabsWithCoinLabel';

const CloseManagedPortfolio: React.FC = () => {
  const navigation = useNavigation<NavigationProp<Routes>>();
  const [hasWalletAddressError, setHasWalletAddressError] = useState(false);
  const [portfolioAmount] = useState<string>(getTotalAmount());
  const [walletAddress, setWalletAddress] = useState<string>('');

  const walletAddressContainerStyle = [styles.withdrawContainer] as ViewStyle;
  const [selectedCoinId, setSelectedCoinId] = useState(
    COINS_OPTIONS_DATA.btc.id
  );

  const isValidWithdraw = useMemo(
    () => walletAddress && !hasWalletAddressError,
    [hasWalletAddressError, walletAddress]
  );
  const hintTextStyle = hasWalletAddressError
    ? styles.hintText
    : [styles.hintText, styles.hintTextMargin];

  const handleHasWithdrawAddressError = useCallback((hasError: boolean) => {
    setHasWalletAddressError(hasError);
  }, []);

  const onChangeTabs = (item) => {
    setSelectedCoinId(item);
  };

  const handleProceedPress = useCallback(() => {
    navigation.navigate('TwoFactorVerification', {
      screenToNavigate: 'ClosePortfolioConversion',
      screenToNavigateParams: {
        selectedCoin: selectedCoinId,
        walletAddress,
      },
    });
  }, [navigation, selectedCoinId, walletAddress]);

  const handleBackPress = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  const convertedAmount = getLabelConversionAmount(
    selectedCoinId,
    portfolioAmount
  );
  const btcAmount =
    selectedCoinId === COINS_OPTIONS_DATA.btc.id ? convertedAmount : '';
  const usdcAmount =
    selectedCoinId === COINS_OPTIONS_DATA.usdc.id ? convertedAmount : '';
  const navBarRightButton = (
    <IconButton
      onPress={handleBackPress}
      size="normal"
      startIcon={<Icon.Close />}
    />
  );

  const headerTitle = (
    <Typography strong size="h6">
      {translate('screens.managedPortfolio.closeManagedPortfolio.headerTitle')}
    </Typography>
  );

  return (
    <SafeArea altLight={palette.white}>
      <StickyHeader
        Title={headerTitle}
        Right={navBarRightButton}
        altLight={palette.white}
      />
      <View style={styles.container}>
        <KeyboardAvoidingView
          behavior="position"
          keyboardVerticalOffset={KEYBOARD_AVOIDING_VIEW_OFFSET}
        >
          <View style={styles.amountContainer}>
            <Typography strong size="h6">
              {translate(
                'screens.managedPortfolio.closeManagedPortfolio.title'
              )}
            </Typography>
            <Quantity
              strong
              prefix="$"
              value={portfolioAmount}
              useValueLabel
              valueLabelVariant="large"
            />
          </View>
          <Typography size="body1" style={styles.convertToLabel}>
            {translate(
              'screens.managedPortfolio.closeManagedPortfolio.convertTo'
            )}
          </Typography>
          <TabsWithCoinLabel
            altDark={TABS_CONTAINER_DARK_COLOR}
            selected={selectedCoinId}
            onChange={onChangeTabs}
            tabs={COINS_OPTIONS}
            btcAmount={btcAmount}
            usdcAmount={usdcAmount}
          />
          <WalletAddress
            customContainerStyle={walletAddressContainerStyle}
            placeholder={translate(
              'screens.managedPortfolio.closeManagedPortfolio.walletAddressInputPlaceholder'
            )}
            hintText={translate(
              'screens.managedPortfolio.closeManagedPortfolio.walletAddressInputPlaceholder'
            )}
            value={walletAddress}
            onChangeText={setWalletAddress}
            coinSymbol={selectedCoinId}
            handleHasError={handleHasWithdrawAddressError}
          />
          <Typography style={hintTextStyle} variant="grey.600">
            {translate(
              'screens.managedPortfolio.closeManagedPortfolio.walletAddressDisclaimer',
              {
                coin: COINS_OPTIONS_DATA[selectedCoinId].value,
              }
            )}
          </Typography>
          <View style={styles.bottomContainer}>
            <Button
              size="large"
              variant="primary"
              label={translate(
                'screens.managedPortfolio.closeManagedPortfolio.action.proceed'
              )}
              disabled={!isValidWithdraw}
              onPress={handleProceedPress}
            />
          </View>
        </KeyboardAvoidingView>
      </View>
    </SafeArea>
  );
};

export default CloseManagedPortfolio;
