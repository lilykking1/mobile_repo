import { palette, PaletteColor } from '@app/theme';
import { Theme } from '@app/state/stores/settings/types';
import {
  getDisabledStyle,
  getErrorStyle,
  getIconTint,
  getStateStyle,
} from '../utils';
import { disabledStyle, errorStyle, stateStyle } from '../styles';

describe('get correct styles', () => {
  it('gets a different style, based on the theme and its have been checked', () => {
    let theme: Theme = 'dark';
    const checked = true;
    let expected = stateStyle.checkedDark;
    let result = getStateStyle(checked, theme);
    expect(result).toEqual(expected);

    expected = stateStyle.uncheckedDark;
    result = getStateStyle(!checked, theme);
    expect(result).toEqual(expected);

    theme = 'light';
    expected = stateStyle.checkedLight;
    result = getStateStyle(checked, theme);
    expect(result).toEqual(expected);

    expected = stateStyle.uncheckedLight;
    result = getStateStyle(!checked, theme);
    expect(result).toEqual(expected);
  });

  it('gets a different disabled style, based on the theme and its have been checked and disabled', () => {
    const checked = true;
    const disabled = true;

    let expected = disabledStyle.checkedDark;
    let theme: Theme = 'dark';
    let result = getDisabledStyle(checked, disabled, theme);
    expect(result).toEqual(expected);

    expected = disabledStyle.uncheckedDark;
    result = getDisabledStyle(!checked, disabled, theme);
    expect(result).toEqual(expected);

    expected = null;
    result = getDisabledStyle(!checked, !disabled, theme);
    expect(result).toEqual(expected);

    result = getDisabledStyle(checked, !disabled, theme);
    expect(result).toEqual(expected);

    theme = 'light';
    expected = disabledStyle.checkedLight;
    result = getDisabledStyle(checked, disabled, theme);
    expect(result).toEqual(expected);

    expected = disabledStyle.uncheckedLight;
    result = getDisabledStyle(!checked, disabled, theme);
    expect(result).toEqual(expected);

    expected = null;
    result = getDisabledStyle(!checked, !disabled, theme);
    expect(result).toEqual(expected);

    result = getDisabledStyle(checked, !disabled, theme);
    expect(result).toEqual(expected);
  });

  it('gets a different error style, based on the theme and its have been checked and touched', () => {
    const checked = true;
    const touched = true;
    const error = 'My message';

    let expected = errorStyle.checked;
    let result = getErrorStyle(checked, touched, error);
    expect(result).toEqual(expected);

    expected = errorStyle.unchecked;
    result = getErrorStyle(!checked, touched, error);
    expect(result).toEqual(expected);

    expected = null;
    result = getErrorStyle(!checked, !touched, error);
    expect(result).toEqual(expected);

    result = getErrorStyle(checked, !touched, error);
    expect(result).toEqual(expected);
  });

  it('gets a different tint color, based on the theme and its disabled', () => {
    const disabled = true;
    let theme: Theme = 'dark';

    let expected: PaletteColor = palette.grey[700];
    let result = getIconTint(disabled, theme);
    expect(result).toEqual(expected);

    expected = palette.white;
    result = getIconTint(!disabled, theme);
    expect(result).toEqual(expected);

    theme = 'light';
    result = getIconTint(disabled, theme);
    expect(result).toEqual(expected);

    result = getIconTint(!disabled, theme);
    expect(result).toEqual(expected);
  });
});
