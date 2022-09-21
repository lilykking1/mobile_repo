import { variations } from '../styles';
import { getVariantStyle } from '../utils';

describe('Get correct Card variant based on app theme', () => {
  it('has a dark background if variant is undefined in dark mode', () => {
    const match = variations.dark;
    const result = getVariantStyle(undefined, 'dark');
    expect(result).toMatchObject(match);
  });
  it('has a white background if variant is undefined in light mode', () => {
    const match = variations.white;
    const result = getVariantStyle(undefined, 'light');
    expect(result).toMatchObject(match);
  });
  it('has a white background if variant is white in light mode', () => {
    const match = variations.white;
    const result = getVariantStyle('white', 'light');
    expect(result).toMatchObject(match);
  });
  it('has a green background if green variant is passed', () => {
    const match = variations.green;
    const lightResult = getVariantStyle('green', 'light');
    const darkResult = getVariantStyle('green', 'dark');
    expect(lightResult).toMatchObject(match);
    expect(darkResult).toMatchObject(match);
  });
});
