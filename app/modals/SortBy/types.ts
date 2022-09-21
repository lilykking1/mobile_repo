import React from 'react';
import { IconProps } from '@app/components/Icon/types';

export interface OptionItem {
  label: string;
  id: string | number;
  icon: React.ReactElement<IconProps>;
}

export enum OptionIds {
  SORT_BY_NAME_ASC = 'sortAtoZ',
  SORT_BY_NAME_DESC = 'sortZtoA',
  SORT_BY_PRICE_ASC = 'sortFromLowestPrice',
  SORT_BY_PRICE_DESC = 'sortFromHighestPrice',
  SORT_BY_MARKET_CAP_ASC = 'sortFromLowestMarketCap',
  SORT_BY_MARKET_CAP_DESC = 'sortFromHighestMarketCap',
  SORT_BY_VOLUME_ASC = 'sortFromLowestVolume',
  SORT_BY_VOLUME_DESC = 'sortFromHighestVolume',
}
