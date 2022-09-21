import React, { ReactElement } from 'react';
import { translate } from '@app/i18n';
import { CoinIcon } from '@app/components';
import { IconProps } from '@app/components/Icon/types';

interface NetworkAddressSelected {
  icon: ReactElement<IconProps>;
  text: string;
}

export const networkAddressSelected = (
  selectedOption: string
): NetworkAddressSelected => {
  switch (selectedOption) {
    case translate('modals.selectNetwork.menuOptions.ethMainnet'):
      return {
        icon: <CoinIcon coin="ETH" size={20} />,
        text: 'ETH',
      };
    case translate('modals.selectNetwork.menuOptions.btcNetwork'):
      return {
        icon: <CoinIcon coin="BTC" size={20} />,
        text: 'BTC',
      };
    case translate('modals.selectNetwork.menuOptions.binanceSmartChain'):
      return {
        icon: <CoinIcon coin="BNB" size={20} />,
        text: 'BNB',
      };
    default:
      return {
        icon: <CoinIcon coin="ETH" size={20} />,
        text: 'ETH',
      };
  }
};
