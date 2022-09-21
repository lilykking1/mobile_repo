import React, { FC, useCallback, useMemo, useState } from 'react';
import { View } from 'react-native';

import { Typography } from '@app/components';
import MultiSelect from '@app/components/MultiSelect/components/MultiSelect';

import ExampleSingleSelectItem from './ExampleSingleSelectItem';
import ExampleSingleSelectItemWithoutCheckIcon from './ExampleSingleSelectItemWithoutCheckIcon';
import { data } from '../../mock';
import styles from '../../styles';
import { getSelectedContainerStyles } from '../../utils';

const ExampleSingleSelect: FC = () => {
  const [selected, setSelected] = useState();

  const handleChange = useCallback((checked, value) => {
    setSelected(checked && value);
  }, []);

  const mapper = useCallback(
    ({ icon, label, value }) => (
      <ExampleSingleSelectItem
        checked={selected === value}
        icon={icon}
        key={value}
        label={label}
        value={value}
        onChange={handleChange}
      />
    ),
    [selected, handleChange]
  );

  const mapperWithouCheckIcon = useCallback(
    ({ icon, label, value }) => (
      <ExampleSingleSelectItemWithoutCheckIcon
        checked={selected === value}
        icon={icon}
        key={value}
        label={label}
        value={value}
        onChange={handleChange}
      />
    ),
    [selected, handleChange]
  );

  const selectedContainerStyles = useMemo(
    () => getSelectedContainerStyles(selected),
    [selected]
  );
  const selectedText = useMemo(() => selected && 'Selected:', [selected]);
  const selectedListText = useMemo(() => selected && selected, [selected]);

  return (
    <>
      <Typography size="h3" style={styles.title}>
        Single
      </Typography>
      <MultiSelect>{data.map(mapper)}</MultiSelect>
      <View style={selectedContainerStyles}>
        <Typography>{selectedText}</Typography>
        <Typography size="small">{selectedListText}</Typography>
      </View>

      <Typography size="h3" style={styles.title}>
        Single without check icon
      </Typography>
      <MultiSelect>{data.map(mapperWithouCheckIcon)}</MultiSelect>
      <View style={selectedContainerStyles}>
        <Typography>{selectedText}</Typography>
        <Typography size="small">{selectedListText}</Typography>
      </View>
    </>
  );
};

export default ExampleSingleSelect;
