import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { withView } from '@story/decorators';
import { boolean, number, text, withKnobs } from '@storybook/addon-knobs';

import { RiskAppetiteCard } from '@app/components';
import { RiskAppetiteCardValue } from '@app/components/RiskAppetiteCard';

declare let module;

storiesOf('Cards.RiskAppetiteCard', module)
  .addDecorator(withKnobs)
  .addDecorator(withView)
  .add('Default', () => {
    const REGEX_ONLY_NUMBERS = /^(?!,$)[\d.]+$/;

    const lossSubtitle = text('Loss Subtitle ', 'Loss avg.', 'Loss Card');
    const lossPercentage = number('Loss Percentage', 70, {}, 'Loss Card');

    const gainSubtitle = text('Gain Subtitle ', 'Gain avg.', 'Gain Card');
    const gainPercentage = number('Gain Percentage', 90, {}, 'Gain Card');

    const leftTitle = text('Loss Title', 'My Risk Appetite');
    const rightTitle = text('Gain Title', 'Estimated range');
    const subtitle = text('Subtitle', '');
    const risk = number('Risk', 75);
    const coloredBackground = boolean('Colored Background', false);
    const accrual = boolean('Accrual', false);
    const precision = number('Precision', 0);

    const lossCard: RiskAppetiteCardValue = {
      subtitle: REGEX_ONLY_NUMBERS.test(lossSubtitle)
        ? Number.parseFloat(lossSubtitle)
        : lossSubtitle,
      percentage: lossPercentage,
    };
    const gainCard: RiskAppetiteCardValue = {
      subtitle: REGEX_ONLY_NUMBERS.test(gainSubtitle)
        ? Number.parseFloat(gainSubtitle)
        : gainSubtitle,
      percentage: gainPercentage,
    };

    return (
      <RiskAppetiteCard
        lossCard={lossCard}
        gainCard={gainCard}
        leftTitle={leftTitle}
        rightTitle={rightTitle}
        subtitle={subtitle}
        risk={risk}
        coloredBackground={coloredBackground}
        accrual={accrual}
        precision={precision}
      />
    );
  });
