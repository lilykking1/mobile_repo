import React, { FC, useMemo } from 'react';
import { Quantity, Typography } from '@app/components';
import { getValue } from '../../utils';

interface CardContentProps {
  amount: string;
  isOnline: boolean;
  isSecret: boolean;
  stackedWallet: boolean;
}

const CardContent: FC<CardContentProps> = ({
  amount,
  isOnline,
  isSecret,
  stackedWallet,
}) => {
  const cardValue = useMemo(() => getValue(amount, isOnline, stackedWallet), [
    amount,
    isOnline,
    stackedWallet,
  ]);

  if (!isOnline) {
    return (
      <Typography size="body1" numberOfLines={1}>
        {cardValue}
      </Typography>
    );
  }
  return (
    <Quantity
      size="body1"
      strong={false}
      value={cardValue}
      prefix="$"
      isSecret={isSecret}
    />
  );
};

export default CardContent;
