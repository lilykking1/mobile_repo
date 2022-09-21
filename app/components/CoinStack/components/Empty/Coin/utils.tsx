import React from 'react';
import { Icon } from '@app/components';

export const getEmptyCoinIcon = (size: number, index: number) => {
  switch (index) {
    case 0:
      return <Icon.EmptyCoin1 height={size} width={size} />;
    case 1:
      return <Icon.EmptyCoin2 height={size} width={size} />;
    case 2:
      return <Icon.EmptyCoin3 height={size} width={size} />;
    default:
      return <Icon.EmptyCoin1 height={size} width={size} />;
  }
};
