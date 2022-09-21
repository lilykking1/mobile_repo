import React from 'react';
import { Image } from 'react-native';

import { RiskCard } from '@app/assets/images';
import { ButtonVariant } from '@app/components/Buttons/Button/types';
import { translate } from '@app/i18n';
import { ManagedPortfolioStatus } from '../../types';

import MockedRiskScore from './fragments/MockedRiskScore';
import styles from './styles';

const statusMessages = {
  [ManagedPortfolioStatus.NOT_STARTED]: translate(
    'screens.dashboard.cards.managedPortfolio.initialMessage'
  ),
  [ManagedPortfolioStatus.STARTED]: translate(
    'screens.dashboard.cards.managedPortfolio.initialMessage'
  ),
  [ManagedPortfolioStatus.CONFIGURED]: translate(
    'screens.dashboard.cards.managedPortfolio.continueMessage'
  ),
  [ManagedPortfolioStatus.CLOSED]: translate(
    'screens.dashboard.cards.managedPortfolio.restoreMessage'
  ),
};

const statusActionLabels = {
  [ManagedPortfolioStatus.NOT_STARTED]: translate('onboarding.getStarted'),
  [ManagedPortfolioStatus.STARTED]: translate(
    'screens.dashboard.cards.managedPortfolio.continuePortfolioAction'
  ),
  [ManagedPortfolioStatus.CONFIGURED]: translate(
    'screens.welcome.continuePortfolioAction'
  ),
  [ManagedPortfolioStatus.CLOSED]: translate(
    'screens.dashboard.cards.managedPortfolio.restorePortfolioAction'
  ),
};

export const getMessage = (status: ManagedPortfolioStatus): string =>
  statusMessages[status];

export const getActionLabel = (status: ManagedPortfolioStatus): string =>
  statusActionLabels[status];

export const getActionVariant = (
  status: ManagedPortfolioStatus
): ButtonVariant =>
  status === ManagedPortfolioStatus.CONFIGURED ? 'green' : 'primary';

export const getDetail = (status: ManagedPortfolioStatus): React.ReactNode => {
  const statusThatDisplayRiskScore = [
    ManagedPortfolioStatus.CONFIGURED,
    ManagedPortfolioStatus.CLOSED,
  ];

  // displays a mocked Risk Score graphic until the actual component is done
  if (statusThatDisplayRiskScore.includes(status)) {
    return <MockedRiskScore />;
  }

  return (
    <Image
      style={styles.image}
      accessibilityIgnoresInvertColors
      source={RiskCard}
    />
  );
};

export const getActionContainerStyle = (
  status: ManagedPortfolioStatus
): any[] => {
  const isRestoreAction = status === ManagedPortfolioStatus.CLOSED;
  return [styles.actionContainer, { maxWidth: isRestoreAction ? '75%' : 220 }];
};
