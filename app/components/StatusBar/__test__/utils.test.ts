import {
  STATUS_BAR_DARK_VARIANT,
  STATUS_BAR_LIGHT_VARIANT,
} from '../constants';
import { getThemeStatusBar } from '../utils';

describe('Get correct status bar theme', () => {
  it('Should get default status bar', () => {
    expect(getThemeStatusBar(undefined)).toEqual(STATUS_BAR_DARK_VARIANT);
  });

  it('Should get light status bar', () => {
    expect(getThemeStatusBar('dark')).toEqual(STATUS_BAR_LIGHT_VARIANT);
  });

  it('Should get light status bar', () => {
    expect(getThemeStatusBar('light')).toEqual(STATUS_BAR_DARK_VARIANT);
  });
});
