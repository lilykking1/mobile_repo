import { RadioButtonVariant } from './types';
import { contentStyles } from './styles';

export const getContentStyle = (variant: RadioButtonVariant) => {
  switch (variant) {
    case 'danger':
      return contentStyles.danger;
    case 'success':
      return contentStyles.success;
    case 'transparent':
      return contentStyles.transparent;
    case 'warning':
      return contentStyles.warning;
    case 'primary':
    default:
      return contentStyles.primary;
  }
};
