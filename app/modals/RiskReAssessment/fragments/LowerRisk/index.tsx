import React, { FC, useCallback } from 'react';
import { View, Image } from 'react-native';
import { Typography, Button } from '@app/components';
import { useBraze } from '@app/hooks';
import { translate } from '@app/i18n';
import { RiskCard } from '@app/assets/images';
import {
  AmplitudeRiskAssessmentEvents,
  logAmplitudeEvent,
} from '@app/utils/amplitude';
import { BrazeBuildMyPortfolioEvents } from '@app/utils/braze/events';
import styles from './styles';

interface LowerRiskProps {
  oldRisk: number;
  newRisk: number;
  handleClose: () => void;
  setRiskValue: React.Dispatch<React.SetStateAction<number>>;
  handleOnLowerRiskChange: (boolean) => void;
}

const LowerRisk: FC<LowerRiskProps> = ({
  oldRisk,
  newRisk,
  handleClose,
  setRiskValue,
  handleOnLowerRiskChange,
}) => {
  const { logBrazeCustomEvent } = useBraze();
  const handleCancel = useCallback(() => {
    setRiskValue(oldRisk);
    handleOnLowerRiskChange(false);
    handleClose();
  }, [handleClose, oldRisk, handleOnLowerRiskChange, setRiskValue]);

  const handleChangeNumber = useCallback(() => {
    const fromToRiskNumberValues = {
      from: oldRisk.toString(),
      to: newRisk.toString(),
    };

    logBrazeCustomEvent(
      BrazeBuildMyPortfolioEvents.CLICK_CHANGE_NUMBER,
      fromToRiskNumberValues
    );
    logAmplitudeEvent(
      AmplitudeRiskAssessmentEvents.CONFIRM_CHANGE_RISK_NUMBER,
      fromToRiskNumberValues
    );
    setRiskValue(newRisk);
    handleOnLowerRiskChange(true);
    handleClose();
  }, [
    logBrazeCustomEvent,
    newRisk,
    oldRisk,
    setRiskValue,
    handleOnLowerRiskChange,
    handleClose,
  ]);

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image accessibilityIgnoresInvertColors source={RiskCard} />
      </View>
      <Typography
        size="h4"
        strong
        altLight="secondary.800"
        style={styles.title}
      >
        {translate('modals.riskReAssessment.lowerRisk.title')}
      </Typography>
      <Typography size="body1" altLight="secondary.800" style={styles.subtitle}>
        {translate('modals.riskReAssessment.lowerRisk.subtitle')}
      </Typography>
      <View style={styles.buttonsContainer}>
        <View style={styles.cancel}>
          <Button
            size="small"
            variant="secondary"
            label={translate(
              'modals.riskReAssessment.lowerRisk.actions.cancel'
            )}
            onPress={handleCancel}
          />
        </View>
        <View style={styles.changeNumber}>
          <Button
            size="small"
            variant="primary"
            label={translate(
              'modals.riskReAssessment.lowerRisk.actions.changeNumber'
            )}
            onPress={handleChangeNumber}
          />
        </View>
      </View>
    </View>
  );
};

export default LowerRisk;
