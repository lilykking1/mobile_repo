import React, { FC } from 'react';
import { View } from 'react-native';

import { Background, Quantity, Typography } from '@app/components';
import { DOLLAR_CHAR } from '@app/screens/PortfolioCryptoDeposit/contants';
import { palette } from '@app/theme';

import { getPrecisionValue } from '../../utils';
import CopyButton from '../CopyButton';

import { getLabelFromCoinType } from './utils';
import styles, { BACKGROUND_COLOR } from './styles';

interface CoinDataBoxProps {
  initialInvestment: number;
  coinAmount: number;
  coinAmountPrefix: string;
  showFiatAmount: boolean;
  showIconButton: boolean;
  handlePressCopyButton: () => void;
}

const CoinDataBox: FC<CoinDataBoxProps> = ({
  initialInvestment,
  coinAmount,
  coinAmountPrefix,
  showFiatAmount = true,
  showIconButton = true,
  handlePressCopyButton,
}) => (
  <Background
    altLight={BACKGROUND_COLOR}
    altDark={palette.royalBlue[400]}
    style={styles.container}
  >
    <View>
      <View style={styles.titleContainer}>
        <Typography style={styles.title} variant="white" size="body1">
          {getLabelFromCoinType(showFiatAmount)}
        </Typography>
      </View>

      <View style={styles.amountContainer}>
        <Quantity
          value={coinAmount}
          prefix={`${coinAmountPrefix} `}
          variant="white"
          size="h2"
          precision={getPrecisionValue(coinAmount)}
          strong
        />
      </View>

      <View style={styles.fiatAmountContainer}>
        {showFiatAmount && (
          <Quantity
            style={styles.fiatAmount}
            value={initialInvestment}
            prefix={DOLLAR_CHAR}
            variant="white"
            size="buttons"
            strong
          />
        )}
      </View>
    </View>

    <View>
      {showIconButton && (
        <CopyButton altDark={palette.white} onCopy={handlePressCopyButton} />
      )}
    </View>
  </Background>
);
export default CoinDataBox;
