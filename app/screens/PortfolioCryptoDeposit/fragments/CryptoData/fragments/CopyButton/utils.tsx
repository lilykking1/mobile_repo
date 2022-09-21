import React from 'react';
import { Icon } from '@app/components';
import { Theme } from '@app/state/stores/settings/types';
import { BUTTON_COLOR } from './constants';

export const getIconTint = (
  theme: Theme = 'light',
  hasAltDark: boolean
): string => {
  const altOrDefault = hasAltDark ? 'alt' : 'default';
  return BUTTON_COLOR[altOrDefault][theme];
};

export const getIcon = (isCopied: boolean, tint: string): React.ReactElement =>
  isCopied ? (
    <Icon.Check width={24} height={24} tint={tint} />
  ) : (
    <Icon.Copy width={24} height={24} tint={tint} />
  );
