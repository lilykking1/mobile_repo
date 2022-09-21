import { aboveChars, bellowChars } from './constants';

interface PositionItem {
  value: string;
  prefix: string;
  suffix: string;
}

interface PositionItemsData {
  above: PositionItem;
  bellow: PositionItem;
}

type Position = 'above' | 'bellow';

const getPositionCharsObjectName = (isReversePositions: boolean) =>
  isReversePositions ? 'reverse' : 'default';

const getPositionChars = (position: Position) =>
  position === 'above' ? aboveChars : bellowChars;

const getPositionValue = (
  amount: string,
  percentage: string,
  position: Position,
  isReversePositions: boolean
) => {
  if (position === 'above') {
    return isReversePositions ? percentage : amount;
  }

  return isReversePositions ? amount : percentage;
};

const getPositionItemData = (
  amount: string,
  percentage: string,
  position: Position,
  isReversePositions: boolean
): PositionItem => {
  const value = getPositionValue(
    amount,
    percentage,
    position,
    isReversePositions
  );

  const positionChars = getPositionChars(position);
  const charsObjectName = getPositionCharsObjectName(isReversePositions);
  const { prefix, suffix } = positionChars[charsObjectName];

  return {
    value,
    prefix,
    suffix,
  };
};

export const getPositionItems = (
  amount: string,
  percentage: string,
  isReversePositions: boolean
): PositionItemsData => {
  const above = getPositionItemData(
    amount,
    percentage,
    'above',
    isReversePositions
  );
  const bellow = getPositionItemData(
    amount,
    percentage,
    'bellow',
    isReversePositions
  );

  return {
    above,
    bellow,
  };
};
