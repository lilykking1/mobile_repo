import React, { FC, useMemo, useCallback } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { useBraze } from '@app/hooks';
import { Typography, Card, Icon, Button } from '@app/components';
import { palette } from '@app/theme';
import { translate } from '@app/i18n';
import { ButtonVariant } from '@app/components/Buttons/Button/types';
import { logAmplitudeEvent } from '@app/utils/amplitude';
import { getBrazeEvent } from '@app/utils/braze/events/dashboard';
import { getAmplitudeEvent } from '@app/utils/amplitude/constants/dashboard/events';
import { ManagedPortfolioStatus } from '../../types';

import styles from './styles';
import {
  getMessage,
  getActionLabel,
  getActionVariant,
  getDetail,
  getActionContainerStyle,
} from './utils';

export interface EmptyProps {
  status?: ManagedPortfolioStatus;
}

const Empty: FC<EmptyProps> = ({
  status = ManagedPortfolioStatus.NOT_STARTED,
}) => {
  const { logBrazeCustomEvent } = useBraze();
  // it will goes to / begins the MP configuration flow
  const handlePressAction = useCallback(() => {
    const brazeEvent = getBrazeEvent(status);
    logBrazeCustomEvent(brazeEvent);
    const amplitudeEvent = getAmplitudeEvent(status);
    logAmplitudeEvent(amplitudeEvent);
  }, [status, logBrazeCustomEvent]);

  const message = useMemo(() => getMessage(status), [status]);

  const actionLabel = useMemo(() => getActionLabel(status), [status]);

  const actionVariant: ButtonVariant = useMemo(() => getActionVariant(status), [
    status,
  ]);

  const actionContainerStyle = useMemo(() => getActionContainerStyle(status), [
    status,
  ]);

  const cardDetail = useMemo(() => getDetail(status), [status]);

  return (
    <Card usePadding={false} size="large" style={styles.container}>
      <View style={styles.row}>
        <Typography
          strong
          style={styles.title}
          size="h6"
          variant="secondary.900"
        >
          {translate('screens.dashboard.cards.managedPortfolio.title')}
        </Typography>

        <TouchableOpacity onPress={handlePressAction}>
          <Icon.ChevronRight tint={palette.grey[500]} />
        </TouchableOpacity>
      </View>

      <View style={styles.messageContainer}>
        <Typography style={styles.message} variant="grey.600" size="buttons">
          {message}
        </Typography>
      </View>

      <View style={actionContainerStyle}>
        <Button
          onPress={handlePressAction}
          label={actionLabel}
          variant={actionVariant}
          useDefaultLineHeight={false}
        />
      </View>

      <View style={styles.detailContainer}>{cardDetail}</View>
    </Card>
  );
};

export default Empty;
