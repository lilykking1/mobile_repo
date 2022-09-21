import { variationsStyle } from '../styles';
import { getVariantStyle } from '../utils';

describe('Get correct Typography text color variant based on app theme', () => {
  it('has a grey.300 text color if variant is undefined in dark theme', () => {
    const match = variationsStyle['grey.300'];
    const result = getVariantStyle({ variant: undefined, theme: 'dark' });
    expect(result).toMatchObject(match);
  });
  it('has a secondary.900 text color if variant is undefined in light theme', () => {
    const match = variationsStyle['secondary.900'];
    const result = getVariantStyle({ variant: undefined, theme: 'light' });
    expect(result).toMatchObject(match);
  });
  it('has a grey.300 text color if variant is grey.300 in light theme', () => {
    const match = variationsStyle['grey.300'];
    const result = getVariantStyle({ variant: 'grey.300', theme: 'light' });
    expect(result).toMatchObject(match);
  });
  it('has a green text color if green variant is passed no matter app theme', () => {
    const match = variationsStyle['green.500'];
    const lightResult = getVariantStyle({
      variant: 'green.500',
      theme: 'light',
    });
    const darkResult = getVariantStyle({ variant: 'green.500', theme: 'dark' });
    expect(lightResult).toMatchObject(match);
    expect(darkResult).toMatchObject(match);
  });
  it('has alternative colors if they are passed and works on right theme', () => {
    const lightAltColor = variationsStyle['green.500'];

    const lightResult = getVariantStyle({
      altLight: 'green.500',
      theme: 'light',
    });
    expect(lightResult).toMatchObject(lightAltColor);

    const darkAltColor = variationsStyle.red;
    const darkResult = getVariantStyle({ altDark: 'red', theme: 'dark' });
    expect(darkResult).toMatchObject(darkAltColor);
  });
  it('has disabled colors no matter app theme', () => {
    const disabled = true;
    const lightDisabledColor = variationsStyle['grey.500'];
    const darkDisabledColor = variationsStyle['grey.700'];

    const lightResult = getVariantStyle({
      disabled,
      theme: 'light',
    });
    expect(lightResult).toMatchObject(lightDisabledColor);

    const darkResult = getVariantStyle({ disabled, theme: 'dark' });
    expect(darkResult).toMatchObject(darkDisabledColor);
  });
});
