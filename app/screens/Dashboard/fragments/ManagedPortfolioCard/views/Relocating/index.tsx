import React, { FC } from 'react';
import { View } from 'react-native';

import {
  Typography,
  Card,
  RiskCard,
  Icon,
  Background,
  WaitingIndicator,
} from '@app/components';
import { palette } from '@app/theme';
import { translate } from '@app/i18n';
import styles from './styles';
import { PORTFOLIO_RELOCATING_COUNTDOWN } from './constants';

export interface RelocatingProps {
  oldRisk: number;
  newRisk: number;
}

const Relocating: FC<RelocatingProps> = ({ oldRisk, newRisk }) => (
  <Card usePadding={false} size="large" style={styles.container}>
    <View style={styles.row}>
      <Typography strong style={styles.title} size="h6">
        {translate('screens.dashboard.cards.managedPortfolio.title')}
      </Typography>

      <View style={styles.valuesContainer}>
        <RiskCard
          value={oldRisk}
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
    </View>

    <Background style={styles.countdownContainer}>
      <WaitingIndicator
        countdown={PORTFOLIO_RELOCATING_COUNTDOWN}
        label={translate(
          'screens.dashboard.cards.managedPortfolio.relocatingCountdown',
          {
            countdown: PORTFOLIO_RELOCATING_COUNTDOWN,
          }
        )}
        labelSize="buttons"
        labelAltLight="secondary.600"
        labelAltDark="grey.300"
      />
    </Background>
  </Card>
);

export default Relocating;
