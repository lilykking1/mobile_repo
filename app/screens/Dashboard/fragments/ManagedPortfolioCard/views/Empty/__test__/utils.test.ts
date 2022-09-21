import { translate } from '@app/i18n';
import { ManagedPortfolioStatus } from '../../../types';
import { getMessage, getActionLabel, getActionVariant } from '../utils';

describe('Get correct Managed Portfolio data based on Managed Portfolio configuration status', () => {
  it('has the properly data when Managed Porftolio configuration was not started yet', () => {
    const messageToMatch = translate(
      'screens.dashboard.cards.managedPortfolio.initialMessage'
    );
    const actionButtonLabelToMatch = translate('onboarding.getStarted');
    const actionButtonVariantToMatch = 'primary';

    const message = getMessage(ManagedPortfolioStatus.NOT_STARTED);
    const buttonLabel = getActionLabel(ManagedPortfolioStatus.NOT_STARTED);
    const buttonVariant = getActionVariant(ManagedPortfolioStatus.NOT_STARTED);

    expect(message).toBe(messageToMatch);
    expect(buttonLabel).toBe(actionButtonLabelToMatch);
    expect(buttonVariant).toBe(actionButtonVariantToMatch);
  });

  it('has the properly data when Managed Porftolio configuration was started but not fully done yet', () => {
    const messageToMatch = translate(
      'screens.dashboard.cards.managedPortfolio.initialMessage'
    );
    const actionButtonLabelToMatch = translate(
      'screens.dashboard.cards.managedPortfolio.continuePortfolioAction'
    );
    const actionButtonVariantToMatch = 'primary';

    const message = getMessage(ManagedPortfolioStatus.STARTED);
    const buttonLabel = getActionLabel(ManagedPortfolioStatus.STARTED);
    const buttonVariant = getActionVariant(ManagedPortfolioStatus.STARTED);

    expect(message).toBe(messageToMatch);
    expect(buttonLabel).toBe(actionButtonLabelToMatch);
    expect(buttonVariant).toBe(actionButtonVariantToMatch);
  });

  it('has the properly data when Managed Porftolio configuration was done but it was not funded yet', () => {
    const messageToMatch = translate(
      'screens.dashboard.cards.managedPortfolio.continueMessage'
    );
    const actionButtonLabelToMatch = translate(
      'screens.welcome.continuePortfolioAction'
    );
    const actionButtonVariantToMatch = 'green';

    const message = getMessage(ManagedPortfolioStatus.CONFIGURED);
    const buttonLabel = getActionLabel(ManagedPortfolioStatus.CONFIGURED);
    const buttonVariant = getActionVariant(ManagedPortfolioStatus.CONFIGURED);

    expect(message).toBe(messageToMatch);
    expect(buttonLabel).toBe(actionButtonLabelToMatch);
    expect(buttonVariant).toBe(actionButtonVariantToMatch);
  });

  it('has the properly data when the user previously had a Managed Porftolio but closed it', () => {
    const messageToMatch = translate(
      'screens.dashboard.cards.managedPortfolio.restoreMessage'
    );
    const actionButtonLabelToMatch = translate(
      'screens.dashboard.cards.managedPortfolio.restorePortfolioAction'
    );
    const actionButtonVariantToMatch = 'primary';

    const message = getMessage(ManagedPortfolioStatus.CLOSED);
    const buttonLabel = getActionLabel(ManagedPortfolioStatus.CLOSED);
    const buttonVariant = getActionVariant(ManagedPortfolioStatus.CLOSED);

    expect(message).toBe(messageToMatch);
    expect(buttonLabel).toBe(actionButtonLabelToMatch);
    expect(buttonVariant).toBe(actionButtonVariantToMatch);
  });
});
