import { DISABLED_DARK_COLOR, DISABLED_LIGHT_COLOR } from '../constants';
import { getVariant } from '../utils';

describe('Get correct Tab typography variant text color', () => {
  it('has a undefined variant if selected, no matters what theme', () => {
    const match = undefined;
    const isSelected = true;

    let isDarkTheme = false;

    let result = getVariant(isSelected, isDarkTheme);
    expect(result).toBe(match);

    isDarkTheme = true;

    result = getVariant(isSelected, isDarkTheme);
    expect(result).toBe(match);
  });

  it('has the proper colors when disabled based on app theme', () => {
    const isSelected = false;

    let match = DISABLED_LIGHT_COLOR;
    let isDarkTheme = false;

    let result = getVariant(isSelected, isDarkTheme);
    expect(result).toBe(match);

    match = DISABLED_DARK_COLOR;
    isDarkTheme = true;

    result = getVariant(isSelected, isDarkTheme);
    expect(result).toBe(match);
  });
});
