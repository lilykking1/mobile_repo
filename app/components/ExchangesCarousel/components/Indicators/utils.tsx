import React from 'react';
import { Indicator } from './components';

interface GetSliceIndicatorsProps {
  indicators: number[];
  startIndex: number;
  endIndex: number;
  isAddExchangeSelected: boolean;
}

export const getArrayFromNumber = (quantity: number): number[] => {
  if (!quantity) {
    return [];
  }

  const quantityExcludingAddExchangeCard = quantity - 1;
  return new Array(quantityExcludingAddExchangeCard).fill(0);
};

export const getItemKey = (): string => `indicator-${Math.random()}`;

export const getSlicedIndicators = ({
  isAddExchangeSelected,
  indicators,
  startIndex,
  endIndex,
}: GetSliceIndicatorsProps): React.ReactNode[] => {
  const arraySliced = indicators.slice(startIndex, endIndex);

  const indicatorsRendered = arraySliced.map(() => (
    <Indicator
      isAddExchangeSelected={isAddExchangeSelected}
      isSelected={false}
      key={getItemKey()}
    />
  ));

  return indicatorsRendered;
};
