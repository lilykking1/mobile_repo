import React, { FC, useCallback } from 'react';
import { View } from 'react-native';
import { Typography, Button, RiskCard, Icon } from '@app/components';
import { translate } from '@app/i18n';
import { palette } from '@app/theme';

import styles from './styles';

interface HigherRiskProps {
  oldRisk: number;
  newRisk: number;
  handleClose: () => void;
  handleRiseRisk: () => void;
  setRiskValue: React.Dispatch<React.SetStateAction<number>>;
  setRiskHasChanged: React.Dispatch<React.SetStateAction<boolean>>;
}

const HigherRisk: FC<HigherRiskProps> = ({
  oldRisk,
  newRisk,
  handleClose,
  setRiskValue,
  setRiskHasChanged,
  handleRiseRisk,
}) => {
  const handleCloseModal = useCallback(() => {
    setRiskValue(oldRisk);
    setRiskHasChanged(false);
    handleClose();
  }, [handleClose, oldRisk, setRiskHasChanged, setRiskValue]);

  const handleModifyRisk = useCallback(() => {
    handleRiseRisk();
    handleClose();
  }, [handleRiseRisk, handleClose]);

  return (
    <View style={styles.container}>
      <View style={styles.riskContainer}>
        <RiskCard value={newRisk} size="large" />
        <View style={styles.alertIcon}>
          <Icon.Alert tint={palette.red[500]} />
        </View>
      </View>
      <Typography
        size="h4"
        strong
        altLight="secondary.800"
        style={styles.title}
      >
        {translate('modals.riskReAssessment.higherRisk.title')}
      </Typography>
      <Typography size="body1" altLight="secondary.800" style={styles.subtitle}>
        {translate('modals.riskReAssessment.higherRisk.subtitle')}
      </Typography>
      <View style={styles.buttonsContainer}>
        <View style={styles.cancel}>
          <Button
            size="small"
            variant="secondary"
            label={translate(
              'modals.riskReAssessment.higherRisk.actions.keepCurrentNumber'
            )}
            onPress={handleCloseModal}
          />
        </View>
        <View style={styles.changeNumber}>
          <Button
            size="small"
            variant="primary"
            label={translate(
              'modals.riskReAssessment.higherRisk.actions.reAssessRisk'
            )}
            onPress={handleModifyRisk}
          />
        </View>
      </View>
    </View>
  );
};

export default HigherRisk;
