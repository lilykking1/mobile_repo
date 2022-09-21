import React, {
  forwardRef,
  ForwardRefRenderFunction,
  useCallback,
} from 'react';
import { BottomSheetModal as GorhomBottomSheetModal } from '@gorhom/bottom-sheet';

import { translate } from '@app/i18n';
import { MultiSelect } from '@app/components';
import BottomSheetModal, {
  BottomSheetModalProps,
} from '@app/components/BottomSheetModal';

import { LocationItem } from './fragments';
import Header from './fragments/Header';
import { getLocationList } from './utils';
import styles from './styles';

interface LocationSelectorProps extends BottomSheetModalProps {
  selected: string;
  onSelect: (value: string) => void;
  selectorType: string;
  countrySelected: string;
}

const LocationSelector: ForwardRefRenderFunction<
  GorhomBottomSheetModal,
  LocationSelectorProps
> = ({ countrySelected, selected, selectorType, onSelect }, ref) => {
  const listSelected = getLocationList(selectorType, countrySelected);

  const handleChange = useCallback(
    (checked, key) => {
      onSelect(checked ? key : translate('modals.countrySelector.title'));
    },
    [onSelect]
  );

  const mapper = useCallback(
    (key: string) => (
      <LocationItem
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
      ref={ref}
      headerComponent={<Header title={listSelected.title} />}
    >
      <MultiSelect testID="Modal.LocationSelector">
        {listSelected.list.map(mapper)}
      </MultiSelect>
    </BottomSheetModal>
  );
};

export default forwardRef(LocationSelector);
