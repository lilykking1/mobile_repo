import { palette } from '@app/theme';
import { getIndicatorStyle } from '../utils';
import { IndicatorsType, IndicatorVariant } from '../types';
import {
  getBackgroundColorFromType,
  getColorToPaintAllSteps,
} from '../animations';

describe('Get Indicator styles', () => {
  const FILLED_COLOR = palette.royalBlue['500'];

  it('should return correct indicator style according the indicator variant', () => {
    let variant: IndicatorVariant = IndicatorVariant.REGULAR;
    let expected = {
      borderRadius: 4,
      height: 8,
      marginHorizontal: 4,
      width: 8,
    };
    let result = getIndicatorStyle(variant);
    expect(result).toEqual(expected);

    variant = IndicatorVariant.SMALL;
    expected = {
      borderRadius: 3,
      height: 6,
      marginHorizontal: 3,
      width: 6,
    };
    result = getIndicatorStyle(variant);
    expect(result).toEqual(expected);
  });

  it('should return same color when current is greater than index', () => {
    let index = 0;
    let current = 0;
    let expected = FILLED_COLOR;
    let result = getColorToPaintAllSteps(index, current);
    expect(result).toEqual(expected);

    index = 1;
    current = 0;
    expected = 'mock_color';
    result = getColorToPaintAllSteps(index, current);
    expect(result).toEqual(expected);

    index = 0;
    current = 1;
    expected = FILLED_COLOR;
    result = getColorToPaintAllSteps(index, current);
    expect(result).toEqual(expected);

    index = 1;
    current = 1;
    expected = FILLED_COLOR;
    result = getColorToPaintAllSteps(index, current);
    expect(result).toEqual(expected);
  });

  it('should return correct color according the indicator type', () => {
    let type: IndicatorsType = IndicatorsType.PAINT_CURRENT_STEP;
    const index = 0;
    const current = 0;
    let expected = 'mock_color';
    let result = getBackgroundColorFromType(type, index, current);
    expect(result).toEqual(expected);

    type = IndicatorsType.PAINT_ALL_STEPS;
    expected = FILLED_COLOR;
    result = getBackgroundColorFromType(type, index, current);
    expect(result).toEqual(expected);
  });
});
