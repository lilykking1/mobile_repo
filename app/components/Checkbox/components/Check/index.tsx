import React, { FC, useContext, useMemo } from 'react';
import { View } from 'react-native';
import { isFunction } from 'lodash';

import { Icon } from '@app/components';

import { RootContext } from '@app/state';
import { observer } from 'mobx-react';
import {
  getDisabledStyle,
  getErrorStyle,
  getIconTint,
  getStateStyle,
} from './utils';
import { BasicCheckProps, IconType } from './types';
import styles from './styles';

interface CheckProps extends BasicCheckProps {
  children?: IconType;
}

const Check: FC<CheckProps> = ({
  disabled,
  checked,
  touched,
  error,
  lineCheck,
  children,
}) => {
  const {
    settingsStore: { theme },
  } = useContext(RootContext);

  let content = children;

  if (!children) {
    content = lineCheck ? (
      <Icon.LineHorizontal tint={getIconTint(disabled, theme)} />
    ) : (
      <Icon.CheckSmall tint={getIconTint(disabled, theme)} />
    );
  }

  if (isFunction(children)) {
    content = children({ disabled, checked, touched, error });
  }

  const custom = useMemo(
    (): any => [
      styles.base,
      getStateStyle(checked, theme),
      getErrorStyle(checked, touched, error),
      getDisabledStyle(checked, disabled, theme),
    ],
    [checked, disabled, error, theme, touched]
  );

  return (
    <View style={custom}>
      {/* Only display the icon if checked */}
      {checked && content}
    </View>
  );
};

export default observer(Check);
