import React, { FC } from 'react';
import { View } from 'react-native';

import { CoinIcon, Typography } from '@app/components';
import { translate } from '@app/i18n';

import LottieView from 'lottie-react-native';
import { SwapLoadingAnimation } from '@app/assets/animations';
import styles from './styles';
import AmountText from '../AmountText';
import { getCoinIconStyle, getContainerCoinsStyle } from './utils';
import { COINS_PER_COLUMN, ICON_SIZE } from './constants';

interface CoinsRowProps {
  coinsLeft: Array<string>;
  coinsRight: Array<string>;
  amountFrom?: number;
  amountTo?: number;
}

const CoinsRow: FC<CoinsRowProps> = ({
  coinsLeft,
  coinsRight,
  amountFrom,
  amountTo,
}) => {
  const RenderCoins = (coins) => {
    let row = -1;
    const coinsLength = coins.length;

    const CoinsIcon = coins.map((coin, index) => {
      if (index % COINS_PER_COLUMN === 0) {
        row += 1;
      }

      return (
        <CoinIcon
          key={coin}
          style={getCoinIconStyle(index, row)}
          coin={coin}
          size={ICON_SIZE}
        />
      );
    });

    return (
      <View style={getContainerCoinsStyle(row, coinsLength)}>{CoinsIcon}</View>
    );
  };

  return (
    <>
      <View style={styles.container}>
        {RenderCoins(coinsLeft)}

        <View style={styles.containerLottieView}>
          <LottieView
            autoPlay
            loop
            source={SwapLoadingAnimation}
            style={styles.lottieView}
          />
        </View>

        {RenderCoins(coinsRight)}
      </View>

      <Typography size="h4" style={styles.message}>
        <AmountText coins={coinsLeft} amount={amountFrom} />
        {translate('swap.inProgress.into')}
        <AmountText coins={coinsRight} amount={amountTo} />
      </Typography>

      <Typography variant="grey.600" size="body1" style={styles.description}>
        {translate('swap.inProgress.description')}
      </Typography>
    </>
  );
};

export default CoinsRow;
