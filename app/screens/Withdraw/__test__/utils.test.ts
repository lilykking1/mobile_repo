import { palette } from '@app/theme';
import {
  getArrowContainerStyle,
  getBorderStyle,
  getKeyboardOpenStyle,
} from '../utils';

describe('Withdraw utils', () => {
  describe('getKeyboardOpenStyle', () => {
    it('should return the keyboard open style to components when the keyboard offset > 0', () => {
      const keyboardOffset = 50;
      const keyboardOpenStyle = getKeyboardOpenStyle(keyboardOffset);
      const expetectedResult = {
        footer: { marginBottom: keyboardOffset * 0.91 },
        withdrawContainer: {
          marginBottom: keyboardOffset * 0.5,
          justifyContent: 'flex-start',
        },
        walletAddressContainer: {
          marginTop: '8%',
        },
      };

      expect(keyboardOpenStyle).toMatchObject(expetectedResult);
    });

    it('should return an empty object style when theres no keyboard offset', () => {
      const keyboardOffset = 0;
      const keyboardOpenStyle = getKeyboardOpenStyle(keyboardOffset);
      const expetectedResult = {};

      expect(keyboardOpenStyle).toMatchObject(expetectedResult);
    });
  });

  describe('getArrowContainerStyle', () => {
    it('should the correct arrow container style for the light theme', () => {
      const theme = 'light';
      const lightArrowTint = palette.royalBlue[500];
      const lightContainerClor = palette.white;
      const result = getArrowContainerStyle(theme);

      expect(result.arrowTint).toBe(lightArrowTint);
      expect(result.container[1].backgroundColor).toBe(lightContainerClor);
    });

    it('should the correct arrow container style for the dark theme', () => {
      const theme = 'dark';
      const darkArrowTint = palette.grey[600];
      const darkContainerClor = palette.royalBlue[1000];
      const result = getArrowContainerStyle(theme);

      expect(result.arrowTint).toBe(darkArrowTint);
      expect(result.container[1].backgroundColor).toBe(darkContainerClor);
    });
  });
  describe('getBorderStyle', () => {
    it('should the correct border style for the light theme', () => {
      const theme = 'light';
      const lightBorderColor = palette.grey[400];
      const result = getBorderStyle(theme);

      expect(result.borderColor).toBe(lightBorderColor);
    });

    it('should the correct border style for the dark theme', () => {
      const theme = 'dark';
      const darkBorderColor = palette.grey[700];
      const result = getBorderStyle(theme);

      expect(result.borderColor).toBe(darkBorderColor);
    });
  });
});
