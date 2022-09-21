import React, {
  forwardRef,
  ForwardRefRenderFunction,
  useCallback,
  useMemo,
} from 'react';
import { BottomSheetModal as GorhomBottomSheetModal } from '@gorhom/bottom-sheet';

import { translate } from '@app/i18n';
import { MultiSelect, Icon } from '@app/components';
import BottomSheetModal, {
  BottomSheetModalProps,
} from '@app/components/BottomSheetModal';
import { palette } from '@app/theme';

import OptionSortItem from './fragments/OptionSortItem';
import { OptionIds, OptionItem } from './types';
import Header from './fragments/Header';
import styles from './styles';

interface SortByProps extends BottomSheetModalProps {
  selected: string;
  onSelect: (value: string) => void;
}

const SortModal: ForwardRefRenderFunction<
  GorhomBottomSheetModal,
  SortByProps
> = ({ selected, onSelect }, ref) => {
  const sortOptions: OptionItem[] = useMemo(
    () => [
      {
        id: OptionIds.SORT_BY_NAME_ASC,
        label: translate('modals.sortBy.menuOptions.sortAtoZ'),
        icon: null,
      },
      {
        id: OptionIds.SORT_BY_NAME_DESC,
        label: translate('modals.sortBy.menuOptions.sortZtoA'),
        icon: null,
      },
      {
        id: OptionIds.SORT_BY_PRICE_ASC,
        label: translate('modals.sortBy.menuOptions.price'),
        icon: <Icon.CaretUp tint={palette.royalBlue[900]} />,
      },
      {
        id: OptionIds.SORT_BY_PRICE_DESC,
        label: translate('modals.sortBy.menuOptions.price'),
        icon: <Icon.CaretDown tint={palette.royalBlue[900]} />,
      },
      {
        id: OptionIds.SORT_BY_MARKET_CAP_ASC,
        label: translate('modals.sortBy.menuOptions.marketCap'),
        icon: <Icon.CaretUp tint={palette.royalBlue[900]} />,
      },
      {
        id: OptionIds.SORT_BY_MARKET_CAP_DESC,
        label: translate('modals.sortBy.menuOptions.marketCap'),
        icon: <Icon.CaretDown tint={palette.royalBlue[900]} />,
      },
      {
        id: OptionIds.SORT_BY_VOLUME_ASC,
        label: translate('modals.sortBy.menuOptions.volume24H'),
        icon: <Icon.CaretUp tint={palette.royalBlue[900]} />,
      },
      {
        id: OptionIds.SORT_BY_VOLUME_DESC,
        label: translate('modals.sortBy.menuOptions.volume24H'),
        icon: <Icon.CaretDown tint={palette.royalBlue[900]} />,
      },
    ],
    []
  );

  const handleChange = useCallback(
    (checked, sortOption) => {
      onSelect(checked ? sortOption.id : 'sortAtoZ');
    },
    [onSelect]
  );

  const mapper = useCallback(
    (sortOption) => (
      <OptionSortItem
        checked={selected === sortOption.id}
        key={sortOption.id}
        optionItem={sortOption}
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
      <MultiSelect>{sortOptions.map(mapper)}</MultiSelect>
    </BottomSheetModal>
  );
};

export default forwardRef(SortModal);
