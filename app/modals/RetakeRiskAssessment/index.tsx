import React, { forwardRef, ForwardRefRenderFunction } from 'react';
import { Image, View } from 'react-native';
import { BottomSheetModal as GorhomBottomSheetModal } from '@gorhom/bottom-sheet';
import { RiskCard } from '@app/assets/images';
import BottomSheetModal, {
  BottomSheetModalProps,
} from '@app/components/BottomSheetModal';
import { Button, Typography } from '@app/components';
import { translate } from '@app/i18n';
import styles from './styles';

interface RetakeRiskAssessmentProps extends BottomSheetModalProps {
  handleOnDismiss: () => void;
  handleRetake: () => void;
}

const RetakeRiskAssessment: ForwardRefRenderFunction<
  GorhomBottomSheetModal,
  RetakeRiskAssessmentProps
> = ({ handleOnDismiss, handleRetake }, ref) => (
  <BottomSheetModal
    contentStyle={styles.container}
    snapToContent
    ref={ref}
    onDismiss={handleOnDismiss}
  >
    <Image
      style={styles.image}
      accessibilityIgnoresInvertColors
      source={RiskCard}
    />
    <Typography size="h4" strong altLight="secondary.800" style={styles.title}>
      {translate('modals.riskReTakeAssessment.title')}
    </Typography>
    <Typography
      altDark="grey.600"
      size="body1"
      altLight="secondary.800"
      style={styles.subtitle}
    >
      {translate('modals.riskReTakeAssessment.subtitle')}
    </Typography>
    <View style={styles.buttonsContainer}>
      <Button
        style={styles.btnCancel}
        size="small"
        variant="secondary"
        label={translate('modals.riskReTakeAssessment.actions.cancel')}
        onPress={handleOnDismiss}
      />
      <Button
        style={styles.btnRetake}
        variant="primary"
        size="small"
        label={translate('modals.riskReTakeAssessment.actions.retake')}
        onPress={handleRetake}
      />
    </View>
  </BottomSheetModal>
);

export default forwardRef(RetakeRiskAssessment);
