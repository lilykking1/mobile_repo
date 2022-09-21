import { TRANSACTION_STATUS } from '@app/models/Transactions';
import { TooltipVariant } from '../../Tooltip/types';
import { getTooltipVariantFromStatus } from '../utils';

describe('Get correct Tooltip variant when passing status to getTooltipVariantFromStatus', () => {
  it('has success style when status is completed', () => {
    const match = TooltipVariant.SUCCESS;
    const result = getTooltipVariantFromStatus(TRANSACTION_STATUS.COMPLETED);
    expect(result).toEqual(match);
  });
  it('has success style when status is confirmed', () => {
    const match = TooltipVariant.SUCCESS;
    const result = getTooltipVariantFromStatus(TRANSACTION_STATUS.CONFIRMED);
    expect(result).toEqual(match);
  });
  it('has warning style when status is processing', () => {
    const match = TooltipVariant.WARNING;
    const result = getTooltipVariantFromStatus(TRANSACTION_STATUS.PROCESSING);
    expect(result).toEqual(match);
  });
  it('has warning style when status is awating for approval', () => {
    const match = TooltipVariant.WARNING;
    const result = getTooltipVariantFromStatus(
      TRANSACTION_STATUS.AWAITING_APPROVAL
    );
    expect(result).toEqual(match);
  });
  it('has failed style when transaction has an error', () => {
    const match = TooltipVariant.ERROR;
    const result = getTooltipVariantFromStatus(TRANSACTION_STATUS.FAILED);
    expect(result).toEqual(match);
  });
});
