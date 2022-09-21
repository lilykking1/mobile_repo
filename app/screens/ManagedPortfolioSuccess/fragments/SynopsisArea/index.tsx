import React, { FC, useEffect, useState } from 'react';

import { Typography } from '@app/components';
import { translate } from '@app/i18n';

import { View } from 'react-native';
import { noop } from 'lodash';
import styles from './styles';
import { getSynopsis } from './utils';

interface SynopsisAreaProps {
  riskNumber: number;
}

const SynopsisArea: FC<SynopsisAreaProps> = ({ riskNumber }) => {
  const [description, setDescription] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const synopsis = await getSynopsis(riskNumber);
      setDescription(synopsis);
    };
    // TODO handle when there is an error
    fetchData().catch(noop);
  }, [riskNumber]);

  return (
    <View style={styles.container}>
      <Typography size="h6" strong style={styles.title}>
        {translate('screens.managedPortfolioSuccess.synopsis')}
      </Typography>
      <Typography altDark="grey.600" size="body1">
        {description}
      </Typography>
    </View>
  );
};

export default SynopsisArea;
