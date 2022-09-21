import { observer } from 'mobx-react';
import React, { useCallback, FC, useState, useMemo, useContext } from 'react';

import { RootContext } from '@app/state';

import IconButton from '../IconButton';

import { getButtonIcon, getButtonStyles } from './utils';
import styles from './styles';

interface SecretValuesButtonProps {
  onPress: () => void;
}

const SecretValuesButton: FC<SecretValuesButtonProps> = ({ onPress }) => {
  const {
    settingsStore: { theme },
  } = useContext(RootContext);

  const [isPressed, setIsPressed] = useState(false);

  const handleOnPress = useCallback(() => {
    onPress();
    setIsPressed((currentValue) => !currentValue);
  }, [onPress]);

  const icon = useMemo(() => getButtonIcon(isPressed, theme), [
    isPressed,
    theme,
  ]);

  const actionStyle = useMemo(() => getButtonStyles(isPressed), [isPressed]);

  return (
    <IconButton
      size="small"
      startIcon={icon}
      containerStyle={[styles.base, actionStyle]}
      onPress={handleOnPress}
    />
  );
};

export default observer(SecretValuesButton);
