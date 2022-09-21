import React from 'react';

import { Icon } from '@app/components';
import { palette } from '@app/theme';

export const Close = ({ checked }) => {
  const tint = checked ? palette.royalBlue[500] : palette.grey[600];
  return <Icon.Close tint={tint} />;
};
