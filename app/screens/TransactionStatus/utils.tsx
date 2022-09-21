import React from 'react';
import { View } from 'react-native';
import { TransactionsData, UserPortfolioFlow } from '@app/models/Transactions';
import { CoinStackData, StackBarData } from '@app/models/Portfolio';
import { PortfolioCompositionArea, PaymentHistory } from './fragments';
import styles from './styles';

export const getDynamicContent = (
  userPortfolioFlow: UserPortfolioFlow,
  portfolioCoinStacks: CoinStackData[],
  portfolioStackBarData: StackBarData[],
  transactions: TransactionsData[]
): React.ReactElement => {
  if (userPortfolioFlow === UserPortfolioFlow.PORTFOLIO_MODIFICATION) {
    return (
      <View style={styles.portfolioCompositionAreContainer}>
        <PortfolioCompositionArea
          stacksBarData={portfolioStackBarData}
          stacksCardData={portfolioCoinStacks}
        />
      </View>
    );
  }

  return (
    <View style={styles.transactionsContainer}>
      <PaymentHistory data={transactions} />
    </View>
  );
};
