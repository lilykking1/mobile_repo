import React from 'react';
import { IconProps } from '@app/components/Icon/types';

export interface OptionItem {
  label: string;
  id: string | number;
  icon: React.ReactElement<IconProps>;
}
