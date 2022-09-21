import React, { FC, useCallback, useContext, useState } from 'react';
import { View } from 'react-native';
import {
  Typography,
  SafeArea,
  StickyHeader,
  IconButton,
  Icon,
  LoadingModal,
} from '@app/components';
import { WebView } from 'react-native-webview';
import { RootContext } from '@app/state';
import { RootRoutes, Routes } from '@app/navigation/types';
import {
  useNavigation,
  NavigationProp,
  RouteProp,
} from '@react-navigation/core';
import { palette } from '@app/theme';
import { translate } from '@app/i18n';
import ModalCancelReassessment from './components/ModalCancelReassessment';
import { FINAL_STEP_URL } from './constants';

interface RiskalyzeProps extends RouteProp<RootRoutes, 'Riskalyze'> {
  route: {
    params: RootRoutes['Riskalyze'];
  };
}
const Riskalyze: FC<RiskalyzeProps> = ({ route: { params } }) => {
  const {
    riskalyzeStore: { lastVisitedUrl, setLastVisitedUrl },
  } = useContext(RootContext);

  const [
    isCancelReassessmentModalVisible,
    setIsCancelReassessmentModalVisible,
  ] = useState(false);
  const navigation = useNavigation<NavigationProp<Routes>>();
  const riskalyzeUrl = params?.url;
  const isRetaking = params?.isRetakingAssessment;

  const onCloseCancelReassessmentModal = useCallback(() => {
    setIsCancelReassessmentModalVisible(false);
  }, []);

  const onStopReAssessment = useCallback(() => {
    onCloseCancelReassessmentModal();
    setLastVisitedUrl(null);
    navigation.goBack();
  }, [onCloseCancelReassessmentModal, navigation, setLastVisitedUrl]);

  const handleBackPress = useCallback(() => {
    if (isRetaking) {
      setIsCancelReassessmentModalVisible(true);
    } else {
      navigation.navigate('ManagedPortfolioLoading');
    }
  }, [navigation, isRetaking]);

  const handleOnNavigationStateChange = useCallback(
    (navState) => {
      const { url } = navState;
      if (isRetaking && url.includes(FINAL_STEP_URL)) {
        setLastVisitedUrl(null);
        navigation.navigate('ManagedPortfolioLoading');
      } else {
        setLastVisitedUrl(url);
      }
    },
    [isRetaking, setLastVisitedUrl, navigation]
  );

  const handleClosePress = useCallback(() => {
    navigation.navigate('ManagedPortfolioLoading');
  }, [navigation]);

  const NavBarTitle = (
    <Typography size="body1" strong>
      {translate('screens.riskalyze.title')}
    </Typography>
  );

  const CloseIcon = <Icon.Close />;
  const CloseButton = (
    <IconButton startIcon={CloseIcon} onPress={handleClosePress} />
  );

  return (
    <SafeArea altLight={palette.grey[200]} edges={['top']}>
      <StickyHeader
        Left={isRetaking && <View />}
        altLight={palette.grey[200]}
        Title={NavBarTitle}
        Right={CloseButton}
        handleBackPress={handleBackPress}
      />
      <WebView
        scrollEnabled
        originWhitelist={['*']}
        startInLoadingState
        onNavigationStateChange={handleOnNavigationStateChange}
        renderLoading={() => <LoadingModal />}
        source={{
          uri: lastVisitedUrl || riskalyzeUrl,
        }}
      />
      <ModalCancelReassessment
        handleStopReAssessment={onStopReAssessment}
        visible={isCancelReassessmentModalVisible}
        onRequestClose={onCloseCancelReassessmentModal}
      />
    </SafeArea>
  );
};

export default Riskalyze;
