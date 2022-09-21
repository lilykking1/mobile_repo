import React, { FC } from 'react';

import { Icon } from '@app/components';
import { palette } from '@app/theme';

import { MultiSelectCheckProps } from './types';

const MultiSelectCheck: FC<MultiSelectCheckProps> = ({ tint }) => (
  <Icon.Check tint={tint || palette.royalBlue[500]} width={20} height={20} />
);

export default MultiSelectCheck;
