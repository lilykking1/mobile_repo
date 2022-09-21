import React, { useCallback, useMemo, useContext, useState } from 'react';
import { observer } from 'mobx-react';
import { NavigationProp, useNavigation } from '@react-navigation/core';
import { View, Linking } from 'react-native';
import { translate } from '@app/i18n';
import {
  Typography,
  StickyHeader,
  SafeArea,
  CopyWalletAddress,
  Icon,
  Button,
  IconButton,
} from '@app/components';
import { RootContext } from '@app/state';
import { Routes } from '@app/navigation/types';
import { getExplorerURI } from '@app/utils/blockchainExplorer';
import styles from './styles';
import { getTextTheme } from './utils';
import { CloseManagedPortfolioSuccessProps } from './types';
import {
  ALT_DARK_STICKY_HEADER,
  ALT_LIGHT_SAFE_AREA,
  ALT_LIGHT_STICKY_HEADER,
  COLOR_COPY_ICON,
  ALT_LIGHT_LINK_ICON,
  ALT_DARK_BORDER_COPY_WALLET,
  ALT_DARK_COPY_WALLET_CONTAINER,
  ALT_DARK_LINK_ICON,
  COLOR_LINK_ICON,
  ALT_LIGHT_BORDER_COPY_WALLET,
  ALT_LIGHT_COPY_WALLET_CONTAINER,
} from './constants';

const CloseManagedPortfolioSuccess: React.FC<CloseManagedPortfolioSuccessProps> = ({
  route,
}) => {
  const { walletAddress, selectedCoin, transactionId } = route.params;
  const navigation = useNavigation<NavigationProp<Routes>>();
  const [explorerURI, _] = useState(
    getExplorerURI(selectedCoin, transactionId)
  );
  const {
    settingsStore: { theme },
  } = useContext(RootContext);

  const iconCopyWallet = <Icon.CopyAlt tint={COLOR_COPY_ICON} />;
  const iconLink = <Icon.Link tint={COLOR_LINK_ICON} />;
  const subtitleStyles = useMemo(() => getTextTheme(theme), [theme]);

  const handleOnPressIconButton = useCallback(async () => {
    await Linking.openURL(explorerURI);
  }, [explorerURI]);

  const handleGoToDashboard = useCallback(() => {
    navigation.navigate('Dashboard');
  }, [navigation]);

  return (
    <SafeArea altLight={ALT_LIGHT_SAFE_AREA}>
      <StickyHeader
        Title={(
          <Typography strong size="h6">
            {translate(
              'screens.managedPortfolio.closeManagedPortfolio.closeManagedPortfolioSuccess.headerTitle'
            )}
          </Typography>
        )}
        altLight={ALT_LIGHT_STICKY_HEADER}
        altDark={ALT_DARK_STICKY_HEADER}
      />
      <View style={styles.container}>
        <Typography style={styles.title} size="h4" strong>
          {translate(
            'screens.managedPortfolio.closeManagedPortfolio.closeManagedPortfolioSuccess.title'
          )}
        </Typography>
        <Typography style={[styles.subtitle, subtitleStyles]} size="h5">
          {translate(
            'screens.managedPortfolio.closeManagedPortfolio.closeManagedPortfolioSuccess.subtitle'
          )}
        </Typography>
        <View style={styles.copyWalletContainer}>
          <View style={styles.copyWalletInnerContainer}>
            <CopyWalletAddress
              lightContainerAltColor={ALT_LIGHT_COPY_WALLET_CONTAINER}
              lightBorderAltColor={ALT_LIGHT_BORDER_COPY_WALLET}
              darkContainerAltColor={ALT_DARK_COPY_WALLET_CONTAINER}
              darkBorderAltColor={ALT_DARK_BORDER_COPY_WALLET}
              darkTypographyAltColor="white"
              icon={iconCopyWallet}
              walletAddress={walletAddress}
              hintText={translate('modals.withdrawSuccess.transactionHint')}
            />
          </View>
          <IconButton
            onPress={handleOnPressIconButton}
            altDark={ALT_DARK_LINK_ICON}
            altLight={ALT_LIGHT_LINK_ICON}
            containerStyle={styles.iconButton}
            startIcon={iconLink}
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            size="large"
            variant="primary"
            label={translate(
              'screens.managedPortfolio.closeManagedPortfolio.closeManagedPortfolioSuccess.action.goToDashboard'
            )}
            onPress={handleGoToDashboard}
          />
        </View>
      </View>
    </SafeArea>
  );
};

export default observer(CloseManagedPortfolioSuccess);
