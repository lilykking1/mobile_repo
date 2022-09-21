import React, { FC } from 'react';
import { View, ViewProps } from 'react-native';

import { EXCHANGES, WALLETS } from '@app/models';
import { getExchangeIcon } from '@app/components/ExchangeIcon/utils';
import { PaletteColor } from '@app/theme';

interface ExchangeIconProps extends ViewProps {
  exchange: EXCHANGES | WALLETS;
  tint?: PaletteColor;
  width?: number;
  height?: number;
}

const ExchangeIcon: FC<ExchangeIconProps> = ({
  exchange,
  tint,
  width,
  height,
  ...rest
}) => {
  const Icon = getExchangeIcon(exchange);

  if (Icon === null) {
    return null;
  }

  return (
    <View {...rest}>
      <Icon tint={tint} width={width} height={height} />
    </View>
  );
};

export default ExchangeIcon;
