import React, { FC, useMemo } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { NavigationProp, useNavigation } from '@react-navigation/core';

import {
  Quantity,
  Typography,
  CoinStack,
  Card,
  AccrualCard,
} from '@app/components';
import { COINS } from '@app/models';
import { translate } from '@app/i18n';
import CryptoValueLabel from '@app/components/CryptoValueLabel';
import { Routes } from '@app/navigation/types';

import styles from './styles';

export interface PopulatedProps {
  value: number | string;
  isValuesSecret: boolean;
  isValuesInBitcoin: boolean;
  prefixValues?: string;
  suffixValues?: string;
  accrualValue?: number;
  accrualChange?: number;
  coins?: COINS[];
}

const Populated: FC<PopulatedProps> = ({
  value,
  isValuesSecret,
  isValuesInBitcoin,
  prefixValues,
  suffixValues,
  accrualValue,
  accrualChange,
  coins,
}) => {
  const navigation = useNavigation<NavigationProp<Routes>>();

  const handleNavigateSelfDirectedArea = () => {
    navigation.navigate('SelfDirected' as never);
  };
  const valueDisplayed = useMemo(() => {
    if (isValuesInBitcoin) {
      return (
        <CryptoValueLabel
          isSecret={isValuesSecret}
          value={value}
          variant="normal"
          coinSuffix={suffixValues}
        />
      );
    }

    return (
      <Quantity
        prefix={prefixValues}
        suffix={suffixValues}
        isSecret={isValuesSecret}
        value={value}
        useValueLabel
        valueLabelVariant="normal"
      />
    );
  }, [isValuesInBitcoin, isValuesSecret, prefixValues, suffixValues, value]);

  return (
    <Card size="large" style={styles.container}>
      <TouchableOpacity
        activeOpacity={0.75}
        onPress={handleNavigateSelfDirectedArea}
      >
        <View style={[styles.row, styles.bottomSpace]}>
          <Typography strong style={styles.title} size="h6">
            {translate('screens.dashboard.cards.selfDirected.title')}
          </Typography>

          {valueDisplayed}
        </View>

        <View style={styles.row}>
          <CoinStack.Filled size={24} coins={coins} max={5} />

          {accrualValue && (
            <AccrualCard
              style={styles.accrualCard}
              value={accrualValue}
              isSecret={isValuesSecret}
              percentageChange={accrualChange?.toString()}
              precision={0}
            />
          )}
        </View>
      </TouchableOpacity>
    </Card>
  );
};

export default Populated;
