import React, { FC, useCallback, useMemo } from 'react';
import { View } from 'react-native';
import Animated from 'react-native-reanimated';

import {
  Icon,
  IconButton,
  Quantity,
  SecretValuesButton,
  StickyHeader,
  ToggleIcons,
} from '@app/components';
import CryptoValueLabel from '@app/components/CryptoValueLabel';

import { palette } from '@app/theme';
import styles from './styles';

interface FixedHeaderProps {
  onPressQRCodeAction: () => void;
  onPressSecretAction: React.Dispatch<React.SetStateAction<boolean>>;
  onPressToggleCurrency: React.Dispatch<React.SetStateAction<boolean>>;
  isValuesSecret: boolean;
  isValuesInBitcoin: boolean;
  scrollYValue: Animated.SharedValue<number>;
  prefixValues?: string;
  suffixValues?: string;
  walletValue?: number;
}

const FixedHeader: FC<FixedHeaderProps> = ({
  onPressSecretAction,
  onPressToggleCurrency,
  onPressQRCodeAction,
  isValuesSecret,
  isValuesInBitcoin,
  scrollYValue,
  prefixValues,
  suffixValues,
  walletValue,
}) => {
  const handlePressSecretAction = useCallback(() => {
    onPressSecretAction(!isValuesSecret);
  }, [isValuesSecret, onPressSecretAction]);

  const handlePressToggleCurrencyAction = useCallback(() => {
    onPressToggleCurrency(!isValuesInBitcoin);
  }, [isValuesInBitcoin, onPressToggleCurrency]);

  const valueDisplayed = useMemo(() => {
    if (isValuesInBitcoin) {
      return (
        <CryptoValueLabel
          isSecret={isValuesSecret}
          value={walletValue}
          variant="normal"
          coinSuffix={suffixValues}
        />
      );
    }

    return (
      <Quantity
        isSecret={isValuesSecret}
        strong
        useValueLabel
        valueLabelVariant="normal"
        prefix={prefixValues}
        suffix={suffixValues}
        value={walletValue}
      />
    );
  }, [
    isValuesInBitcoin,
    isValuesSecret,
    walletValue,
    prefixValues,
    suffixValues,
  ]);

  const QrCodeIcon = <Icon.QrCode tint={palette.grey[600]} />;

  const Right = (
    <View style={styles.actionsRow}>
      <SecretValuesButton onPress={handlePressSecretAction} />
      <IconButton
        onPress={onPressQRCodeAction}
        startIcon={QrCodeIcon}
        size="small"
        containerStyle={styles.button}
      />
    </View>
  );

  const Left = (
    <View style={styles.toggleRow}>
      <ToggleIcons
        leftIcon={<Icon.Dollar />}
        rightIcon={<Icon.Bitcoin />}
        variant="default"
        onChange={handlePressToggleCurrencyAction}
        checked={isValuesInBitcoin}
      />
    </View>
  );

  return (
    <StickyHeader
      scroll={scrollYValue}
      CollapsedTitle={valueDisplayed}
      Right={Right}
      Left={Left}
      secondaryBackground
    />
  );
};

export default FixedHeader;
