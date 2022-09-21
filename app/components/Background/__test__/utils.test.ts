import { palette } from '@app/theme';
import { Theme } from '@app/state/stores/settings/types';
import { getBackgroundColor } from '../utils';
import { COLORS } from '../constants';
import { BackgroundColorVariation } from '../types';

describe('Get correct Background color based on app theme and its variant', () => {
  it('has the main light background color when theme is light', () => {
    const variant = BackgroundColorVariation.MAIN;
    const theme = 'light';

    const match = COLORS[variant][theme];

    const result = getBackgroundColor(variant, theme);
    expect(result).toEqual(match);
  });

  it('has the main dark background color when theme is dark', () => {
    const variant = BackgroundColorVariation.MAIN;
    const theme = 'dark';

    const match = COLORS[variant][theme];

    const result = getBackgroundColor(variant, theme);
    expect(result).toEqual(match);
  });

  it('has the secondary light background color when theme is light', () => {
    const variant = BackgroundColorVariation.SECONDARY;
    const theme = 'light';

    const match = COLORS[variant][theme];

    const result = getBackgroundColor(variant, theme);
    expect(result).toEqual(match);
  });

  it('has the secondary dark background color when theme is dark', () => {
    const variant = BackgroundColorVariation.SECONDARY;
    const theme = 'dark';

    const match = COLORS[variant][theme];

    const result = getBackgroundColor(variant, theme);
    expect(result).toEqual(match);
  });

  it('has alternative colors when they are defined', () => {
    let theme: Theme;
    let result: string;

    const variant = BackgroundColorVariation.ALT;
    const altLight = palette.red[200];
    const altDark = palette.green[200];

    theme = 'light';

    result = getBackgroundColor(variant, theme, altLight, altDark);
    expect(result).toEqual(altLight);

    theme = 'dark';

    result = getBackgroundColor(variant, theme, altLight, altDark);
    expect(result).toEqual(altDark);
  });
});
