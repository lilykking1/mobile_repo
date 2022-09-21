import React, { FC, useContext, useMemo } from 'react';
import { observer } from 'mobx-react';
import { RootContext } from '@app/state';
import { View, ViewStyle } from 'react-native';

import { getBackgroundColor } from './utils';
import { styles } from './styles';

interface DividerProps {
  altLight?: string;
  altDark?: string;
  style?: ViewStyle | ViewStyle[];
}

const Divider: FC<DividerProps> = ({ altLight, altDark, style }) => {
  const {
    settingsStore: { theme },
  } = useContext(RootContext);

  const customStyle = useMemo(
    () => [
      {
        backgroundColor: getBackgroundColor(theme, altLight, altDark),
      },
      styles.base,
      style,
    ],
    [theme, style, altLight, altDark]
  );

  return <View style={customStyle} />;
};

export default observer(Divider);
