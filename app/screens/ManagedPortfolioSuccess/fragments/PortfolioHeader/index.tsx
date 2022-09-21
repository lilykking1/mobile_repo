import React, { FC, useMemo } from 'react';
import { View } from 'react-native';
import { Icon, Quantity, RiskCard, Typography } from '@app/components';
import { translate } from '@app/i18n';

import { palette } from '@app/theme';
import styles from './styles';

interface PortfolioHeaderProps {
  userName: string;
  initialInvestment: number;
  currentRisk: number;
  isReassessment?: boolean;
  newRisk?: number;
}

const PortfolioHeader: FC<PortfolioHeaderProps> = ({
  userName,
  initialInvestment,
  currentRisk,
  isReassessment,
  newRisk,
}) => {
  const valueLabel = useMemo(() => {
    if (isReassessment) {
      return translate('screens.managedPortfolioSuccess.portfolioValue');
    }
    return translate('screens.managedPortfolioSuccess.initialInvestment');
  }, [isReassessment]);

  const portfolioInfo = useMemo(() => {
    if (isReassessment) {
      return translate(
        'screens.managedPortfolioSuccess.finishedTheReassessment'
      );
    }
    return translate('screens.managedPortfolioSuccess.userInstructions');
  }, [isReassessment]);

  const RiskComponent = useMemo(() => {
    if (isReassessment) {
      return (
        <View style={styles.risksContainer}>
          <RiskCard
            value={currentRisk}
            size="normal"
            noShadow
            style={styles.riskCard}
            label={(
              <Typography
                size="body2"
                variant="grey.600"
                style={styles.riskLabel}
              >
                {translate('screens.managedPortfolioSuccess.current')}
              </Typography>
            )}
          />
          <View style={styles.chevronRightIconsContainer}>
            <Icon.ChevronRight
              tint={palette.grey[500]}
              customStyle={styles.firstChevronRightIcon}
            />
            <Icon.ChevronRight tint={palette.grey[500]} />
          </View>

          <RiskCard
            value={newRisk}
            size="normal"
            noShadow
            style={styles.riskCard}
            label={(
              <Typography
                size="body2"
                variant="green.500"
                strong
                style={styles.riskLabel}
              >
                {translate('screens.managedPortfolioSuccess.new')}
              </Typography>
            )}
          />
        </View>
      );
    }
    return <RiskCard value={currentRisk} size="normal" />;
  }, [currentRisk, isReassessment, newRisk]);

  return (
    <View style={styles.headerContainer}>
      <View style={styles.topHeaderContainer}>
        <View style={styles.leftHeaderContainer}>
          <Typography size="h2" strong>
            {`${translate(
              'screens.managedPortfolioSuccess.title'
            )}, ${userName}!`}
          </Typography>
        </View>
        <View style={styles.topRightHeaderContainer}>
          <Typography variant="grey.600" size="body2">
            {valueLabel}
          </Typography>
          <Quantity
            value={initialInvestment}
            prefix="$"
            size="body1"
            useValueLabel
          />
        </View>
      </View>
      <View style={styles.bottomHeaderContainer}>
        <View style={styles.leftHeaderContainer}>
          <Typography variant="grey.600" size="buttons">
            {portfolioInfo}
          </Typography>
        </View>
        {RiskComponent}
      </View>
    </View>
  );
};

export default PortfolioHeader;
