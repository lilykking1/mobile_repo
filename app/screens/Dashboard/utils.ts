import { SECRET_PLACEHOLDER } from '@app/utils/constants';

export const getValueToDisplay = (
  value: string | number,
  isSecret: boolean
): string | number => {
  if (isSecret) {
    return SECRET_PLACEHOLDER;
  }

  return value;
};
