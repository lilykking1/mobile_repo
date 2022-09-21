import React, { FC, useCallback, useContext, useMemo, useState } from 'react';
import { Image, Linking, View } from 'react-native';
import {
  Button,
  CopyWalletAddress,
  Icon,
  IconButton,
  SafeArea,
  TextInput,
  Typography,
} from '@app/components';
import { SuccessCoin } from '@app/assets/images';
import { translate } from '@app/i18n';
import { palette } from '@app/theme';
import { NavigationProp, useNavigation } from '@react-navigation/core';
import { RootRoutes, Routes } from '@app/navigation/types';
import { getBackgroundInput } from '@app/modals/WithdrawSuccess/utils';
import { RootContext } from '@app/state';
import { getExplorerURI } from '@app/utils/blockchainExplorer';
import { ALT_DARK_COLOR, ALT_LIGHT_COLOR } from './constants';
import styles from './styles';

export interface WithdrawSuccessProps {
  route: {
    params: RootRoutes['WithdrawSuccess'];
  };
}

const WithdrawSuccess: FC<WithdrawSuccessProps> = ({ route }) => {
  const navigation = useNavigation<NavigationProp<Routes>>();
  const {
    settingsStore: { theme },
  } = useContext(RootContext);
  const { value, coin, walletKey, transactionId } = route.params;
  const [explorerURI, _] = useState(getExplorerURI(coin, transactionId));

  const handleOnPressIconButton = useCallback(async () => {
    await Linking.openURL(explorerURI);
  }, [explorerURI]);

  const inputCustomContainerStyle = useMemo(
    (): any => [styles.inputCustomContainerStyle, getBackgroundInput(theme)],
    [theme]
  );

  const iconCopyWallet = <Icon.CopyAlt tint={palette.grey[600]} />;

  const renderButtonExplorer = useCallback(() => {
    const iconLink = <Icon.Link tint={palette.grey[600]} />;

    return (
      explorerURI && (
        <View style={styles.containerIconButton}>
          <IconButton
            size="large"
            startIcon={iconLink}
            altDark={palette.royalBlue[950]}
            onPress={handleOnPressIconButton}
          />
        </View>
      )
    );
  }, [explorerURI, handleOnPressIconButton]);

  const handleNavigateToConfirmation = () => {
    navigation.navigate('Wallet');
    navigation.navigate('StackedWalletScreen');
  };

  return (
    <View style={styles.container}>
      <SafeArea altLight={ALT_LIGHT_COLOR} altDark={ALT_DARK_COLOR}>
        <View style={styles.containerTitle}>
          <Typography strong size="h6">
            {translate('modals.withdrawSuccess.title')}
          </Typography>
        </View>

        <View style={styles.containerImage}>
          <Image
            accessibilityIgnoresInvertColors
            resizeMode="center"
            source={SuccessCoin}
          />
        </View>

        <View style={styles.containerDescription}>
          <Typography size="h4" style={styles.description}>
            {translate('modals.withdrawSuccess.descriptionPrefix')}
            <Typography strong size="h4">
              {` ${value} ${coin} `}
            </Typography>
            {translate('modals.withdrawSuccess.descriptionSuffix')}
          </Typography>
        </View>

        {walletKey && (
          <View style={styles.containerTextInput}>
            <TextInput
              customTypographyColor={palette.grey[600]}
              customContainerStyle={inputCustomContainerStyle}
              readonly
              disabled
              value={walletKey}
            />
          </View>
        )}

        <View style={styles.containerTransaction}>
          <View style={styles.containerCopyWalletAddress}>
            <CopyWalletAddress
              lightContainerAltColor={palette.white}
              lightBorderAltColor={palette.grey[600]}
              darkContainerAltColor={palette.royalBlue[1000]}
              darkBorderAltColor={palette.grey[600]}
              icon={iconCopyWallet}
              walletAddress={transactionId}
              hintText={translate('modals.withdrawSuccess.transactionHint')}
            />
          </View>
          {renderButtonExplorer()}
        </View>

        <View style={styles.containerButton}>
          <Button
            variant="secondary"
            style={styles.buttonDeposit}
            label={translate('modals.withdrawSuccess.button')}
            onPress={handleNavigateToConfirmation}
          />
        </View>
      </SafeArea>
    </View>
  );
};

export default WithdrawSuccess;
