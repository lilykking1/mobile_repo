import React, { FC, useCallback, useMemo } from 'react';
import { ViewProps } from 'react-native';
import { Icon, IconButton } from '@app/components';
import { palette } from '@app/theme';
import { TRANSACTION_STATUS } from '@app/models/Transactions';

interface RefreshButtonProps extends ViewProps {
  isDarkMode: boolean;
  isAllTransactionsSucceeded?: boolean;
  hasMultipleTransactions?: boolean;
  status?: TRANSACTION_STATUS;
}
const RefreshButton: FC<RefreshButtonProps> = ({
  isDarkMode,
  status,
  isAllTransactionsSucceeded,
  hasMultipleTransactions,
}) => {
  const iconTintColor = isDarkMode ? palette.grey[600] : palette.royalBlue[500];

  const refreshIcon = (
    <Icon.Retake tint={iconTintColor} width={20} height={20} />
  );

  const isProcessing = useMemo(() => status === TRANSACTION_STATUS.PROCESSING, [
    status,
  ]);

  const handleRefreshTransactionStatus = useCallback(() => {
    // TODO: Handle refresh transaction status by clicking on the IconButton.
  }, []);

  const shouldShowRefreshIcon =
    isProcessing || (hasMultipleTransactions && !isAllTransactionsSucceeded);

  if (shouldShowRefreshIcon) {
    return (
      <IconButton
        size="small"
        startIcon={refreshIcon}
        onPress={handleRefreshTransactionStatus}
      />
    );
  }

  return null;
};

export default RefreshButton;
