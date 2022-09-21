import React, { FC, useMemo, useContext } from 'react';
import { View, ViewProps } from 'react-native';
import { observer } from 'mobx-react';

import { RootContext } from '@app/state';

import { styles } from './styles';
import { CardSize, CardVariant } from './types';
import {
  getVariantStyle,
  getSizeStyle,
  getOutlineStyle,
  getBaseStyle,
} from './utils';

interface CardProps extends ViewProps {
  outline?: boolean;
  highlight?: boolean;
  usePadding?: boolean;
  size?: CardSize;
  variant?: CardVariant;
}

const Card: FC<CardProps> = ({
  children,
  style,
  usePadding = true,
  outline,
  highlight,
  size,
  variant,
  ...rest
}) => {
  // use the root context managed by mobx
  const {
    settingsStore: { theme },
  } = useContext(RootContext);

  const custom = useMemo(
    () => [
      getBaseStyle(usePadding),
      getVariantStyle(variant, theme),
      getSizeStyle(size),
      getOutlineStyle(variant, outline),
      highlight && styles.highlight,
      style,
    ],
    [style, outline, variant, highlight, size, usePadding, theme]
  );

  return (
    <View style={custom} {...rest}>
      {children}
    </View>
  );
};

export default observer(Card);
