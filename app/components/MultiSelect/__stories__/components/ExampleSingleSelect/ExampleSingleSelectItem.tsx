import React, { FC, useCallback } from 'react';

import MultiSelectItem from '@app/components/MultiSelect/components/MultiSelectItem';

interface ExampleSingleSelectItemProps {
  checked: boolean;
  icon: React.ReactElement<any>;
  label: string;
  value: string;
  onChange?: (checked: boolean, value: string) => void;
}

const ExampleSingleSelectItem: FC<ExampleSingleSelectItemProps> = ({
  checked,
  icon,
  label,
  value,
  onChange,
}) => {
  const handleChange = useCallback((tf) => onChange(tf, value), [
    value,
    onChange,
  ]);

  return (
    <MultiSelectItem
      checked={checked}
      icon={icon}
      key={value}
      label={label}
      onChange={handleChange}
    />
  );
};

export default ExampleSingleSelectItem;
