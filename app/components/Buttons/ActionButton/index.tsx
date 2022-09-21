import React, { FC, ReactNode, useContext, useMemo, useState } from 'react';
import { observer } from 'mobx-react';
import { isEmpty } from 'lodash';
import {
  Pressable,
  PressableProps,
  PressableStateCallbackType,
  View,
} from 'react-native';

import { Typography } from '@app/components';
import { RootContext } from '@app/state';

import { THREE_AND_HALF_SECONDS_IN_MS } from './constants';
import { ActionButtonSize } from './types';
import styles from './styles';
import {
  getButtonStyle,
  getColors,
  getContent,
  getIconWithRightColor,
  getLabelSize,
} from './utils';

interface ActionButtonProps extends PressableProps {
  icon: ReactNode;
  size: ActionButtonSize;
  label?: string;
  disabled?: boolean;
  disabledMessage?: string;
  fullWidth?: boolean;
}

const ActionButton: FC<ActionButtonProps> = ({
  disabled,
  disabledMessage,
  icon,
  label,
  size,
  onPress,
  style,
  fullWidth = false,
  ...rest
}) => {
  const {
    settingsStore: { theme },
  } = useContext(RootContext);

  const [isDisabledAndPressed, setIsDisabledAndPressed] = useState(false);

  const handlePressWhenDisabled = () => {
    setIsDisabledAndPressed(true);
    setTimeout(
      () => setIsDisabledAndPressed(false),
      THREE_AND_HALF_SECONDS_IN_MS
    );
  };

  const pressFunctionToUse = disabled ? handlePressWhenDisabled : onPress;

  const buttonStyle = useMemo(
    () => (state: PressableStateCallbackType) =>
      getButtonStyle({
        size,
        isPressed: state.pressed,
        isDisabled: disabled,
        fullWidth,
        style,
        theme,
      }),

    [disabled, fullWidth, size, style, theme]
  );
  const labelSize = useMemo(() => getLabelSize(size), [size]);

  const colorsToUse = useMemo(() => getColors(disabled)[theme], [
    disabled,
    theme,
  ]);
  const iconWithRightColor = useMemo(
    () => getIconWithRightColor(icon, colorsToUse.icon),
    [colorsToUse.icon, icon]
  );

  const iconContent = useMemo(
    () => <View style={styles.iconContainer}>{iconWithRightColor}</View>,
    [iconWithRightColor]
  );
  const labelContent = useMemo(
    () =>
      !isEmpty(label) && (
        <Typography
          size={labelSize}
          variant={colorsToUse.typography}
          style={styles.label}
        >
          {label}
        </Typography>
      ),
    [colorsToUse.typography, label, labelSize]
  );
  const disabledMessageContent = useMemo(
    () =>
      !isEmpty(disabledMessage) && (
        <Typography
          size={labelSize}
          variant={colorsToUse.typography}
          style={styles.message}
        >
          {disabledMessage}
        </Typography>
      ),
    [colorsToUse.typography, disabledMessage, labelSize]
  );

  const content = useMemo(
    () =>
      getContent({
        isDisabled: disabled,
        isPressed: isDisabledAndPressed,
        iconContent,
        labelContent,
        disabledMessageContent,
      }),
    [
      disabled,
      disabledMessageContent,
      iconContent,
      isDisabledAndPressed,
      labelContent,
    ]
  );

  return (
    <Pressable style={buttonStyle} onPress={pressFunctionToUse} {...rest}>
      {content}
    </Pressable>
  );
};

export default observer(ActionButton);
