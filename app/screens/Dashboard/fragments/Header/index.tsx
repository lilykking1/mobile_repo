import React, { FC, useMemo } from 'react';
import { View } from 'react-native';
import { translate } from '@app/i18n';
import { AccrualCard, Background, Quantity, Typography } from '@app/components';
import PeriodButton from '@app/components/PeriodButton';
import CryptoValueLabel from '@app/components/CryptoValueLabel';
import { portfolioData } from '../../mock';

import styles from './styles';

interface HeaderProps {
  handleOpenPeriodFilter: () => void;
  isValuesInBitcoin: boolean;
  isValuesSecret: boolean;
  periodLabel: string;
  suffixValue?: string;
  prefixValue?: string;
}

const Header: FC<HeaderProps> = ({
  isValuesInBitcoin,
  isValuesSecret,
  periodLabel,
  handleOpenPeriodFilter,
  suffixValue,
  prefixValue,
}) => {
  const valueDisplayed = useMemo(() => {
    if (isValuesInBitcoin) {
      return (
        <CryptoValueLabel
          isSecret={isValuesSecret}
          value={portfolioData.totalInvested}
          variant="large"
          coinSuffix={suffixValue}
        />
      );
    }

    return (
      <Quantity
        style={styles.portfolioValue}
        isSecret={isValuesSecret}
        strong
        useValueLabel
        valueLabelVariant="large"
        prefix={prefixValue}
        suffix={suffixValue}
        value={portfolioData.totalInvested}
      />
    );
  }, [isValuesInBitcoin, isValuesSecret, prefixValue, suffixValue]);

  return (
    <Background secondary style={styles.spacing}>
      <View style={styles.portfolioContainer}>
        <Typography size="h6" strong style={styles.portfolioText}>
          {translate('screens.dashboard.portfolioValue')}
        </Typography>

        {valueDisplayed}
      </View>

      <View style={styles.statsContainer}>
        <View />

        {portfolioData.accrualValue && (
          <AccrualCard
            isSecret={isValuesSecret}
            value={portfolioData.accrualValue}
            percentageChange={portfolioData.percentChange?.toString()}
            precision={0}
            style={styles.portfolioChange}
          />
        )}

        <PeriodButton label={periodLabel} onPress={handleOpenPeriodFilter} />
      </View>
    </Background>
  );
};

export default Header;
