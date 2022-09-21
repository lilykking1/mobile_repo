import React, {
  forwardRef,
  ForwardRefRenderFunction,
  useCallback,
} from 'react';
import { View } from 'react-native';
import { BottomSheetModal as GorhomBottomSheetModal } from '@gorhom/bottom-sheet';
import { CoinBase, DebitOrBank, DirectFromWallet } from '@app/assets/images';
import { NavigationProp, useNavigation } from '@react-navigation/core';
import { Routes } from '@app/navigation/types';
import BottomSheetModal from '@app/components/BottomSheetModal';
import { PaymentMethodOption } from '@app/components';
import { translate } from '@app/i18n';
import { GemFlowInitator } from '@app/screens/Gem/types';

import styles from './styles';
import Header from './fragments';

export interface DepositMethodProps {
  onOptionSelect: () => void;
}

const SelectDepositMethod: ForwardRefRenderFunction<
  GorhomBottomSheetModal,
  DepositMethodProps
> = ({ onOptionSelect }, ref) => {
  const navigation = useNavigation<NavigationProp<Routes>>();

  const handleDebitBank = useCallback(() => {
    navigation.navigate('Gem', {
      flow: GemFlowInitator.ADD_FUNDS,
      asset: 'BTC',
      amount: 0.000403,
    });
    onOptionSelect();
  }, [navigation, onOptionSelect]);

  const handleDirectWallet = useCallback(() => {
    // TO-DO: Replace for final screen
    navigation.navigate('PortfolioCryptoDeposit', {
      initialInvestment: 3000,
      isFunding: false,
    });
    onOptionSelect();
  }, [navigation, onOptionSelect]);

  const handleCoinbase = useCallback(() => {
    navigation.navigate('Coinbase');
    onOptionSelect();
  }, [navigation, onOptionSelect]);

  return (
    <BottomSheetModal
      contentStyle={styles.content}
      snapToContent
      ref={ref}
      headerComponent={<Header />}
    >
      <View style={styles.content}>
        <PaymentMethodOption
          title={translate(
            'screens.chooseInvestment.paymentMethod.debitOrBank.title'
          )}
          description={translate(
            'screens.chooseInvestment.paymentMethod.debitOrBank.description'
          )}
          imageSource={DebitOrBank}
          onPress={handleDebitBank}
        />
        <PaymentMethodOption
          title={translate(
            'screens.chooseInvestment.paymentMethod.directFromWallet.title'
          )}
          description={translate(
            'screens.chooseInvestment.paymentMethod.directFromWallet.description'
          )}
          imageSource={DirectFromWallet}
          onPress={handleDirectWallet}
        />
        <PaymentMethodOption
          title={translate(
            'screens.chooseInvestment.paymentMethod.coinbase.title'
          )}
          description={translate(
            'screens.chooseInvestment.paymentMethod.coinbase.description'
          )}
          imageSource={CoinBase}
          onPress={handleCoinbase}
          isLastItem
        />
      </View>
    </BottomSheetModal>
  );
};

export default forwardRef(SelectDepositMethod);
