export const keyboardVerticalOffset = (
  keyboardHeight: number,
  platform: string
): number => (platform === 'ios' ? keyboardHeight / 2 : 0);
