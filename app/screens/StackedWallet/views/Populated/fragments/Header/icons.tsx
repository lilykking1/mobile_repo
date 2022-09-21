import React from 'react';
import { Icon } from '@app/components';
import { palette } from '@app/theme';

export const withdrawIcon = (
  <Icon.ArrowUp tint={palette.royalBlue[500]} width={24} height={24} />
);

export const depositIcon = (
  <Icon.ArrowDown tint={palette.royalBlue[500]} width={24} height={24} />
);

export const swapIcon = (
  <Icon.Swap tint={palette.royalBlue[500]} width={24} height={24} />
);
