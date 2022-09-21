import React, { FC, useContext, useMemo } from 'react';
import { View, Pressable } from 'react-native';
import { observer } from 'mobx-react';
import { IconButton, Typography } from '@app/components';
import { RootContext } from '@app/state';
import styles from './styles';
import { getSeparatorStyle } from './utils';

interface ActionItemProps {
  Icon: React.ElementType;
  title: string;
  isLast?: boolean;
  disabled?: boolean;
  action: () => void;
}

const ListButton: FC<ActionItemProps> = ({
  Icon,
  title,
  isLast,
  disabled,
  action,
}) => {
  const {
    settingsStore: { theme },
  } = useContext(RootContext);

  const separatorStyle = useMemo(
    () => [styles.infoAction, !isLast && getSeparatorStyle(theme)],
    [theme, isLast]
  );

  const actionToPerform = useMemo(() => (!disabled ? action : () => {}), [
    disabled,
    action,
  ]);

  return (
    <Pressable onPress={actionToPerform} style={styles.rowDisplay}>
      <IconButton
        size="small"
        disabled={disabled}
        startIcon={(
          <View style={styles.iconSize}>
            <Icon />
          </View>
        )}
      />
      <View style={separatorStyle}>
        <Typography disabled={disabled} strong size="body1">
          {title}
        </Typography>
      </View>
    </Pressable>
  );
};

export default observer(ListButton);
