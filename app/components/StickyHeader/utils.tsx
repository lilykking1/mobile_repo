import { Theme } from '@app/state/stores/settings/types';
import { palette, PaletteColor } from '@app/theme';
import React from 'react';
import { Icon, IconButton } from '..';
import {
  BORDER_COLOR,
  DEFAULT_BACK_PRESS_ICON_SIZE,
  ICON_COLOR,
} from './constants';
import styles from './styles';

interface GetDefaultBackPressButtonProps {
  arrowColor?: PaletteColor;
  arrowLeft?: boolean;
  secondaryBackground?: boolean;
  handleBackPress: () => void;
  altDark?: string;
}

export const getArrowColor = (theme: Theme = 'light'): PaletteColor =>
  ICON_COLOR[theme || 'light'];

export const getBorderColor = (theme: Theme = 'light'): string =>
  BORDER_COLOR[theme || 'light'];

const getDefaultBackPressIcon = (
  arrowLeft: boolean,
  arrowColor: PaletteColor
): React.ReactElement =>
  arrowLeft ? (
    <Icon.ArrowLeft
      tint={arrowColor}
      width={DEFAULT_BACK_PRESS_ICON_SIZE}
      height={DEFAULT_BACK_PRESS_ICON_SIZE}
    />
  ) : (
    <Icon.ChevronLeft
      tint={arrowColor}
      width={DEFAULT_BACK_PRESS_ICON_SIZE}
      height={DEFAULT_BACK_PRESS_ICON_SIZE}
    />
  );

const getDefaultBackPressAltDarkColor = (
  secondaryBackground: boolean,
  altDark?: string
): string => {
  if (altDark === palette.royalBlue[1000]) {
    return palette.royalBlue[950];
  }
  if (altDark === palette.royalBlue[950]) {
    return palette.royalBlue[1000];
  }
  return secondaryBackground ? palette.royalBlue[1000] : palette.royalBlue[950];
};

export const getDefaultBackPressButton = ({
  arrowColor,
  arrowLeft,
  handleBackPress,
  secondaryBackground,
  altDark,
}: GetDefaultBackPressButtonProps): React.ReactElement => {
  const backPressIcon = getDefaultBackPressIcon(arrowLeft, arrowColor);
  const backPressAltDarkColor = getDefaultBackPressAltDarkColor(
    secondaryBackground,
    altDark
  );

  return (
    <IconButton
      altDark={backPressAltDarkColor}
      onPress={handleBackPress}
      size="small"
      startIcon={backPressIcon}
      style={styles.backButtonContainer}
    />
  );
};
