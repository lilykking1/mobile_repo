import React, { useMemo } from 'react';
import { getStorybookUI, configure } from '@storybook/react-native';
import { KeyboardAvoidingView, SafeAreaView, StatusBar } from 'react-native';

import { RootContext, RootStore } from '@app/state';

import { loadStories } from '../loader';
import styles from './styles';

declare let module;

configure(() => {
  loadStories();
}, module);

const StorybookUI = getStorybookUI({
  port: 9001,
  host: 'localhost',
  onDeviceUI: false,
  isUIHidden: true,
  shouldPersistSelection: false,
  asyncStorage:
    // eslint-disable-next-line global-require, @typescript-eslint/no-var-requires
    require('@react-native-async-storage/async-storage').default || null,
});

const StorybookUIRoot = () => {
  const rootStore = useMemo(() => new RootStore(), []);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <KeyboardAvoidingView style={styles.keyboard} keyboardVerticalOffset={50}>
        <RootContext.Provider value={rootStore}>
          <StorybookUI />
        </RootContext.Provider>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default StorybookUIRoot;
