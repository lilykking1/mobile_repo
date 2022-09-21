import { palette } from '@app/theme';
import { NUMBER_OF_GRIDS } from '../../constants';

export const getGridDotsColor = (
  isDarkTheme: boolean,
  currentColor: string
): string => {
  const { 500: lightDot, 700: darkDot } = palette.grey;
  if (isDarkTheme && currentColor === lightDot) {
    return darkDot;
  }

  return lightDot;
};

export const getGridPosition = (width: number): number[] => {
  // Default separation for Grid
  const defaultGridSeparation = width / NUMBER_OF_GRIDS;

  // Initial grid value
  const labelsToDisplay = [30];

  for (let index = 1; index < NUMBER_OF_GRIDS - 1; index += 1) {
    const newPosition =
      labelsToDisplay[labelsToDisplay.length - 1] + defaultGridSeparation;
    labelsToDisplay.push(newPosition);
  }
  return labelsToDisplay;
};
