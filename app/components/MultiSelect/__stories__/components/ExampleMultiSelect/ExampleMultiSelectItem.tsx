import React, { FC, useState } from 'react';
import { noop } from 'lodash';

import MultiSelectItem from '@app/components/MultiSelect/components/MultiSelectItem';

interface ExampleMultiSelectItemProps {
  checked: boolean;
  icon: React.ReactElement<any>;
  label: string;
  value: string;
  onChange?: (checked: boolean, value: string) => void;
}

const ExampleMultiSelectItem: FC<ExampleMultiSelectItemProps> = ({
  checked,
  icon,
  label,
  value,
  onChange = noop,
}) => {
  const [state, setState] = useState(checked || false);

  const handleChange = () => {
    const newState = !state;
    setState(newState);
    onChange(newState, value);
  };

  return (
    <MultiSelectItem
      checked={state}
      icon={icon}
      key={value}
      label={label}
      multiple
      onChange={handleChange}
    />
  );
};

export default ExampleMultiSelectItem;
