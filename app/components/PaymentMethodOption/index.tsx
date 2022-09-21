import React, { FC, useContext, useMemo } from 'react';
import {
  ImageSourcePropType,
  View,
  Image,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';
import { Divider, Icon, Typography } from '@app/components';
import { observer } from 'mobx-react';
import { RootContext } from '@app/state';

import { styles } from './styles';
import { getCheckIconTint, getContainerStyle } from './utils';
import { DEFAULT_OPACITY } from './constants';

interface PaymentMethodOptionProps extends TouchableOpacityProps {
  imageSource: ImageSourcePropType;
  title: string;
  description: string;
  selected?: boolean;
  isLastItem?: boolean;
  isKeyboardOpen?: boolean;
}

const PaymentMethodOption: FC<PaymentMethodOptionProps> = ({
  imageSource,
  title,
  description,
  isLastItem,
  selected = false,
  isKeyboardOpen = false,
  ...rest
}) => {
  const {
    settingsStore: { theme },
  } = useContext(RootContext);

  const checkIconTint = useMemo(() => getCheckIconTint(theme), [theme]);
  const containerStyle = useMemo(() => getContainerStyle(isKeyboardOpen), [
    isKeyboardOpen,
  ]);

  const shouldDisplay = !isKeyboardOpen || selected;

  if (!shouldDisplay) {
    return null;
  }

  return (
    <TouchableOpacity
      activeOpacity={DEFAULT_OPACITY}
      style={containerStyle}
      {...rest}
    >
      <Image accessibilityIgnoresInvertColors source={imageSource} />
      <View style={styles.infoContainer}>
        <View style={styles.paymentMethodContainer}>
          <Typography size="body1" strong>
            {title}
          </Typography>
          {selected && <Icon.Check tint={checkIconTint} />}
        </View>
        {!isKeyboardOpen && (
          <Typography
            variant="grey.600"
            size="body2"
            style={styles.description}
          >
            {description}
          </Typography>
        )}
        {!isLastItem && !isKeyboardOpen && <Divider />}
      </View>
    </TouchableOpacity>
  );
};

export default observer(PaymentMethodOption);
