import { PaletteColor } from '@app/theme';
import { CompositeNavigationProp, RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';

import { Asset, AssetVariation } from '@app/models';
import {
  PAYMENT_METHOD,
  TRANSACTION_STATUS,
  TRANSACTIONS_TYPES,
  UserPortfolioFlow,
} from '@app/models/Transactions';
import { Alert } from '@app/models/Alert';
import {
  assetsDetails,
  CoinStackData,
  CoinStackDetails,
} from '@app/models/Portfolio';
import { GemFlowInitator } from '@app/screens/Gem/types';
import { Transaction } from '../screens/TransactionStatus/types';

export interface AuthenticationNavigationProps<
  RouteName extends keyof AuthenticationRoutes
> {
  navigation: CompositeNavigationProp<
    NativeStackNavigationProp<AuthenticationRoutes, RouteName>,
    CompositeNavigationProp<
      BottomTabNavigationProp<RootRoutes, 'Home'>,
      NativeStackNavigationProp<RootRoutes, 'Settings'>
    >
  >;
  route: RouteProp<AuthenticationRoutes, RouteName>;
}

export interface TwoFactorConfigurationProps<
  RouteName extends keyof TwoFactorConfigurationRoutes
> {
  navigation: NativeStackNavigationProp<
    TwoFactorConfigurationRoutes,
    RouteName
  >;
  route: RouteProp<TwoFactorConfigurationRoutes, RouteName>;
}

export interface HomeNavigationProps<RouteName extends keyof HomeRoutes> {
  navigation: CompositeNavigationProp<
    BottomTabNavigationProp<HomeRoutes, RouteName>,
    BottomTabNavigationProp<HomeRoutes, 'Market'>
  >;
  route: RouteProp<HomeRoutes, RouteName>;
}

export interface SettingsNavigationProps<
  RouteName extends keyof SettingsRoutes
> {
  navigation: NativeStackNavigationProp<SettingsRoutes, RouteName>;
  route: RouteProp<SettingsRoutes, RouteName>;
}

export type Routes = RootRoutes &
  AuthenticationRoutes &
  TwoFactorConfigurationRoutes &
  HomeRoutes &
  MarketWatchRoutes &
  SettingsRoutes &
  DashboardRoutes &
  StackedWalletRoutes;

export type RootRoutes = {
  ExplainerSeries: undefined;
  Authentication: {
    screen: string;
  };
  CognitoStack: undefined;
  CognitoFailure: undefined;
  CloseManagedPortfolio: undefined;
  CloseManagedPortfolioSuccess: {
    selectedCoin: string;
    walletAddress: string;
    transactionId: string;
  };
  CustomerService: undefined;
  SuccessSubmission: undefined;
  Home: { screen?: string; params?: any };
  StackedWallet: { screen?: string; params?: any };
  Settings: undefined;
  News: {
    location: string;
  };
  NewsDetail: {
    url: string;
  };
  EmailConfirmation: {
    title: string;
    subtitle: string;
  };
  TwoFactorConfiguration: {
    screen: string;
  };
  NotAvailableLocationModal: {
    location: string;
  };
  QrCodeScanner: {
    eventName: string;
  };
  TwoFactorVerification: {
    screenToNavigate: any;
    screenToNavigateParams?: any;
  };
  UserAgreement: undefined;
  ClosePortfolioConversion: {
    walletAddress: string;
    selectedCoin: string;
  };
  ManagedPortfolio: undefined;
  Alerts: {
    alerts: Alert[];
  };
  Gem: {
    asset: string;
    flow: GemFlowInitator;
    amount?: number;
    locked?: boolean;
  };
  Coinbase: {
    amount?: number;
  };
  WithdrawSuccess: {
    value: number;
    coin: string;
    walletKey?: string;
    transactionId: string;
  };
  SimpleSwapConfirmation: {
    coinFrom: string;
    amountFrom: number;
    coinTo: string;
    amountTo: number;
    swapTitle: string;
  };
  SwapFinalStatus: {
    hasError?: boolean;
    swapTitle?: string;
  };
  MultipleSwapConfirmation: {
    assetsList: AssetVariation[];
    swapTitle: string;
  };
  SwapManyToOne: undefined;
  SwapOneToMany: undefined;
  ChooseInvestment: {
    amountToInvest: number;
    isFunding?: boolean;
  };
  Riskalyze: {
    url: string;
    isRetakingAssessment?: boolean;
  };
  Cognito: {
    url: string;
  };
};

export type AuthenticationRoutes = {
  SignIn: undefined;
  SignUp: undefined;
};

export type TwoFactorConfigurationRoutes = {
  TwoFactorConfigurationBlock: undefined;
  TwoFactorConfigurationCode: undefined;
  TwoFactorConfigurationPrompt: {
    isBlocked: boolean;
  };
  TwoFactorConfigurationRecovery: undefined;
  TwoFactorConfigurationSetup: undefined;
  TwoFactorConfigurationQr: {
    email: string;
    authCode: string;
  };
};

export type HomeRoutes = {
  Dashboard: undefined;
  PreQualification: undefined;
  Market: undefined;
  Exchanges: undefined;
  Settings: undefined;
  StackDetails: {
    title: string;
  };
  Wallet: undefined;
};

export type MarketWatchRoutes = {
  MarketWatchHome: undefined;
  MarketWatchDetail: {
    name: string;
    symbol: string;
  };
};

export type SettingsRoutes = {
  Profile: undefined;
  ChangePassword: undefined;
  About: undefined;
  TermsAndConditions: undefined;
  Feedback: undefined;
  Debug: undefined;
};

export type DashboardRoutes = {
  AssetsArea: undefined;
  DashboardScreen: {
    newPortfolioToReview?: {
      initialInvestment: number;
      defaultRisk: number;
      newRisk: number;
    };
    newRealocatedPortfolio?: {
      defaultRisk: number;
      newRisk: number;
    };
  };
  ManagedPortfolio: undefined;
  ManagedPortfolioDetails: {
    title: string;
    details: CoinStackDetails[] | assetsDetails[];
    totalAmount: string;
    portfolioChange: number;
    accrualPercentage: number;
    lineColor: PaletteColor;
    isAssetsPortfolio: boolean;
    useInternalGrid: boolean;
  };
  StableCoinsDetails: {
    coinStack: CoinStackData;
  };
  ManagedAssetsDetails: {
    coinStack: CoinStackData;
  };
  IndividualCoinsDetails: {
    coinStack: CoinStackData;
  };
  ManagedPortfolioSuccess: {
    initialInvestment: number;
    defaultRisk: number;
    isReassessment?: boolean;
    newRisk?: number;
  };
  PortfolioCryptoDeposit: {
    initialInvestment: number;
    isFunding?: boolean;
  };
  TransactionStatus: {
    riskAmount: number;
    fiatAmount: number;
    transactionType: TRANSACTIONS_TYPES;
    coinAmount: number;
    flow: UserPortfolioFlow;
    status: TRANSACTION_STATUS;
    paymentMethod: PAYMENT_METHOD;
    date: string;
    transactions: Array<Transaction>;
  };
  ManagedPortfolioLoading: undefined;
};

export type StackedWalletRoutes = {
  StackedWalletScreen: undefined;
  SimpleSwap: {
    selectedCoin?: Asset;
  };
  WalletAddress: undefined;
  Withdraw: {
    selectedCoin?: Asset;
  };
  WithdrawConfirmation: {
    coinSymbol: string;
    amount: number;
    walletAddress: string;
  };
  SimpleSwapConfirmation: {
    coinFrom: string;
    amountFrom: number;
    coinTo: string;
    amountTo: number;
    swapTitle: string;
  };
  SwapFinalStatus: {
    hasError?: boolean;
    swapTitle?: string;
  };
  MultipleSwapConfirmation: {
    assetsList: AssetVariation[];
    swapTitle: string;
  };
  SwapInProgress: {
    resetNavigationParam: Array<any>;
    assetsList: AssetVariation[];
    swapTitle: string;
  };
};
