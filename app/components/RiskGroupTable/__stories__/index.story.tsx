import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { withView } from '@story/decorators';
import { withKnobs, select } from '@storybook/addon-knobs';
import { translate } from '@app/i18n';
import RiskGroupTable from '..';
import { userRiskGroup } from './fixtures';

declare let module;

storiesOf('Tables.RiskGroup', module)
  .addDecorator(withKnobs)
  .addDecorator(withView)
  .add('Default', () => {
    const userRiskGroupNumber = select(
      "User's Risk Group",
      userRiskGroup,
      userRiskGroup[0],
      'Default'
    );

    return (
      <RiskGroupTable
        userRiskGroupNumber={userRiskGroupNumber}
        title={translate(
          'screens.managedPortfolioSuccess.averageRiskComparison.title'
        )}
      />
    );
  });
