import { SliderType } from '@app/components/Slider/types';
import { palette } from '@app/theme';
import { getThumbDetailColor } from '@app/components/SliderThumb/utils';
import {
  getMaximumTrackTintColor,
  getMinimumTrackTintColor,
  getPercentByValue,
  getValueByPercent,
  getValueWhenForceSnap,
  isShowCoinIcon,
} from '../utils';

describe('Get correct dimensions and sizes', () => {
  it('percent is correct based on value', () => {
    const value = 0.75;
    const maximumValue = 1.5;
    const expected = 50;
    const result = getPercentByValue(value, maximumValue);
    expect(result).toEqual(expected);
  });

  it('value is correct based on percent', () => {
    const percent = 50;
    const maximumValue = 1.5;
    const expected = 0.75;
    const result = getValueByPercent(percent, maximumValue);
    expect(result).toEqual(expected);
  });

  it('value is snapped correctly', () => {
    const maximumValue = 1;

    let currentValue = 0.95;
    let expected = 0.99;
    let result = getValueWhenForceSnap(currentValue, maximumValue);
    expect(result).toEqual(expected);

    currentValue = 0.71;
    expected = 0.75;
    result = getValueWhenForceSnap(currentValue, maximumValue);
    expect(result).toEqual(expected);

    currentValue = 0.46;
    expected = 0.5;
    result = getValueWhenForceSnap(currentValue, maximumValue);
    expect(result).toEqual(expected);

    currentValue = 0.21;
    expected = 0.25;
    result = getValueWhenForceSnap(currentValue, maximumValue);
    expect(result).toEqual(expected);

    currentValue = 0.01;
    expected = 0.01;
    result = getValueWhenForceSnap(currentValue, maximumValue);
    expect(result).toEqual(expected);

    currentValue = 0.86;
    expected = 0.86;
    result = getValueWhenForceSnap(currentValue, maximumValue);
    expect(result).toEqual(expected);

    currentValue = 0.38;
    expected = 0.38;
    result = getValueWhenForceSnap(currentValue, maximumValue);
    expect(result).toEqual(expected);
  });
});

describe('Get correct colors, types and booleans', () => {
  it('show coin icon when input is with icon', () => {
    let type: SliderType = SliderType.INPUT;
    let expected = false;
    let result = isShowCoinIcon(type);
    expect(result).toEqual(expected);

    type = SliderType.INPUT_WITH_ICON;
    expected = true;
    result = isShowCoinIcon(type);
    expect(result).toEqual(expected);

    type = SliderType.WITHOUT_INPUT;
    expected = false;
    result = isShowCoinIcon(type);
    expect(result).toEqual(expected);
  });

  it('get correct tint color for minimum track', () => {
    const disabled = true;
    const expectedTrue: string = palette.grey[500];
    let result = getMinimumTrackTintColor(disabled);
    expect(result).toEqual(expectedTrue);

    const expectedFalse = palette.royalBlue[500];
    result = getMinimumTrackTintColor(!disabled);
    expect(result).toEqual(expectedFalse);
  });

  it('get correct tint color for maximum track', () => {
    let theme = 'light';
    let expected = palette.grey['500'];
    let result = getMaximumTrackTintColor(theme);
    expect(result).toEqual(expected);

    theme = 'dark';
    expected = palette.royalBlue['900'];
    result = getMaximumTrackTintColor(theme);
    expect(result).toEqual(expected);
  });

  it('get correct color for thumb detail', () => {
    let theme = 'light';
    const onSnappedValue = true;
    let expected = palette.royalBlue['800'];
    let result = getThumbDetailColor(theme, onSnappedValue);
    expect(result).toEqual(expected);

    expected = palette.grey['500'];
    result = getThumbDetailColor(theme, !onSnappedValue);
    expect(result).toEqual(expected);

    theme = 'dark';
    expected = palette.royalBlue['800'];
    result = getThumbDetailColor(theme, onSnappedValue);
    expect(result).toEqual(expected);

    theme = 'dark';
    expected = palette.royalBlue['400'];
    result = getThumbDetailColor(theme, !onSnappedValue);
    expect(result).toEqual(expected);
  });
});
