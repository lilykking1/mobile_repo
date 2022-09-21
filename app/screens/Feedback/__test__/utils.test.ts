import { TooltipVariant } from '@app/components/Tooltip/types';
import { translate } from '@app/i18n';
import { getTooltipText } from '../utils';

describe('Texts', () => {
  it('get correct text to tooltip', () => {
    let variant: TooltipVariant = TooltipVariant.SUCCESS;
    const approvedByRecaptcha = true;
    let expected = translate('settings.action.feedback.submitted');
    let result = getTooltipText(variant, approvedByRecaptcha);
    expect(result).toEqual(expected);

    variant = TooltipVariant.ERROR;
    expected = translate('settings.action.feedback.error');
    result = getTooltipText(variant, approvedByRecaptcha);
    expect(result).toEqual(expected);

    variant = TooltipVariant.ERROR;
    expected = translate('settings.action.feedback.captchaError');
    result = getTooltipText(variant, !approvedByRecaptcha);
    expect(result).toEqual(expected);
  });
});
