/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-one-expression-per-line */
import React, { FC, useContext, useMemo } from 'react';
import { View, TextStyle, ViewProps } from 'react-native';
import { take, size as lodashSize } from 'lodash';
import { observer } from 'mobx-react';

import { DEFAULT_COIN_SIZE } from '@app/components/CoinStack/constants';
import { getTextVariant } from '@app/components/CoinStack/utils';
import { Typography, Background } from '@app/components';
import { palette } from '@app/theme';
import { RootContext } from '@app/state';
import { getElementsPosition } from '@app/utils/roundElementPosition';

import FilledCoin from '../Coin';
import styles from './styles';

export interface CoinStackProps extends ViewProps {
  coins: string[];
  size?: number;
  max: number;
  textStyles?: TextStyle;
}

const CoinStack: FC<CoinStackProps> = ({
  coins,
  size = DEFAULT_COIN_SIZE,
  max,
  textStyles,
  ...rest
}) => {
  const {
    settingsStore: { theme },
  } = useContext(RootContext);

  const coinsLength = lodashSize(coins);
  const isOverMax = coinsLength > max;
  const remainingCoins = coinsLength - max;

  // text styles for the remaining number on populated state
  const textStyle = useMemo(() => [styles.remainingText, textStyles], [
    textStyles,
  ]);
  const textVariant = getTextVariant(theme === 'dark');

  const remainCoinStyle = useMemo(
    () => [
      styles.remainingCoin,
      { height: size, width: size },
      getElementsPosition(max + 1, size, coinsLength),
    ],
    [max, size, coinsLength]
  );

  return (
    <View style={styles.row} {...rest}>
      {take(coins, max).map((coin, i: number) => (
        <FilledCoin
          key={`${coin}-${i}`}
          coin={coin}
          size={size}
          index={i}
          arrayLength={coins.length}
        />
      ))}
      {isOverMax && (
        <Background
          altLight={palette.grey[300]}
          altDark={palette.grey[600]}
          style={remainCoinStyle}
        >
          <Typography style={textStyle} size="body2" variant={textVariant}>
            +{remainingCoins}
          </Typography>
        </Background>
      )}
    </View>
  );
};

export default observer(CoinStack);
