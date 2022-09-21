import { keyboardVerticalOffset } from '@app/screens/Profile/utils';

describe('Profile utils', () => {
  describe('Paddings and Sizes', () => {
    it('should returns zero when android and half keyboard height when ios', () => {
      const keyboardHeight = 300;
      let platform = 'ios';
      let expected = keyboardHeight / 2;
      let result = keyboardVerticalOffset(keyboardHeight, platform);
      expect(result).toEqual(expected);

      platform = 'android';
      expected = 0;
      result = keyboardVerticalOffset(keyboardHeight, platform);
      expect(result).toEqual(expected);
    });
  });
});
