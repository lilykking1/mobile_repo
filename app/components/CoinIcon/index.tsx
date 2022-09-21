import React, { FC, memo, useMemo } from 'react';

import Coin from '@app/assets/crypto-icons';
import { coinSymbolFormatCheck } from '@app/utils/coinIcons';

import { View } from 'react-native';
import {
  getContainerBorderWidth,
  getContainerSize,
  getIconSize,
} from './utils';
import { CoinIconProps } from './types';
import styles from './styles';

const CoinIcon: FC<CoinIconProps> = ({
  coin,
  size,
  isOutlined = false,
  style,
}) => {
  const iconSize = useMemo(() => getIconSize(size), [size]);
  const containerStyle = useMemo(
    () => [
      styles.container,
      {
        borderRadius: iconSize,
        borderWidth: getContainerBorderWidth(isOutlined),
        width: getContainerSize(iconSize, isOutlined),
        height: getContainerSize(iconSize, isOutlined),
      },
      style,
    ],
    [isOutlined, iconSize, style]
  );

  const content = useMemo(() => {
    const genericCoinIcon = <Coin.GENERIC width={iconSize} height={iconSize} />;
    const coinSymbolCheck = coinSymbolFormatCheck(coin);

    if (!coinSymbolCheck) {
      return genericCoinIcon;
    }

    const CoinIconSvg = Coin[coinSymbolCheck];
    return CoinIconSvg ? (
      <CoinIconSvg width={iconSize} height={iconSize} />
    ) : (
      genericCoinIcon
    );
  }, [coin, iconSize]);

  return <View style={containerStyle}>{content}</View>;
};

export default memo<typeof CoinIcon>(CoinIcon);
