import {
  formatNumberSubtitle,
  getTextBackgroundColor,
  getTextPaddingVertical,
} from '../utils';

describe('Risk average card treatments', () => {
  describe('Formatting numbers and texts', () => {
    it('should add signal and dollar char at number', () => {
      const subtitle = 1234.11;
      const gain = true;

      let expected = '+$1234.11';
      let result = formatNumberSubtitle(subtitle, gain);
      expect(result).toEqual(expected);

      expected = '-$1234.11';
      result = formatNumberSubtitle(subtitle, !gain);
      expect(result).toEqual(expected);
    });
  });

  describe('Colors and Styles', () => {
    it('should return padding greater 0 when there is background color', () => {
      const coloredBackground = true;
      let expected = 4;
      let result = getTextPaddingVertical(coloredBackground);
      expect(result).toEqual(expected);

      expected = 0;
      result = getTextPaddingVertical(!coloredBackground);
      expect(result).toEqual(expected);
    });
    it('should return correct background color when is necessary', () => {
      const coloredBackground = true;
      const gain = true;
      let expected = 'transparent';
      let result = getTextBackgroundColor(!coloredBackground, gain);
      expect(result).toEqual(expected);

      expected = 'rgba(94, 175, 97, 0.1)';
      result = getTextBackgroundColor(coloredBackground, gain);
      expect(result).toEqual(expected);

      expected = 'rgba(224, 90, 79, 0.1)';
      result = getTextBackgroundColor(coloredBackground, !gain);
      expect(result).toEqual(expected);
    });
  });
});
