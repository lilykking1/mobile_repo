import React, { FC, useCallback } from 'react';
import { noop } from 'lodash';

import { MultiSelectItem } from '@app/components';

interface LocationItemProps {
  checked: boolean;
  label: string;
  onChange?: (checked: boolean, value: string) => void;
}

const LocationItem: FC<LocationItemProps> = ({
  checked,
  label,
  onChange = noop,
}) => {
  const handleChange = useCallback(
    (newChecked: boolean) => {
      onChange(newChecked, label);
    },
    [onChange, label]
  );

  return (
    <MultiSelectItem
      checked={checked}
      key={label}
      label={label}
      onChange={handleChange}
    />
  );
};

export default LocationItem;
