import React, { FC, useCallback, useMemo, useState } from 'react';
import { View } from 'react-native';
import { isEmpty } from 'lodash';

import { Typography } from '@app/components';

import MultiSelect from '../../../components/MultiSelect';
import ExampleMultiSelectItem from './ExampleMultiSelectItem';
import { data } from '../../mock';
import styles from '../../styles';
import { getValuesContainerStyles } from '../../utils';

const ExampleMultiSelect: FC = () => {
  const [values, setValues] = useState([]);

  const addItem = (item) => {
    setValues((prevState) => [...prevState, item]);
  };

  const removeItem = (item) => {
    setValues((prevState) =>
      prevState.filter((stateItem) => stateItem !== item)
    );
  };

  const handleChange = useCallback(
    (checked, value) => (checked ? addItem(value) : removeItem(value)),
    []
  );

  const mapper = useCallback(
    ({ icon, label, value }) => (
      <ExampleMultiSelectItem
        checked={false}
        icon={icon}
        key={value}
        label={label}
        value={value}
        onChange={handleChange}
      />
    ),
    [handleChange]
  );

  const valuesContainerStyles = useMemo(
    () => getValuesContainerStyles(values),
    [values]
  );
  const valuesText = useMemo(() => !isEmpty(values) && 'Values:', [values]);
  const valuesListText = useMemo(() => !isEmpty(values) && values.join(', '), [
    values,
  ]);

  return (
    <>
      <Typography size="h3" style={styles.title}>
        Multiple
      </Typography>
      <MultiSelect>{data.map(mapper)}</MultiSelect>
      <View style={valuesContainerStyles}>
        <Typography>{valuesText}</Typography>
        <Typography size="small">{valuesListText}</Typography>
      </View>
    </>
  );
};

export default ExampleMultiSelect;
