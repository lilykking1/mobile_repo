import React, { FC, useContext, useState } from 'react';
import { View } from 'react-native';
import { isUndefined, noop } from 'lodash';
import { observer } from 'mobx-react';

import { RootContext } from '@app/state';

import { getViews, getTabs, getCurrentView } from './utils';
import styles from './styles';

interface ContainerProps {
  extraTabRowComponent?: React.ReactNode;
  extraActionOnChangeTab?: () => void;
}

const Container: FC<ContainerProps> = ({
  children,
  extraTabRowComponent,
  extraActionOnChangeTab = noop,
}) => {
  const {
    settingsStore: { theme },
  } = useContext(RootContext);

  const [currentViewIndex, setCurrentViewIndex] = useState(0);

  const views = getViews(children);

  const handleChangeTab = (index: number) => {
    setCurrentViewIndex(index);

    if (!isUndefined(extraActionOnChangeTab)) {
      extraActionOnChangeTab();
    }
  };

  const Tabs = getTabs({
    views,
    currentViewIndex,
    handleChangeTab,
    isDarkTheme: theme === 'dark',
  });

  const CurrentView = getCurrentView(views, currentViewIndex);

  return (
    <View style={styles.container}>
      <View style={styles.tabsRow}>
        {Tabs}
        {!isUndefined(extraTabRowComponent) && extraTabRowComponent}
      </View>

      <View style={styles.content}>{CurrentView}</View>
    </View>
  );
};

export default observer(Container);
