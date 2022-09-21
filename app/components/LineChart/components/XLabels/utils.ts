import { palette } from '@app/theme';
import { isNumber } from 'lodash';
import { NUMBER_OF_LABELS } from '../../constants';
import { REMOVED_ELEMENTS_QUANTITY } from './constants';
import { IntervalLabels } from './types';

const getLabelVariation = (index, items, separation, labelSeparation) => {
  const currentLastIndex = items.length - 1;
  const indexToAdd =
    index % 2 ? Math.round(separation) : Math.floor(separation);
  return {
    index: items[currentLastIndex].index + indexToAdd,
    xValue: items[currentLastIndex].xValue + labelSeparation,
  };
};

export const getIntervalArray = (
  width: number,
  dataLength: number,
  labelWidth: number
): IntervalLabels[] => {
  if (!isNumber(width) || !isNumber(dataLength) || !isNumber(labelWidth)) {
    return [];
  }

  const defaultLabelSeparation = width / NUMBER_OF_LABELS;

  const labelsToDisplay = [
    {
      index: 1,
      xValue: 15,
    },
  ];

  // We remove the last two items because graph does not display label there never for UI optimization
  // also remove 1 more for the first and "last" elements that always will be displayed
  const elementsAvailable = dataLength - REMOVED_ELEMENTS_QUANTITY;

  // Separation based on how many elements left after remove the mentioned in the past comment
  const separation = elementsAvailable / REMOVED_ELEMENTS_QUANTITY;

  for (let index = 0; index < REMOVED_ELEMENTS_QUANTITY; index += 1) {
    labelsToDisplay.push(
      getLabelVariation(
        index,
        labelsToDisplay,
        separation,
        defaultLabelSeparation
      )
    );
  }

  // We push the last element that always need to be displayed
  labelsToDisplay.push({
    index: dataLength - 2,
    xValue:
      labelsToDisplay[labelsToDisplay.length - 1].xValue +
      defaultLabelSeparation,
  });

  return labelsToDisplay;
};

export const getLabelTextColor = (isDarkTheme: boolean): string => {
  if (isDarkTheme) {
    return palette.grey[700];
  }

  return palette.grey[500];
};
