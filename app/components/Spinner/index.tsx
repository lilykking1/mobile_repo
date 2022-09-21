import React, { FC } from 'react';
import { ActivityIndicator, ActivityIndicatorProps } from 'react-native';

import { palette } from '@app/theme';

const Spinner: FC<ActivityIndicatorProps> = (props) => (
  <ActivityIndicator color={palette.purpleRoyal} {...props} />
);

export default Spinner;
