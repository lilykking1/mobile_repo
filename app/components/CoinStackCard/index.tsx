import React, { FC, useMemo } from 'react';
import { TouchableOpacity, TouchableOpacityProps, View } from 'react-native';
import { Card, CoinStack, Quantity, Typography } from '@app/components';
import { isEmpty } from 'lodash';
import { ArrowContainer } from './components';

import { getPositionItems } from './utils';
import styles from './styles';

interface CoinStackCardProps extends TouchableOpacityProps {
  title: string;
  amount: string;
  percentage: string;
  amountPrecision?: number;
  percentagePrecision?: number;
  coins: string[];
  reverseValuePositions?: boolean;
  color?: string;
}

const CoinStackCard: FC<CoinStackCardProps> = ({
  title,
  amount,
  percentage,
  percentagePrecision = 2,
  amountPrecision = 2,
  coins,
  color,
  style,
  reverseValuePositions = false,
  ...rest
}) => {
  const custom = useMemo(() => [styles.button, style], [style]);
  const customBackgroundColor = useMemo(
    () => ({
      backgroundColor: color,
    }),
    [color]
  );

  const coinStack = useMemo(
    () =>
      isEmpty(coins) ? (
        <CoinStack.Empty size={24} />
      ) : (
        <CoinStack.Filled coins={coins} max={5} size={24} />
      ),
    [coins]
  );

  const RightContainer = useMemo(() => {
    const positionItemData = getPositionItems(
      amount,
      percentage,
      reverseValuePositions
    );

    return (
      <View style={styles.rightContainer}>
        <Quantity
          strong
          size="body1"
          value={positionItemData.above.value}
          prefix={positionItemData.above.prefix}
          suffix={positionItemData.above.suffix}
          useValueLabel={!reverseValuePositions}
          valueLabelVariant="normal"
          style={styles.cardPercentage}
          precision={percentagePrecision}
        />
        <Quantity
          strong
          size="body1"
          variant="grey.600"
          value={positionItemData.bellow.value}
          prefix={positionItemData.bellow.prefix}
          suffix={positionItemData.bellow.suffix}
          style={styles.cardPercentage}
          precision={amountPrecision}
        />
      </View>
    );
  }, [
    amount,
    amountPrecision,
    percentage,
    percentagePrecision,
    reverseValuePositions,
  ]);
  const showArrowContainer = useMemo(() => color, [color]);

  const customCardStyle = useMemo(() => {
    const paddingRight = showArrowContainer ? 40 : 18;
    return {
      paddingRight,
      ...styles.card,
    };
  }, [showArrowContainer]);

  return (
    <TouchableOpacity {...rest} activeOpacity={0.65} style={custom}>
      <Card style={customCardStyle}>
        <View style={styles.leftContainer}>
          <Typography strong size="body1" style={styles.cardTitle}>
            {title}
          </Typography>
          {coinStack}
        </View>

        {RightContainer}
      </Card>
      {showArrowContainer && <ArrowContainer style={customBackgroundColor} />}
    </TouchableOpacity>
  );
};

export default CoinStackCard;
