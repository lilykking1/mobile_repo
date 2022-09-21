import React, { FC, useMemo, useState } from 'react';
import { View } from 'react-native';
import {
  Button,
  Card,
  Quantity,
  Typography,
  WaitingIndicator,
} from '@app/components';
import { translate } from '@app/i18n';
import { getCoinProperties } from '@app/models';
import { Theme } from '@app/state/stores/settings/types';
import { convertFiatAmountToBitcoin } from '@app/utils/coins';
import styles from './styles';
import { getCardColor } from './utils';
import { coinCharacter } from '../ConvertedCoinDetails/constants';
import { COINS_OPTIONS_DATA } from '../../constants';

interface ConversionCardProps {
  fiatAmount: string;
  convertTo: string;
  wallet: string;
  countdown: number;
  onCancel: () => void;
  onConfirm: () => void;
  theme: Theme;
}

const ConversionCard: FC<ConversionCardProps> = ({
  fiatAmount,
  convertTo,
  wallet,
  countdown,
  onCancel,
  onConfirm,
  theme,
}) => {
  const [showConfirmButton, setShowConfirmButton] = useState(false);

  const selectedCoin = useMemo(() => getCoinProperties(convertTo), [convertTo]);
  const coinAmount = useMemo(() => {
    if (convertTo.toLowerCase() === COINS_OPTIONS_DATA.usdc.id) {
      return fiatAmount;
    }
    return convertFiatAmountToBitcoin(Number(fiatAmount)).toFixed(3);
  }, [convertTo, fiatAmount]);

  const customWalletCardStyles = useMemo(
    () => [styles.walletCard, getCardColor(theme)],
    [theme]
  );

  const handleFinishCountdown = () => {
    setShowConfirmButton(true);
  };

  const RenderAmountContainer = (
    <View style={styles.amountContainer}>
      <Quantity
        strong
        useValueLabel
        valueLabelVariant="large"
        style={styles.fiatAmount}
        prefix="$"
        value={fiatAmount}
      />
      <View style={styles.coinAmountContainer}>
        <Typography
          strong
          variant="grey.600"
          size="buttons"
          style={styles.coinAmount}
        >
          {coinCharacter[convertTo.toUpperCase()]}
          {coinAmount}
        </Typography>
      </View>
    </View>
  );

  const RenderConfirmButton = (
    <View style={styles.confirmButtonContainer}>
      <Button
        labelCustomStyle={styles.buttonLabel}
        variant="red"
        label={translate(
          'screens.closePortfolioConversion.confirmAndTransferButtonLabel'
        )}
        onPress={onConfirm}
      />
    </View>
  );

  const RenderWaitingIndicator = (
    <View style={styles.waitingContainer}>
      <WaitingIndicator
        onCountdownFinish={handleFinishCountdown}
        countdown={countdown}
      />
    </View>
  );

  return (
    <Card style={styles.card} size="xlarge">
      <Typography style={styles.amountText} size="h6" strong>
        {translate('screens.closePortfolioConversion.conversionCardTitle')}
      </Typography>
      {RenderAmountContainer}
      <Typography variant="grey.600" size="body1">
        {translate('screens.closePortfolioConversion.withdrawingTo')}
      </Typography>
      <Card style={customWalletCardStyles}>
        <Typography size="buttons" altDark="white" style={styles.walletText}>
          {wallet}
        </Typography>
        <Typography
          size="body2"
          strong
          variant="grey.600"
          style={styles.walletTypeText}
        >
          {`${selectedCoin.name} (${convertTo.toUpperCase()})`}
        </Typography>
      </Card>
      {showConfirmButton ? RenderConfirmButton : RenderWaitingIndicator}
      <Button
        labelCustomStyle={styles.buttonLabel}
        variant="secondary"
        label={translate(
          'screens.closePortfolioConversion.cancelClosingButtonLabel'
        )}
        onPress={onCancel}
      />
    </Card>
  );
};

export default ConversionCard;
