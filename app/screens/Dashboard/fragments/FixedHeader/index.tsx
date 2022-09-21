import React, { FC, useMemo, useCallback } from 'react';
import { View } from 'react-native';
import { NavigationProp, useNavigation } from '@react-navigation/core';
import Animated from 'react-native-reanimated';

import { Icon, Quantity, StickyHeader, ToggleIcons } from '@app/components';
import { Alert } from '@app/models';
import { Routes } from '@app/navigation/types';
import CryptoValueLabel from '@app/components/CryptoValueLabel';

import { logAmplitudeEvent } from '@app/utils/amplitude';
import { AmplitudeDashboardEvents } from '@app/utils/amplitude/constants/dashboard/events';
import { ActionType } from '../../types';
import Action from '../Action';

import styles from './styles';

interface HeaderProps {
  onPressSecretAction: () => void;
  onPressToggleCurrency: () => void;
  isValuesSecret: boolean;
  isValuesInBitcoin: boolean;
  scrollYValue: Animated.SharedValue<number>;
  prefixValues?: string;
  suffixValues?: string;
  portfolioValue?: number;
  alerts?: Alert[];
}

const Header: FC<HeaderProps> = ({
  onPressSecretAction,
  onPressToggleCurrency,
  isValuesSecret,
  isValuesInBitcoin,
  scrollYValue,
  prefixValues,
  suffixValues,
  portfolioValue,
  alerts,
}) => {
  const navigation = useNavigation<NavigationProp<Routes>>();

  const handleAlertAction = useCallback(() => {
    logAmplitudeEvent(AmplitudeDashboardEvents.ALERTS);
    navigation.navigate('Alerts', { alerts });
  }, [alerts, navigation]);

  const valueDisplayed = useMemo(() => {
    if (isValuesInBitcoin) {
      return (
        <CryptoValueLabel
          isSecret={isValuesSecret}
          value={portfolioValue}
          variant="normal"
          coinSuffix={suffixValues}
        />
      );
    }

    return (
      <Quantity
        style={styles.portfolioValue}
        isSecret={isValuesSecret}
        strong
        useValueLabel
        valueLabelVariant="normal"
        prefix={prefixValues}
        suffix={suffixValues}
        value={portfolioValue}
      />
    );
  }, [
    isValuesInBitcoin,
    isValuesSecret,
    portfolioValue,
    prefixValues,
    suffixValues,
  ]);

  const Right = (
    <View style={styles.actions}>
      <Action
        onPress={onPressSecretAction}
        type={ActionType.SECRET}
        hasHorizontalSpace
      />
      <Action
        onPress={handleAlertAction}
        type={ActionType.ALERT}
        alerts={alerts}
        hasAlerts
      />
    </View>
  );

  const Left = (
    <View style={styles.actionsRow}>
      <ToggleIcons
        leftIcon={<Icon.Dollar />}
        rightIcon={<Icon.Bitcoin />}
        variant="default"
        onChange={onPressToggleCurrency}
        checked={isValuesInBitcoin}
      />
    </View>
  );

  return (
    <StickyHeader
      scroll={scrollYValue}
      CollapsedTitle={valueDisplayed}
      Right={Right}
      Left={Left}
      secondaryBackground
    />
  );
};

export default Header;
