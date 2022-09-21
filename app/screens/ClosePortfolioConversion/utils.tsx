import React, { ReactElement } from 'react';
import { Theme } from '@app/state/stores/settings/types';
import { Icon } from '@app/components';
import { palette } from '@app/theme';

export const getCloseButtonIcon = (theme: Theme): ReactElement => {
  const tint = theme === 'dark' ? palette.white : palette.royalBlue[900];
  return <Icon.Close tint={tint} width={16} height={16} />;
};
