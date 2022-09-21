import React, {
  FC,
  useCallback,
  useContext,
  useMemo,
  useRef,
  useState,
} from 'react';
import { Alert, Keyboard, TouchableWithoutFeedback, View } from 'react-native';

import {
  Background,
  Button,
  PaymentMethodOption,
  SafeArea,
  StickyHeader,
  Typography,
} from '@app/components';
import type { RootRoutes, Routes } from '@app/navigation/types';
import { NavigationProp, useNavigation } from '@react-navigation/core';
import { observer } from 'mobx-react';
import { RootContext } from '@app/state';
import { translate } from '@app/i18n';
import { formatNumberToLocale } from '@app/utils/numbers';
import { CoinBase, DebitOrBank, DirectFromWallet } from '@app/assets/images';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { PaymentMethod } from '@app/components/PaymentMethodOption/types';
import { useKeyboardOffset, useBraze } from '@app/hooks';
import { BrazeBuildMyPortfolioEvents } from '@app/utils/braze/events';

import { palette } from '@app/theme';
import { FiatInputRefProps } from '@app/screens/ChooseInvestment/fragments/FiatInput';
import {
  AmplitudeManagedPortfolioEvents,
  logAmplitudeEvent,
} from '@app/utils/amplitude';

import styles from './styles';
import { removeStringCommas, useForm } from './utils';
import { FiatInput, ModalConfirmInvestment } from './fragments';
import { GemFlowInitator } from '../Gem/types';

interface ChooseInvestmentProps {
  route: {
    params: RootRoutes['ChooseInvestment'];
  };
}

const ChooseInvestment: FC<ChooseInvestmentProps> = ({ route }) => {
  const { logBrazeCustomEvent } = useBraze();
  const { amountToInvest, isFunding } = route.params;
  const fiatInputRef = useRef<FiatInputRefProps>(null);

  const [investmentValueText, setInvestmentValueText] = useState(
    formatNumberToLocale(amountToInvest).toString()
  );
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>(
    PaymentMethod.DEBIT_OR_BANK
  );
  const [isModalConfirmVisible, setModalConfirmVisible] = useState(false);

  const {
    settingsStore: { theme },
  } = useContext(RootContext);
  const insets = useSafeAreaInsets();

  const { setFieldValue, errors } = useForm({
    initialValues: {
      investmentValue: amountToInvest,
    },
    onSubmit: () => {
      Alert.alert('Investment Submitted');
    },
  });
  const { keyboardOffset } = useKeyboardOffset();

  const navigation = useNavigation<NavigationProp<Routes>>();
  const isDarkTheme = theme === 'dark';

  const isKeyboardOpen = useMemo(() => keyboardOffset > 0, [keyboardOffset]);

  const bottomContainerStyle = useMemo(
    () => [
      styles.bottomContainer,
      {
        paddingBottom: isKeyboardOpen ? keyboardOffset : insets.bottom,
      },
    ],
    [insets.bottom, isKeyboardOpen, keyboardOffset]
  );

  const handleBack = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  const requestCloseConfirmModal = useCallback(() => {
    setModalConfirmVisible(false);
  }, []);

  const requestOpenConfirmModal = useCallback(() => {
    setModalConfirmVisible(true);
  }, []);

  const investmentValue = useMemo(
    () => removeStringCommas(investmentValueText),
    [investmentValueText]
  );

  const handleChangeInvestmentValue = useCallback(
    (amountText: string) => {
      setInvestmentValueText(amountText);
      const investmentNewValue = Number(removeStringCommas(amountText));
      setFieldValue('investmentValue', investmentNewValue);
    },
    [setFieldValue]
  );

  const handleOnProceed = useCallback(() => {
    const fundingParams = {
      funding_method: paymentMethod,
    };
    logBrazeCustomEvent(
      BrazeBuildMyPortfolioEvents.CLICK_PROCEED_TO_FUNDING,
      fundingParams
    );
    logAmplitudeEvent(
      AmplitudeManagedPortfolioEvents.CLICK_FUND_PORTFOLIO_SELECT_OPTION,
      fundingParams
    );
    requestOpenConfirmModal();
  }, [logBrazeCustomEvent, paymentMethod, requestOpenConfirmModal]);

  const handleSelectPaymentMethod = useCallback(
    (selectedPaymentMethod: PaymentMethod) => {
      setPaymentMethod(selectedPaymentMethod);
    },
    []
  );

  const handleConfirmInvestment = useCallback(() => {
    // TODO: It should send the investmentValue to the next screen
    logBrazeCustomEvent(BrazeBuildMyPortfolioEvents.CLICK_FUND_CONFIRM_FUNDING);
    logAmplitudeEvent(AmplitudeManagedPortfolioEvents.CLICK_CONFIRM_FUNDING);
    switch (paymentMethod) {
      case PaymentMethod.DEBIT_OR_BANK:
        setModalConfirmVisible(false);
        navigation.navigate('Gem', {
          asset: 'BTC',
          flow: GemFlowInitator.ADD_FUNDS,
          amount: fiatInputRef?.current?.bitcoinAmountValue || 0,
        });
        break;
      case PaymentMethod.COINBASE:
        setModalConfirmVisible(false);
        navigation.navigate('Coinbase');
        break;
      case PaymentMethod.DIRECT_FROM_WALLET:
        setModalConfirmVisible(false);
        navigation.navigate('PortfolioCryptoDeposit', {
          initialInvestment: Number(investmentValue),
          isFunding,
        });
        break;
      default:
        break;
    }
  }, [
    investmentValue,
    isFunding,
    logBrazeCustomEvent,
    navigation,
    paymentMethod,
  ]);

  return (
    <>
      <SafeArea
        altDark={palette.royalBlue[1000]}
        altLight={palette.white}
        edges={['right', 'left', 'top']}
      >
        <StickyHeader
          handleBackPress={handleBack}
          secondaryBackground={!isDarkTheme}
        />

        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.content}>
            <Typography size="h6" strong>
              {translate('screens.chooseInvestment.title')}
            </Typography>
            <FiatInput
              ref={fiatInputRef}
              value={investmentValueText}
              onChangeText={handleChangeInvestmentValue}
              error={errors.investmentValue}
            />
          </View>
        </TouchableWithoutFeedback>

        <Background style={bottomContainerStyle} secondary={isDarkTheme}>
          <PaymentMethodOption
            title={translate(
              'screens.chooseInvestment.paymentMethod.debitOrBank.title'
            )}
            description={translate(
              'screens.chooseInvestment.paymentMethod.debitOrBank.description'
            )}
            imageSource={DebitOrBank}
            onPress={() => {
              handleSelectPaymentMethod(PaymentMethod.DEBIT_OR_BANK);
            }}
            selected={paymentMethod === PaymentMethod.DEBIT_OR_BANK}
            isKeyboardOpen={isKeyboardOpen}
          />
          <PaymentMethodOption
            title={translate(
              'screens.chooseInvestment.paymentMethod.directFromWallet.title'
            )}
            description={translate(
              'screens.chooseInvestment.paymentMethod.directFromWallet.description'
            )}
            imageSource={DirectFromWallet}
            onPress={() => {
              handleSelectPaymentMethod(PaymentMethod.DIRECT_FROM_WALLET);
            }}
            selected={paymentMethod === PaymentMethod.DIRECT_FROM_WALLET}
            isKeyboardOpen={isKeyboardOpen}
          />
          <PaymentMethodOption
            title={translate(
              'screens.chooseInvestment.paymentMethod.coinbase.title'
            )}
            description={translate(
              'screens.chooseInvestment.paymentMethod.coinbase.description'
            )}
            imageSource={CoinBase}
            onPress={() => {
              handleSelectPaymentMethod(PaymentMethod.COINBASE);
            }}
            selected={paymentMethod === PaymentMethod.COINBASE}
            isLastItem
            isKeyboardOpen={isKeyboardOpen}
          />
          <Button
            label={translate('screens.chooseInvestment.proceed')}
            onPress={handleOnProceed}
            variant="primary"
            disabled={!!errors.investmentValue}
            style={styles.proceedButton}
          />
        </Background>
      </SafeArea>
      <ModalConfirmInvestment
        visible={isModalConfirmVisible}
        onRequestClose={requestCloseConfirmModal}
        onConfirm={handleConfirmInvestment}
        depositValue={investmentValueText}
      />
    </>
  );
};

export default observer(ChooseInvestment);
