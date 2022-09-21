import React, { FC, useCallback } from 'react';
import { noop } from 'lodash';

import { MultiSelectItem } from '@app/components';
import { OptionItem } from '../../types';

interface OptionSortItemProps {
  checked: boolean;
  optionItem: OptionItem;
  onChange?: (checked: boolean, optionItem: OptionItem) => void;
}

const OptionSortItem: FC<OptionSortItemProps> = ({
  checked,
  optionItem,
  onChange = noop,
}) => {
  const handleChange = useCallback(
    (newChecked: boolean) => {
      onChange(newChecked, optionItem);
    },
    [onChange, optionItem]
  );

  return (
    <MultiSelectItem
      checked={checked}
      key={optionItem.id}
      label={optionItem.label}
      icon={optionItem.icon}
      onChange={handleChange}
      iconPosition="right"
    />
  );
};

export default OptionSortItem;
