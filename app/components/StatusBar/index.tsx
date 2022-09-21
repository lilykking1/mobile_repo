import React, { useContext, useMemo } from 'react';
import { StatusBar as NativeStatusBar } from 'react-native';
import { observer } from 'mobx-react';
import { RootContext } from '@app/state';

import { getThemeStatusBar } from './utils';

const StatusBar = () => {
  const {
    settingsStore: { theme },
  } = useContext(RootContext);

  const barStyle = useMemo(() => getThemeStatusBar(theme), [theme]);

  return (
    <NativeStatusBar
      barStyle={barStyle}
      backgroundColor="transparent"
      translucent
      animated
    />
  );
};

export default observer(StatusBar);
