import React, { FC, useCallback, useContext, useMemo } from 'react';
import { View } from 'react-native';
import { observer } from 'mobx-react';
import { NavigationProp, useNavigation } from '@react-navigation/core';
import { RootContext } from '@app/state';
import crashlytics from '@react-native-firebase/crashlytics';

import {
  Button,
  ListNavigationItem,
  SafeArea,
  StickyHeader,
  Toggle,
  Typography,
} from '@app/components';
import { SettingsRoutes } from '@app/navigation/types';
import { ScrollView } from 'react-native-gesture-handler';
import useStickyHandler from '@app/hooks/useStickyHandler';

import { palette } from '@app/theme';
import styles from './styles';

const Debug: FC = () => {
  const navigation = useNavigation<NavigationProp<SettingsRoutes>>();
  const { scroll } = useStickyHandler(undefined);
  // use the root context managed by mobx
  const {
    cognitoStore: { isKycRequired, setIsKycRequired },
    userStore: {
      hasStartedManagedPortfolioSetup,
      setHasStartedManagedPortfolioSetup,
      hasTakenPreQualification,
      setHasTakenPreQualification,
      hasTakenRiskAssessment,
      setHasTakenRiskAssessment,
      hasCompletedManagedPortfolioSetup,
      setHasCompletedManagedPortfolioSetup,
    },
    settingsStore: {
      enableTwoFactorAuth,
      disableTwoFactorAuth,
      isTwoFactorAuthEnabled,
    },
  } = useContext(RootContext);

  const handleToggleKycRequired = useCallback(() => {
    setIsKycRequired(!isKycRequired);
  }, [isKycRequired, setIsKycRequired]);

  const handleToggleHasStartedManagedPortfolioSetup = useCallback(() => {
    setHasStartedManagedPortfolioSetup(!hasStartedManagedPortfolioSetup);
  }, [hasStartedManagedPortfolioSetup, setHasStartedManagedPortfolioSetup]);

  const handleToggleHasTakenPreQualification = useCallback(() => {
    setHasTakenPreQualification(!hasTakenPreQualification);
  }, [hasTakenPreQualification, setHasTakenPreQualification]);

  const handleToggleHasTakenRiskAssessment = useCallback(() => {
    setHasTakenRiskAssessment(!hasTakenRiskAssessment);
  }, [hasTakenRiskAssessment, setHasTakenRiskAssessment]);

  const handleToggleHasCompletedManagedPortfolioSetup = useCallback(() => {
    setHasCompletedManagedPortfolioSetup(!hasCompletedManagedPortfolioSetup);
  }, [hasCompletedManagedPortfolioSetup, setHasCompletedManagedPortfolioSetup]);

  const handleToggleIsTwoFactorAuthEnabled = useCallback(() => {
    if (isTwoFactorAuthEnabled) {
      disableTwoFactorAuth();
    } else {
      enableTwoFactorAuth();
    }
  }, [disableTwoFactorAuth, enableTwoFactorAuth, isTwoFactorAuthEnabled]);

  const collapsedTitle = (
    <Typography strong size="h6">
      Debug
    </Typography>
  );

  const title = (
    <Typography strong size="h2">
      Debug
    </Typography>
  );

  const hasStartedManagedPortfolioSetupButton = useMemo(
    () => (
      <Toggle
        checked={hasStartedManagedPortfolioSetup}
        onChange={handleToggleHasStartedManagedPortfolioSetup}
      />
    ),
    [
      handleToggleHasStartedManagedPortfolioSetup,
      hasStartedManagedPortfolioSetup,
    ]
  );

  const hasTakenPreQualificationButton = useMemo(
    () => (
      <Toggle
        checked={hasTakenPreQualification}
        onChange={handleToggleHasTakenPreQualification}
      />
    ),
    [handleToggleHasTakenPreQualification, hasTakenPreQualification]
  );

  const hasTakenRiskAssessmentButton = useMemo(
    () => (
      <Toggle
        checked={hasTakenRiskAssessment}
        onChange={handleToggleHasTakenRiskAssessment}
      />
    ),
    [handleToggleHasTakenRiskAssessment, hasTakenRiskAssessment]
  );

  const hasCompletedManagedPortfolioSetupButton = useMemo(
    () => (
      <Toggle
        checked={hasCompletedManagedPortfolioSetup}
        onChange={handleToggleHasCompletedManagedPortfolioSetup}
      />
    ),
    [
      handleToggleHasCompletedManagedPortfolioSetup,
      hasCompletedManagedPortfolioSetup,
    ]
  );

  const isTwoFactorAuthEnabledButton = useMemo(
    () => (
      <Toggle
        checked={isTwoFactorAuthEnabled}
        onChange={handleToggleIsTwoFactorAuthEnabled}
      />
    ),
    [handleToggleIsTwoFactorAuthEnabled, isTwoFactorAuthEnabled]
  );

  const isKycRequiredButton = useMemo(
    () => <Toggle checked={isKycRequired} onChange={handleToggleKycRequired} />,
    [handleToggleKycRequired, isKycRequired]
  );

  const crashButton = useMemo(
    () => <Button label="Crash App" onPress={() => crashlytics().crash()} />,
    []
  );

  return (
    <SafeArea altLight={palette.white} edges={['top']} style={styles.container}>
      <StickyHeader
        scroll={scroll}
        CollapsedTitle={collapsedTitle}
        BottomTitle={title}
        altLight={palette.white}
        handleBackPress={() => navigation.goBack()}
      />
      <View style={styles.content}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          scrollEventThrottle={16}
        >
          <View>
            <ListNavigationItem
              title="isKycRequired"
              button={isKycRequiredButton}
            />
            <ListNavigationItem
              title="hasStartedManagedPortfolioSetup"
              button={hasStartedManagedPortfolioSetupButton}
            />
            <ListNavigationItem
              title="hasTakenPreQualification"
              button={hasTakenPreQualificationButton}
            />
            <ListNavigationItem
              title="hasTakenRiskAssessment"
              button={hasTakenRiskAssessmentButton}
            />
            <ListNavigationItem
              title="hasCompletedManagedPortfolioSetup"
              button={hasCompletedManagedPortfolioSetupButton}
            />
            <ListNavigationItem
              title="isTwoFactorAuthEnabled"
              button={isTwoFactorAuthEnabledButton}
            />
            <ListNavigationItem title="Crash App" button={crashButton} />
          </View>
        </ScrollView>
      </View>
    </SafeArea>
  );
};

export default observer(Debug);
