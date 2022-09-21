import React, {
  forwardRef,
  ForwardRefRenderFunction,
  useCallback,
  useState,
} from 'react';
import { BottomSheetModal as GorhomBottomSheetModal } from '@gorhom/bottom-sheet';
import BottomSheetModal, {
  BottomSheetModalProps,
} from '@app/components/BottomSheetModal';
import { HigherRisk, LowerRisk } from './fragments';

import styles from './styles';

interface RiskReAssessmentProps extends BottomSheetModalProps {
  isLowerRisk: boolean;
  oldRisk: number;
  newRisk: number;
  handleClose: () => void;
  handleRiseRisk: () => void;
  setRiskValue: React.Dispatch<React.SetStateAction<number>>;
  lowerRiskHasChanged: boolean;
  setLowerRiskHasChanged: React.Dispatch<React.SetStateAction<boolean>>;
}

const RiskReAssessment: ForwardRefRenderFunction<
  GorhomBottomSheetModal,
  RiskReAssessmentProps
> = (
  {
    isLowerRisk,
    oldRisk,
    newRisk,
    handleClose,
    handleRiseRisk,
    setRiskValue,
    lowerRiskHasChanged,
    setLowerRiskHasChanged,
  },
  ref
) => {
  const [riskHasChanged, setRiskHasChanged] = useState(false);

  const handleOnDismiss = useCallback(() => {
    if (!riskHasChanged || !lowerRiskHasChanged) {
      setRiskValue(oldRisk);
    } else {
      setRiskHasChanged(false);
      setLowerRiskHasChanged(true);
    }
    handleClose();
  }, [
    handleClose,
    oldRisk,
    riskHasChanged,
    setRiskValue,
    lowerRiskHasChanged,
    setLowerRiskHasChanged,
  ]);

  const handleOnLowerRiskChange = useCallback(
    (hasChanged) => {
      setRiskHasChanged(hasChanged);
      setLowerRiskHasChanged(hasChanged);
    },
    [setLowerRiskHasChanged, setRiskHasChanged]
  );

  return (
    <BottomSheetModal
      contentStyle={styles.modalContainer}
      snapToContent
      ref={ref}
      onDismiss={handleOnDismiss}
    >
      {isLowerRisk ? (
        <LowerRisk
          handleClose={handleClose}
          oldRisk={oldRisk}
          newRisk={newRisk}
          setRiskValue={setRiskValue}
          handleOnLowerRiskChange={handleOnLowerRiskChange}
        />
      ) : (
        <HigherRisk
          handleClose={handleClose}
          handleRiseRisk={handleRiseRisk}
          oldRisk={oldRisk}
          newRisk={newRisk}
          setRiskValue={setRiskValue}
          setRiskHasChanged={setRiskHasChanged}
        />
      )}
    </BottomSheetModal>
  );
};

export default forwardRef(RiskReAssessment);
