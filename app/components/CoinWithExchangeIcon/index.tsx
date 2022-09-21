import React, { FC, useMemo } from 'react';
import { View, ViewProps } from 'react-native';
import { CoinIcon, ExchangeIcon } from '@app/components';
import { EXCHANGES, WALLETS } from '@app/models';
import {
  getDimensionContainerIcon,
  getDimensionIcon,
  getDistanceContainerIcon,
} from '@app/components/CoinWithExchangeIcon/utils';
import styles from './styles';

interface CoinWithExchangeIconProps extends ViewProps {
  coin: string;
  exchange: EXCHANGES | WALLETS;
  size: number;
}

const CoinWithExchangeIcon: FC<CoinWithExchangeIconProps> = ({
  coin,
  exchange,
  size,
}) => {
  const dimensionIcon = getDimensionIcon(size);

  const styleContainerExchange = useMemo(() => {
    const dimensionContainerIcon = getDimensionContainerIcon(size);
    const distanceContainerIcon = getDistanceContainerIcon(size);

    return {
      ...styles.exchangeContainer,
      borderRadius: size,
      height: dimensionContainerIcon,
      width: dimensionContainerIcon,
      bottom: distanceContainerIcon,
      right: distanceContainerIcon,
    };
  }, [size]);

  return (
    <View>
      <CoinIcon coin={coin} size={size} />
      <View style={styleContainerExchange}>
        <ExchangeIcon
          exchange={exchange}
          height={dimensionIcon}
          width={dimensionIcon}
        />
      </View>
    </View>
  );
};

export default CoinWithExchangeIcon;
