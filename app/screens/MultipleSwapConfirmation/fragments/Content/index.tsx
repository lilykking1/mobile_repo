import React, { FC } from 'react';
import { View } from 'react-native';

import { AssetsVariationTable, Typography } from '@app/components';
import { AssetVariation } from '@app/models';
import { translate } from '@app/i18n';

import styles from './styles';

interface ContentProps {
  assetsList: AssetVariation[];
}

const Content: FC<ContentProps> = ({ assetsList }) => (
  <View style={styles.container}>
    <Typography size="h4" style={styles.message}>
      {translate('swap.confirmations.multiple.confirmationMessage')}
    </Typography>

    <AssetsVariationTable assetsList={assetsList} />
  </View>
);

export default Content;
