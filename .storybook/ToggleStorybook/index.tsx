import React, { useState, useEffect } from 'react';
import { DevSettings } from 'react-native';
import Storage from '@app/utils/Storage';

/**
 * Toggle Storybook mode, in __DEV__ mode only.
 *
 * In non-__DEV__ mode, or when Storybook isn't toggled on,
 * renders its children.
 *
 * The mode flag is persisted in async storage, which means it
 * persists across reloads/restarts - this is handy when developing
 * new components in Storybook.
 */
const ToggleStorybook = ({ children }) => {
  const [showStorybook, setShowStorybook] = useState(false);
  const [StorybookUIRoot, setStorybookUIRoot] = useState(null);

  useEffect(() => {
    if (__DEV__ && DevSettings) {
      // Load the setting from storage if it's there
      Storage.loadString('devStorybook').then((storedSetting) => {
        // Set the initial value
        setShowStorybook(storedSetting === 'on');

        // Add our toggle command to the menu
        DevSettings.addMenuItem('Toggle Storybook', () => {
          setShowStorybook((show) => {
            // On toggle, flip the current value
            // Write it back to storage
            Storage.saveString('devStorybook', !show ? 'on' : 'off');

            // Return it to change the local state
            return !show;
          });
        });

        // Load the storybook UI once
        // eslint-disable-next-line global-require, @typescript-eslint/no-var-requires
        setStorybookUIRoot(() => require('../StorybookUIRoot').default);
      });
    }
  }, []);

  if (showStorybook && StorybookUIRoot) {
    return <StorybookUIRoot />;
  }

  return children;
};

export default ToggleStorybook;
