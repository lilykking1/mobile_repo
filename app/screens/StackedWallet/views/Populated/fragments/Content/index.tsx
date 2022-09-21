import React, { FC } from 'react';
import { TouchableOpacity } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/core';

import { Background, Typography, TabViews } from '@app/components';
import { Routes } from '@app/navigation/types';
import { translate } from '@app/i18n';
import { Asset } from '@app/models';

import { TransactionsData } from '@app/models/Transactions';
import styles from './styles';
import { TokensList, TransactionsList } from './fragments';
import { OPACITY_ON_PRESS_VALUE } from './constants';

interface ContentProps {
  isValuesSecret: boolean;
  tokens: Asset[];
  transactions: TransactionsData[];
  suffixValue?: string;
  prefixValue?: string;
}

const Content: FC<ContentProps> = ({
  isValuesSecret,
  tokens,
  transactions,
  suffixValue,
  prefixValue,
}) => {
  const navigation = useNavigation<NavigationProp<Routes>>();

  const handlePressBuyCrypto = () => {
    navigation.navigate('Market');
  };

  const BuyCryptoButton = (
    <TouchableOpacity
      activeOpacity={OPACITY_ON_PRESS_VALUE}
      style={styles.buyCryptoButtonPosition}
      onPress={handlePressBuyCrypto}
    >
      <Background secondary style={styles.buyCryptoButton}>
        <Typography
          strong
          size="body2"
          variant="secondary.500"
          altDark="secondary.400"
        >
          {translate('screens.stackedWallet.populated.tabs.button')}
        </Typography>
      </Background>
    </TouchableOpacity>
  );

  return (
    <Background style={styles.content}>
      <TabViews.Container extraTabRowComponent={BuyCryptoButton}>
        <TabViews.Tab
          title={translate('screens.stackedWallet.populated.tabs.tokens')}
        >
          <TokensList
            tokens={tokens}
            isValuesSecret={isValuesSecret}
            suffixValue={suffixValue}
            prefixValue={prefixValue}
          />
        </TabViews.Tab>

        <TabViews.Tab
          title={translate('screens.stackedWallet.populated.tabs.transactions')}
        >
          <TransactionsList transactions={transactions} />
        </TabViews.Tab>
      </TabViews.Container>
    </Background>
  );
};

export default Content;
