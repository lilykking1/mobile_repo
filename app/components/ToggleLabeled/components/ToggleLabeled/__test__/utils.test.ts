import { palette } from '@app/theme';
import {
  containerColor,
  pillColor,
  textOffColor,
  textOnColor,
} from '../constants';
import {
  getTextColorOn,
  getTextColorOff,
  getPillStyles,
  getContainerStyles,
} from '../utils';

describe('Get the correct Container Styles', () => {
  it('should return the disabled style when the button is disabled', () => {
    const isDisabled = true;
    const disabledResult = getContainerStyles(isDisabled);
    const expectedDisabledResult = { backgroundColor: containerColor.disabled };
    expect(disabledResult).toMatchObject(expectedDisabledResult);
  });
  it('should return the correct container style for each theme when the button is enable', () => {
    const isDisabled = false;
    const lightTheme = 'light';
    const lightEnabledResult = getContainerStyles(isDisabled, lightTheme);
    const expectedLightResult = { backgroundColor: containerColor[lightTheme] };
    expect(lightEnabledResult).toMatchObject(expectedLightResult);
    const darkTheme = 'dark';
    const darkEnabledResult = getContainerStyles(isDisabled, darkTheme);
    const expectedDarkResult = { backgroundColor: containerColor[darkTheme] };
    expect(darkEnabledResult).toMatchObject(expectedDarkResult);
  });
});

describe('Get the correct Pill Styles', () => {
  it('should return the disabled style when the button is disabled', () => {
    const isDisabled = true;
    const variant = 'default';
    const disabledResult = getPillStyles(variant, isDisabled);
    const expectedDisabledResult = { backgroundColor: pillColor.disabled };
    expect(disabledResult).toMatchObject(expectedDisabledResult);
  });

  it('should return the correct pill style for each theme when the button is enable', () => {
    const isDisabled = false;
    const lightTheme = 'light';
    const variant = 'default';
    const lightEnabledResult = getPillStyles(variant, isDisabled, lightTheme);
    const expectedLightResult = { backgroundColor: pillColor[lightTheme] };
    expect(lightEnabledResult).toMatchObject(expectedLightResult);
    const darkTheme = 'dark';
    const darkEnabledResult = getPillStyles(variant, isDisabled, darkTheme);
    const expectedDarkResult = { backgroundColor: pillColor[darkTheme] };
    expect(darkEnabledResult).toMatchObject(expectedDarkResult);
  });

  it('should return the correct pill variant style based on the variant value.', () => {
    const isDisabled = false;
    const variant = 'success';
    const variantResult = getPillStyles(variant, isDisabled);
    const expectedVariantResult = { backgroundColor: palette[variant] };
    expect(variantResult).toMatchObject(expectedVariantResult);
  });
});

describe('Get correct Text color from textOn', () => {
  it('should return the correct textOn color when its disabled', () => {
    const isDisabled = true;
    const disabledResult = getTextColorOn(isDisabled);
    const expectedDisabledResult = textOnColor.disabled;
    expect(disabledResult).toBe(expectedDisabledResult);
  });
  it('should return the correct textOn color when its not disabled and its on the light theme', () => {
    const isDisabled = false;
    const lightTheme = 'light';
    const lightResult = getTextColorOn(isDisabled, lightTheme);
    const expectedLightResult = textOnColor.light;
    expect(lightResult).toBe(expectedLightResult);
  });
  it('should return the correct textOn color when its not disabled and its on the dark theme', () => {
    const isDisabled = false;
    const darkTheme = 'dark';
    const darkResult = getTextColorOn(isDisabled, darkTheme);
    const expectedDarkResult = textOnColor.dark;
    expect(darkResult).toBe(expectedDarkResult);
  });
  it('should return the correct textOn color when its not disabled and the theme is undefined', () => {
    const isDisabled = false;
    const result = getTextColorOn(isDisabled);
    const expectedResult = textOnColor.light;
    expect(result).toBe(expectedResult);
  });
});

describe('Get correct Text color from textOff', () => {
  it('should return the correct textOff color when its disabled', () => {
    const isDisabled = true;
    const disabledResult = getTextColorOff(isDisabled);
    const expectedDisabledResult = textOffColor.disabled;
    expect(disabledResult).toBe(expectedDisabledResult);
  });
  it('should return the correct textOff color when its not disabled and its on the light theme', () => {
    const isDisabled = false;
    const lightTheme = 'light';
    const lightResult = getTextColorOff(isDisabled, lightTheme);
    const expectedLightResult = textOffColor.light;
    expect(lightResult).toBe(expectedLightResult);
  });
  it('should return the correct textOff color when its not disabled and its on the dark theme', () => {
    const isDisabled = false;
    const darkTheme = 'dark';
    const darkResult = getTextColorOff(isDisabled, darkTheme);
    const expectedDarkResult = textOffColor.dark;
    expect(darkResult).toBe(expectedDarkResult);
  });
  it('should return the correct textOff color when its not disabled and the theme is undefined', () => {
    const isDisabled = false;
    const result = getTextColorOff(isDisabled);
    const expectedResult = textOffColor.light;
    expect(result).toBe(expectedResult);
  });
});
