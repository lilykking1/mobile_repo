import { palette } from '@app/theme';
import { getTextColor } from '../utils';

describe('get correct colors, types and booleans', () => {
  it('get correct color based on theme', () => {
    const onSnappedValue = true;
    let theme = 'light';
    let expected = palette.royalBlue['800'];
    let result = getTextColor(theme, onSnappedValue);
    expect(result).toEqual(expected);

    expected = palette.grey['600'];
    result = getTextColor(theme, !onSnappedValue);
    expect(result).toEqual(expected);

    theme = 'dark';
    expected = palette.white;
    result = getTextColor(theme, onSnappedValue);
    expect(result).toEqual(expected);

    expected = palette.grey['600'];
    result = getTextColor(theme, !onSnappedValue);
    expect(result).toEqual(expected);
  });
});
