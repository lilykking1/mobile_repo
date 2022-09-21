import React, { FC, useMemo } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { noop } from 'lodash';

import { IconButton, Typography } from '@app/components';
import { ArrowUp, Swap } from '@app/components/Icon';
import { Theme } from '@app/state/stores/settings/types';
import { palette } from '@app/theme';
import styles from './styles';
import { getIconColor } from './utils';
import { ManageCoinActionType } from '../../types';
import { ICON_BUTTON_HORIZONTAL_PADDING } from '../../constants';

export interface ActionItemProps {
  action: ManageCoinActionType;
  label: string;
  onPress?: () => void;
  theme: Theme;
}

const ActionItem: FC<ActionItemProps> = ({
  action,
  label,
  theme,
  onPress = noop,
}) => {
  const iconColor = useMemo(() => getIconColor(theme), [theme]);
  const actionIcon = useMemo(() => {
    if (action === ManageCoinActionType.SWAP) {
      return <Swap tint={iconColor} height={20} width={20} />;
    }

    return <ArrowUp tint={iconColor} height={18} width={18} />;
  }, [action, iconColor]);

  const iconContainerCustomStyle = [
    { paddingHorizontal: ICON_BUTTON_HORIZONTAL_PADDING },
    styles.iconContainer,
  ];

  return (
    <TouchableOpacity onPress={onPress} style={styles.mainContainer}>
      <View style={iconContainerCustomStyle}>
        <IconButton
          altDark={palette.royalBlue[950]}
          containerStyle={styles.iconButtonContainer}
          onPress={onPress}
          size="small"
          startIcon={actionIcon}
        />
      </View>
      <View style={styles.textContainer}>
        <Typography strong size="body1">
          {label}
        </Typography>
      </View>
    </TouchableOpacity>
  );
};

export default ActionItem;
