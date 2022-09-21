import React, { FC, useCallback, useMemo } from 'react';
import { View, ViewProps } from 'react-native';
import { Icon } from '@app/components';
import Button from '@app/components/Buttons/Button';
import Typography from '@app/components/Typography';
import { translate } from '@app/i18n';
import { Theme } from '@app/state/stores/settings/types';
import { palette } from '@app/theme';
import { PAYMENT_METHOD, TRANSACTION_STATUS } from '@app/models/Transactions';
import { useBraze } from '@app/hooks';
import { BrazeBuildMyPortfolioEvents } from '@app/utils/braze/events';
import {
  getDisclaimerTextFromPaymentMethod,
  getBorderStyle,
} from '../../utils';

import styles from './styles';

interface BottomActionProps extends ViewProps {
  status?: TRANSACTION_STATUS;
  hasMultipleTransactions?: boolean;
  isAllTransactionsSucceeded?: boolean;
  paymentMethod: PAYMENT_METHOD;
  theme: Theme;
}
const BottomAction: FC<BottomActionProps> = ({
  paymentMethod,
  status,
  theme,
  hasMultipleTransactions,
  isAllTransactionsSucceeded,
}) => {
  const { logBrazeCustomEvent } = useBraze();
  const handleViewMyPortfolio = useCallback(() => {
    // TODO: handle View My Portfolio
    logBrazeCustomEvent(BrazeBuildMyPortfolioEvents.CLICK_VIEW_MY_PORTFOLIO);
  }, [logBrazeCustomEvent]);
  const handleTryAgain = useCallback(() => {
    // TODO: handle try again
  }, []);

  const infoTextWithTopBorderStyle = useMemo(
    () => [styles.disclaimerContainer, getBorderStyle(theme)],
    [theme]
  );

  if (status === TRANSACTION_STATUS.PROCESSING) {
    return (
      <View style={infoTextWithTopBorderStyle}>
        <Typography variant="grey.600" size="body2">
          {getDisclaimerTextFromPaymentMethod(paymentMethod)}
        </Typography>
      </View>
    );
  }
  if (
    status === TRANSACTION_STATUS.COMPLETED ||
    status === TRANSACTION_STATUS.CONFIRMED
  ) {
    return (
      <Button
        label={translate('coinDetail.gemCard.actions.viewMyPortfolio')}
        variant="green"
        onPress={handleViewMyPortfolio}
      />
    );
  }
  if (status === TRANSACTION_STATUS.FAILED) {
    return (
      <View style={infoTextWithTopBorderStyle}>
        <View style={styles.failedContainer}>
          <Icon.Attention tint={palette.red[500]} />
          <Typography size="buttons" variant="red" style={styles.failedText}>
            {translate('coinDetail.gemCard.depositFailed')}
          </Typography>
        </View>
        <Button
          label={translate('coinDetail.gemCard.actions.tryAgain')}
          variant="primary"
          onPress={handleTryAgain}
        />
      </View>
    );
  }

  if (hasMultipleTransactions) {
    return (
      <View style={styles.balanceButtonContainer}>
        <Button
          label={translate('coinDetail.gemCard.actions.continueCurrentBalance')}
          variant="green"
          disabled={!isAllTransactionsSucceeded}
        />
      </View>
    );
  }

  return null;
};

export default BottomAction;
