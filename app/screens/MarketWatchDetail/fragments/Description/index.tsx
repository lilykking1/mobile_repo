import React, { FC } from 'react';
import { View } from 'react-native';
import { CollapsibleText } from '@app/components';

import styles from './styles';

interface DescriptionProps {
  description: string;
}

const Description: FC<DescriptionProps> = ({ description }) => (
  <View style={styles.descriptionSection}>
    <CollapsibleText numberOfLines={3}>{description}</CollapsibleText>
  </View>
);

export default Description;
