import React, {
  forwardRef,
  ForwardRefRenderFunction,
  useCallback,
  useMemo,
} from 'react';
import { BottomSheetModal as GorhomBottomSheetModal } from '@gorhom/bottom-sheet';
import { MultiSelect } from '@app/components';
import BottomSheetModal, {
  BottomSheetModalProps,
} from '@app/components/BottomSheetModal';

import { QuestionsItem } from './fragments';
import styles from './styles';

interface PeriodFilterProps extends BottomSheetModalProps {
  selected: string;
  options: string[];
  onSelect: (value: string) => void;
  onDismiss?: () => void;
}

const QuestionModal: ForwardRefRenderFunction<
  GorhomBottomSheetModal,
  PeriodFilterProps
> = ({ onDismiss, selected, onSelect, options }, ref) => {
  const handleChange = useCallback(
    (checked, key) => {
      onSelect(checked ? key : null);
    },
    [onSelect]
  );

  const mapper = useCallback(
    (key: string) => (
      <QuestionsItem
        checked={selected === key}
        key={key}
        label={key}
        onChange={handleChange}
      />
    ),
    [selected, handleChange]
  );

  const Options = useMemo(() => options?.map(mapper), [mapper, options]);

  return (
    <BottomSheetModal
      onDismiss={onDismiss}
      contentStyle={styles.content}
      snapToContent
      ref={ref}
      headerComponent={null}
    >
      <MultiSelect>{Options}</MultiSelect>
    </BottomSheetModal>
  );
};

export default forwardRef(QuestionModal);
