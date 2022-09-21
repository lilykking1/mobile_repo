import React, { FC, useCallback, useContext, useMemo } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { Background, Icon, RiskCard, Typography } from '@app/components';

import { palette } from '@app/theme';
import { observer } from 'mobx-react';
import { RootContext } from '@app/state';
import { translate } from '@app/i18n';
import { Routes } from '@app/navigation/types';
import { NavigationProp, useNavigation } from '@react-navigation/core';
import styles from './styles';
import { getIconTintByTheme } from './utils';

interface ReviewNewPortfolioCardProps {
  newPortfolioToReview: {
    initialInvestment: number;
    defaultRisk: number;
    newRisk: number;
  };
}

const ReviewNewPortfolioCard: FC<ReviewNewPortfolioCardProps> = ({
  newPortfolioToReview: { initialInvestment, defaultRisk, newRisk },
}) => {
  const {
    settingsStore: { theme },
  } = useContext(RootContext);
  const navigation = useNavigation<NavigationProp<Routes>>();

  const iconTint = useMemo(() => getIconTintByTheme(theme), [theme]);

  const handleReviewNewPortfolio = useCallback(() => {
    navigation.navigate('ManagedPortfolioSuccess', {
      initialInvestment,
      defaultRisk,
      isReassessment: true,
      newRisk,
    });
  }, [defaultRisk, initialInvestment, navigation, newRisk]);

  return (
    <TouchableOpacity onPress={handleReviewNewPortfolio}>
      <Background
        style={styles.container}
        altLight={palette.white}
        altDark={palette.royalBlue[950]}
      >
        <View style={styles.content}>
          <View style={styles.header}>
            <Typography
              size="h6"
              altLight="secondary.900"
              strong
              style={styles.title}
            >
              {translate('screens.dashboard.cards.reviewNewPortfolio.title')}
            </Typography>
            <Icon.ChevronRight tint={iconTint} />
          </View>
          <Typography size="buttons" variant="grey.600">
            {translate(
              'screens.dashboard.cards.reviewNewPortfolio.description'
            )}
          </Typography>
        </View>
        <RiskCard
          style={styles.riskCard}
          label={(
            <Typography
              size="body2"
              variant="green.500"
              strong
              style={styles.riskCardLabel}
            >
              {translate('screens.dashboard.cards.reviewNewPortfolio.new')}
            </Typography>
          )}
          noShadow
          value={newRisk}
          size="normal"
        />
      </Background>
    </TouchableOpacity>
  );
};

export default observer(ReviewNewPortfolioCard);
