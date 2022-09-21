import { isEmpty } from 'lodash';

import styles from './styles';

export const getValuesContainerStyles = (values?: string[]) =>
  !isEmpty(values) && styles.valuesContainer;

export const getSelectedContainerStyles = (selected?: string) =>
  selected && styles.valuesContainer;
