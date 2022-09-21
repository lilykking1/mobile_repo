import React, {
  forwardRef,
  ForwardRefRenderFunction,
  useCallback,
  useMemo,
} from 'react';
import { BottomSheetModal as GorhomBottomSheetModal } from '@gorhom/bottom-sheet';

import { translate } from '@app/i18n';
import { MultiSelect } from '@app/components';
import BottomSheetModal, {
  BottomSheetModalProps,
} from '@app/components/BottomSheetModal';

import { PeriodItem } from './fragments';
import Header from './fragments/Header';
import styles from './styles';

interface PeriodFilterProps extends BottomSheetModalProps {
  selected: string;
  onSelect: (value: string) => void;
}

const PeriodFilter: ForwardRefRenderFunction<
  GorhomBottomSheetModal,
  PeriodFilterProps
> = ({ selected, onSelect }, ref) => {
  const periods: string[] = useMemo(
    () => [
      translate('modals.Interval.24hours'),
      translate('modals.Interval.1week'),
      translate('modals.Interval.1month'),
      translate('modals.Interval.3months'),
      translate('modals.Interval.year'),
      translate('modals.Interval.5years'),
      translate('modals.Interval.allTime'),
    ],
    []
  );

  const handleChange = useCallback(
    (checked, key) => {
      onSelect(checked ? key : translate('modals.Interval.allTime'));
    },
    [onSelect]
  );

  const mapper = useCallback(
    (key: string) => (
      <PeriodItem
        checked={selected === key}
        key={key}
        label={key}
        onChange={handleChange}
      />
    ),
    [selected, handleChange]
  );

  return (
    <BottomSheetModal
      contentStyle={styles.content}
      snapToContent
      ref={ref}
      headerComponent={<Header />}
    >
      <MultiSelect>{periods.map(mapper)}</MultiSelect>
    </BottomSheetModal>
  );
};

export default forwardRef(PeriodFilter);
