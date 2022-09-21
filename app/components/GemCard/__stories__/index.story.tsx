import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { withWideView } from '@story/decorators';
import { withKnobs, boolean, select } from '@storybook/addon-knobs';
import { mockedRouteParams } from '@app/mocks/Portfolio';
import Background from '@app/components/Background';
import { PAYMENT_METHOD, TRANSACTIONS_TYPES } from '@app/models/Transactions';
import GemCard from '..';
import styles from './styles';

declare let module;

storiesOf('Cards.GemCard', module)
  .addDecorator(withKnobs)
  .addDecorator(withWideView)
  .add('Default', () => {
    const paymentMethod = select(
      'Transaction method',
      PAYMENT_METHOD,
      PAYMENT_METHOD.BANK
    );
    const transactionType = select(
      'Transaction type',
      TRANSACTIONS_TYPES,
      TRANSACTIONS_TYPES.purchase
    );
    const numberOfTransactions = select(
      'Number of transactions',
      [1, 2, 3, 4],
      1
    );
    const showCongratulationsCard = boolean('Show congrats', true);
    const titleDark = boolean('Title Dark', true);

    return (
      <Background style={styles.container}>
        <GemCard
          isTitleDark={titleDark}
          paymentMethod={paymentMethod}
          transactionType={transactionType}
          showCongratulationsCard={showCongratulationsCard}
          transactions={mockedRouteParams.transactions.slice(
            0,
            numberOfTransactions
          )}
          estimatedDepositDate="Friday, 28 March 2022"
        />
      </Background>
    );
  });
