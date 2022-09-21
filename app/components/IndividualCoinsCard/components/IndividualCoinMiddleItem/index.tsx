import React, { FC } from 'react';
import { View } from 'react-native';
import { Icon, Typography } from '@app/components';
import { palette } from '@app/theme';

import styles from './styles';

interface IndividualCoinMiddleItemProps {
  lendingPercentage: string;
  isLending?: boolean;
}

const IndividualCoinMiddleItem: FC<IndividualCoinMiddleItemProps> = ({
  lendingPercentage,
  isLending = false,
}) => {
  const emptyLending = (
    <View style={styles.middleItemContainer}>
      <View style={styles.empty} />
    </View>
  );

  const populatedLending = (
    <View style={styles.middleItemContainer}>
      <View style={styles.iconContainer}>
        <Icon.Check width={8} height={8} tint={palette.green[500]} />
      </View>
      <Typography size="buttons" strong>
        {`${lendingPercentage}%`}
      </Typography>
    </View>
  );

  return isLending ? populatedLending : emptyLending;
};

export default IndividualCoinMiddleItem;
