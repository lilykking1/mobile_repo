import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { withWideView } from '@story/decorators';
import { withKnobs, boolean, number, select } from '@storybook/addon-knobs';
import { PAYMENT_METHOD, TRANSACTION_STATUS } from '@app/models/Transactions';
import AmountHeaderCard from '..';

declare let module;

storiesOf('Cards.AmountHeaderCard', module)
  .addDecorator(withKnobs)
  .addDecorator(withWideView)
  .add('Default', () => {
    const riskAmount = number('Risk Amount', 75);
    const fiatAmount = number('Fiat Amount', 50);
    const coinAmount = number('Coin Amount', 0.85);
    const showCloseButton = boolean('Show close button', false, 'Default');
    const paymentMethod = select(
      'Transaction method',
      PAYMENT_METHOD,
      PAYMENT_METHOD.BANK
    );
    const status = select(
      'Purchase status',
      TRANSACTION_STATUS,
      TRANSACTION_STATUS.PROCESSING
    );
    return (
      <AmountHeaderCard
        riskAmount={riskAmount}
        showCloseButton={showCloseButton}
        fiatAmount={fiatAmount}
        coinAmount={coinAmount}
        paymentMethod={paymentMethod}
        status={status}
      />
    );
  });
