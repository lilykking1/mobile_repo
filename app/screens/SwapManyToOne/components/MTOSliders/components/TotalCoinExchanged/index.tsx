import React, { FC, memo } from 'react';
import { View } from 'react-native';

import { CoinIcon, Spinner, Typography } from '@app/components';
import styles from './styles';

interface TotalCoinExchangedProps {
  coin: string;
  isLoading: boolean;
  selectedToCoinQuantity: string;
}

const TotalCoinExchanged: FC<TotalCoinExchangedProps> = ({
  coin,
  isLoading,
  selectedToCoinQuantity,
}) => {
  const renderLoading = () => (
    <View>
      <Typography style={styles.typographyWhenLoading} size="h4" strong>
        {selectedToCoinQuantity}
      </Typography>
      <Spinner style={styles.spinner} size="large" />
    </View>
  );

  const renderValue = () =>
    isLoading ? (
      renderLoading()
    ) : (
      <Typography size="h4" strong>
        {selectedToCoinQuantity}
      </Typography>
    );

  return (
    <View style={styles.containerSwapToCoin}>
      <View style={styles.containerSwapToCoinName}>
        <CoinIcon coin={coin} size={24} />
        <Typography style={styles.swapToCoinName} size="h6" strong>
          {coin}
        </Typography>
      </View>

      {renderValue()}
    </View>
  );
};

export default memo(TotalCoinExchanged);
