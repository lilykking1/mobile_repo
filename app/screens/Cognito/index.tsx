import React, { FC, useCallback } from 'react';
import {
  Typography,
  SafeArea,
  StickyHeader,
  IconButton,
  Icon,
  LoadingModal,
} from '@app/components';
import { WebView } from 'react-native-webview';
import { RootRoutes, Routes } from '@app/navigation/types';
import {
  useNavigation,
  NavigationProp,
  RouteProp,
} from '@react-navigation/core';
import { palette } from '@app/theme';
import { translate } from '@app/i18n';
import useKycModal from '@app/hooks/useKycModal';

interface CognitoProps extends RouteProp<RootRoutes, 'Cognito'> {
  route: {
    params: RootRoutes['Cognito'];
  };
}
const Cognito: FC<CognitoProps> = ({ route: { params } }) => {
  const navigation = useNavigation<NavigationProp<Routes>>();
  const cognitoUrl = params?.url;
  const { setIsKycRequired } = useKycModal();
  const handleBackPress = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  const handleOnClose = () => {
    setIsKycRequired(false);
    navigation.goBack();
  };
  const NavBarTitle = (
    <Typography size="body1" strong>
      {translate('screens.cognito.title')}
    </Typography>
  );

  const CloseIcon = <Icon.Close />;
  const CloseButton = (
    <IconButton startIcon={CloseIcon} onPress={handleOnClose} />
  );

  return (
    <SafeArea altLight={palette.grey[200]} edges={['top']}>
      <StickyHeader
        altLight={palette.grey[200]}
        Title={NavBarTitle}
        Right={CloseButton}
        handleBackPress={handleBackPress}
      />
      <WebView
        scrollEnabled
        startInLoadingState
        renderLoading={() => <LoadingModal />}
        source={{
          uri: cognitoUrl,
        }}
        cacheEnabled={false}
      />
    </SafeArea>
  );
};

export default Cognito;
