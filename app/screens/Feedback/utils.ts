import { translate } from '@app/i18n';
import { TooltipVariant } from '@app/components/Tooltip/types';
import { FormValues } from './types';

export const getTooltipText = (
  variant: TooltipVariant,
  approvedByRecaptcha: boolean
): string => {
  if (variant === TooltipVariant.SUCCESS) {
    return translate('settings.action.feedback.submitted');
  }

  if (!approvedByRecaptcha) {
    return translate('settings.action.feedback.captchaError');
  }

  return translate('settings.action.feedback.error');
};
// TODO : Review this when we have backend
export const getApprovedByRecaptcha = (token: string): Promise<boolean> =>
  new Promise((resolve) => resolve(token.length > 0));

// TODO : Review this when we have backend
export const submitFeedback = (data: FormValues): Promise<boolean> =>
  new Promise((resolve) => resolve(data !== undefined));
