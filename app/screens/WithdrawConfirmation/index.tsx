import React, { FC, useCallback, useState } from 'react';
import { View } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { NavigationProp, useNavigation } from '@react-navigation/core';
import { translate } from '@app/i18n';
import { getCoinProperties } from '@app/models';
import {
  Button,
  Icon,
  SafeArea,
  Typography,
  StickyHeader,
  CopyWalletAddress,
  CoinIcon,
} from '@app/components';
import ErrorModal from '@app/modals/ErrorModal';
import { Routes } from '@app/navigation/types';
import {
  FROM_ALT_COLOR,
  TO_ALT_COLOR,
  COPY_COLOR,
  ICON_CHEVRON_COLOR,
  TRANSACTION_ID,
} from './constants';
import styles from './styles';
import ItemSummary from './components/ItemSummary';
import { BACKEND_ASSET_INFO, BACKEND_SUMMARY_INFO } from './mocks';

interface WithdrawConfirmationProps {
  route: RouteProp<Routes, 'WithdrawConfirmation'>;
}

const WithdrawConfirmation: FC<WithdrawConfirmationProps> = ({ route }) => {
  const { coinSymbol, amount, walletAddress } = route.params;
  const [hasError, setHasError] = useState(false);
  const coinProperties = getCoinProperties(coinSymbol);
  const copyIcon = <Icon.Copy tint={COPY_COLOR} />;
  const navigation = useNavigation<NavigationProp<Routes>>();

  const handleBackPress = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  const handle2FAVerification = useCallback(async () => {
    try {
      // if there is no error in the API
      if (!hasError) {
        // TODO: Remove line from below once the API is implemented
        // throw new Error('Error from the api'); uncomment this line to simulate an error
        navigation.navigate('TwoFactorVerification', {
          screenToNavigate: 'WithdrawSuccess',
          screenToNavigateParams: {
            value: amount,
            coin: coinSymbol,
            walletKey: walletAddress,
            transactionId: TRANSACTION_ID,
          },
        });
      }
    } catch (err) {
      setHasError(true);
    }
  }, [amount, coinSymbol, hasError, navigation, walletAddress]);

  const handleTryAgain = useCallback(() => {
    setHasError(false);
  }, []);

  const handleCancel = useCallback(() => {
    setHasError(false);
    navigation.navigate('Wallet');
    navigation.navigate('StackedWalletScreen');
  }, [navigation]);

  return (
    <>
      <SafeArea altLight={FROM_ALT_COLOR} altDark={TO_ALT_COLOR}>
        <StickyHeader
          altLight={FROM_ALT_COLOR}
          altDark={TO_ALT_COLOR}
          handleBackPress={handleBackPress}
          Title={(
            <Typography strong size="h6">
              {translate('screens.withdrawConfirmation.title')}
            </Typography>
          )}
        />
        <View style={styles.container}>
          <View style={styles.topContainer}>
            <Typography style={styles.subtitleStyle} altDark="white">
              {translate('screens.withdrawConfirmation.subtitle')}
              <Typography style={styles.subtitleStyle} altDark="white" strong>
                {` ${amount} ${coinSymbol} `}
              </Typography>
              {translate('screens.withdrawConfirmation.secondPartSubtitle')}
            </Typography>
            <CopyWalletAddress
              icon={copyIcon}
              walletAddress={walletAddress}
              lightTypographyAltColor="grey.600"
              darkTypographyAltColor="grey.600"
            />
          </View>
          {/* TODO: Remove this whole container (withdrawInfoContainer), and its childs once we implement AssetVariationItem */}
          <View style={styles.withdrawInfoContainer}>
            <View style={styles.assetContainer}>
              <Typography
                variant="grey.600"
                size="body2"
                style={styles.withdrawInfoTitle}
                strong
              >
                {translate('screens.withdrawConfirmation.conversion.asset')}
              </Typography>
              <View style={styles.coinContainer}>
                <CoinIcon coin={coinSymbol} size={20} />
                <View style={styles.coinTextContainer}>
                  <Typography
                    style={styles.withdrawSpecTitle}
                    altDark="white"
                    strong
                  >
                    {coinSymbol}
                  </Typography>
                  <Typography size="body2" variant="grey.600">
                    {coinProperties.name}
                  </Typography>
                </View>
              </View>
            </View>
            <View style={styles.beforeAndAfterContainer}>
              <View style={styles.valueContainer}>
                <Typography
                  variant="grey.600"
                  size="body2"
                  style={styles.withdrawInfoTitle}
                  strong
                >
                  {translate('screens.withdrawConfirmation.conversion.before')}
                </Typography>
                <Typography
                  style={styles.withdrawSpecTitle}
                  altDark="white"
                  strong
                >
                  {BACKEND_ASSET_INFO.before.coinValue}
                </Typography>
                <Typography size="body2" variant="grey.600">
                  {BACKEND_ASSET_INFO.before.usdValue}
                </Typography>
              </View>
              <View style={styles.chevronsContainer}>
                <Icon.DoubleChevronRight tint={ICON_CHEVRON_COLOR} />
              </View>
              <View style={styles.valueContainer}>
                <Typography
                  variant="grey.600"
                  size="body2"
                  style={styles.withdrawInfoTitle}
                  strong
                >
                  {translate('screens.withdrawConfirmation.conversion.after')}
                </Typography>
                <Typography
                  style={styles.withdrawSpecTitle}
                  altDark="white"
                  strong
                >
                  {BACKEND_ASSET_INFO.after.coinValue}
                </Typography>
                <Typography size="body2" variant="grey.600">
                  {BACKEND_ASSET_INFO.after.usdValue}
                </Typography>
              </View>
            </View>
          </View>
          <View style={styles.bottomContainer}>
            <View style={styles.summaryContainer}>
              <ItemSummary
                withIcon
                coin={coinSymbol}
                leftText={translate(
                  'screens.withdrawConfirmation.withdrawSummary.fee',
                  {
                    coinType: coinProperties.name,
                  }
                )}
                rightText={`${BACKEND_SUMMARY_INFO.fee}${coinSymbol}`}
              />
              <ItemSummary
                coin={coinSymbol}
                leftText={translate(
                  'screens.withdrawConfirmation.withdrawSummary.transactionTime'
                )}
                rightText={BACKEND_SUMMARY_INFO.expectedTime}
              />
              <ItemSummary
                coin={coinSymbol}
                leftText={translate(
                  'screens.withdrawConfirmation.withdrawSummary.toBeReceived'
                )}
                rightText={BACKEND_SUMMARY_INFO.total}
              />
            </View>
            <View style={styles.confirmButton}>
              <Button
                onPress={handle2FAVerification}
                variant="green"
                label={translate(
                  'screens.withdrawConfirmation.actions.confirm'
                )}
              />
            </View>
            <View style={styles.cancelButton}>
              <Button
                onPress={handleBackPress}
                variant="secondary"
                label={translate('screens.withdrawConfirmation.actions.cancel')}
              />
            </View>
          </View>
        </View>
      </SafeArea>
      {hasError ? (
        <ErrorModal
          headerTitle={translate('withdrawError.headerTitle')}
          title={translate('withdrawError.title')}
          subtitle={translate('withdrawError.message')}
          primaryButtonText={translate('withdrawError.action')}
          secondaryButtonText={translate('withdrawError.cancel')}
          primaryButtonAction={handleTryAgain}
          secondaryButtonAction={handleCancel}
        />
      ) : null}
    </>
  );
};

export default WithdrawConfirmation;
