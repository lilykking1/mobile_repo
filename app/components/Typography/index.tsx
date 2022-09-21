import React, { FC, useMemo, useContext } from 'react';
import { StyleProp, Text, TextStyle } from 'react-native';
import { observer } from 'mobx-react';

import { RootContext } from '@app/state';

import { TextPropsAndColors, TypographySize, TypographyVariant } from './types';
import { getSizeStyle, getStrongStyle, getVariantStyle } from './utils';
import styles from './styles';

export interface TypographyProps extends TextPropsAndColors {
  variant?: TypographyVariant;
  size?: TypographySize;
  strong?: boolean;
  disabled?: boolean;
}

const Typography: FC<TypographyProps> = ({
  variant,
  size,
  style,
  strong,
  disabled,
  children,
  altLight,
  altDark,
  ...rest
}) => {
  const {
    settingsStore: { theme },
  } = useContext(RootContext);

  const custom = useMemo(
    () => [
      styles.base,
      getVariantStyle({ variant, theme, disabled, altLight, altDark }),
      getSizeStyle(size),
      getStrongStyle(strong),
      style,
    ],
    [variant, theme, disabled, altLight, altDark, size, strong, style]
  );

  return (
    <Text style={custom as StyleProp<TextStyle>} {...rest}>
      {children}
    </Text>
  );
};

export default observer(Typography);
