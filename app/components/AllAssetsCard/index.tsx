import React, { FC, useContext } from 'react';
import { TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { isEmpty } from 'lodash';
import { observer } from 'mobx-react';

import { CoinStack, Typography, Quantity, Background } from '@app/components';
import { translate } from '@app/i18n';
import { RootContext } from '@app/state';

import styles from './styles';
import { getBorderStyle } from './utils';

interface AllAssetsCardProps extends TouchableOpacityProps {
  assets: string[];
  amount: string;
  isSecret?: boolean;
}

const AllAssetsCard: FC<AllAssetsCardProps> = ({
  assets,
  amount,
  isSecret = false,
  ...rest
}) => {
  const {
    settingsStore: { theme },
  } = useContext(RootContext);

  const isDarkTheme = theme === 'dark';
  const borderStyle = getBorderStyle(isDarkTheme);

  const coinIcons = isEmpty(assets) ? (
    <CoinStack.Empty />
  ) : (
    <CoinStack.Filled coins={assets} max={5} />
  );

  return (
    <TouchableOpacity activeOpacity={0.65} {...rest}>
      <Background secondary style={[styles.container, borderStyle]}>
        {coinIcons}
        <Typography size="h6" strong numberOfLines={1} style={styles.label}>
          {translate('screens.dashboard.exchangeCards.allAssets')}
        </Typography>
        <Quantity
          size="body1"
          strong={false}
          value={amount}
          prefix="$"
          isSecret={isSecret}
        />
      </Background>
    </TouchableOpacity>
  );
};

export default observer(AllAssetsCard);
