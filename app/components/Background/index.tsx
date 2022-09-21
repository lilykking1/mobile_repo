import React, { FC, useContext, useMemo } from 'react';
import { View, ViewStyle } from 'react-native';
import { observer } from 'mobx-react';

import { RootContext } from '@app/state';

import { getStyles } from './utils';
import { ViewPropsAndColors } from './types';

interface BackgroundProps extends ViewPropsAndColors {
  style?: ViewStyle | ViewStyle[];
  secondary?: boolean;
}

const Background: FC<BackgroundProps> = ({
  children,
  secondary = false,
  style,
  altLight,
  altDark,
  ...rest
}) => {
  const {
    settingsStore: { theme },
  } = useContext(RootContext);

  const customStyles = useMemo(
    () =>
      getStyles({
        theme,
        secondary,
        customStyle: style,
        altLight,
        altDark,
      }),
    [altLight, secondary, style, theme, altDark]
  );

  return (
    <View style={customStyles} {...rest}>
      {children}
    </View>
  );
};

export default observer(Background);
