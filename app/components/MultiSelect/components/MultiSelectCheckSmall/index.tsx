import React, { FC } from 'react';

import { Icon } from '@app/components';
import { palette } from '@app/theme';

import { MultiSelectSmallCheckProps } from './types';
import styles from './styles';
import MultiSelectCheckbox from '../MultiSelectCheckbox';

const MultiSelectCheckSmall: FC<MultiSelectSmallCheckProps> = ({ tint }) => (
  <MultiSelectCheckbox style={styles.container}>
    <Icon.Check tint={tint || palette.white} width={15} height={15} />
  </MultiSelectCheckbox>
);

export default MultiSelectCheckSmall;
