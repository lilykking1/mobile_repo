import React, { FC } from 'react';

import { Icon, IconButton } from '@app/components';
import { palette } from '@app/theme';
import { ICON_SIZE } from './constants';
import { getIconTint } from './utils';

interface BackButtonProps {
  isDarkTheme: boolean;
  onPress: () => void;
}

const BackButton: FC<BackButtonProps> = ({ isDarkTheme, onPress }) => {
  const iconTint = getIconTint(isDarkTheme);

  const ButtonIcon = (
    <Icon.ChevronLeft tint={iconTint} width={ICON_SIZE} height={ICON_SIZE} />
  );

  return (
    <IconButton
      altDark={palette.royalBlue[950]}
      onPress={onPress}
      size="small"
      startIcon={ButtonIcon}
    />
  );
};

export default BackButton;
