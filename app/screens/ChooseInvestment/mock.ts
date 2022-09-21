import {
  PAYMENT_METHOD,
  TRANSACTION_STATUS,
  TRANSACTIONS_TYPES,
  UserPortfolioFlow,
} from '@app/models/Transactions';
import { DashboardRoutes } from '@app/navigation/types';

export const mockedRouteParams: DashboardRoutes['TransactionStatus'] = {
  riskAmount: 71,
  fiatAmount: 150,
  coinAmount: 0.85,
  flow: UserPortfolioFlow.PORTFOLIO_SETUP,
  status: TRANSACTION_STATUS.CONFIRMED,
  paymentMethod: PAYMENT_METHOD.COINBASE,
  coin: 'btc',
  date: 'Friday, 28 March 2022',
  transactionType: TRANSACTIONS_TYPES.deposit,
};
