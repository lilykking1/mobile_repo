import React, { FC, ReactElement, useContext, useMemo } from 'react';
import { Pressable, ViewStyle } from 'react-native';
import { observer } from 'mobx-react';
import { isEmpty } from 'lodash';
import { TypographyVariant } from '@app/components/Typography/types';
import { Typography } from '@app/components';
import { RootContext } from '@app/state';
import Background from '@app/components/Background';
import { IconProps } from '@app/components/Icon/types';

import { IconButtonSize, PressablePropsAndColors } from './types';
import styles from './styles';
import {
  getSizeStyle,
  getPressedStyle,
  getDisabledStyle,
  getIconTint,
  getLabelVariant,
  getLabelSize,
} from './utils';
import IconComponent from './components/IconComponent';

interface IconButtonProps extends PressablePropsAndColors {
  disabled?: boolean;
  size?: IconButtonSize;
  containerStyle?: ViewStyle;
  startIcon?: ReactElement<IconProps>;
  endIcon?: ReactElement<IconProps>;
  label?: string;
  extraLabelStyle?: ViewStyle;
  typographyAltLight?: TypographyVariant;
  typographyAltDark?: TypographyVariant;
}

const IconButton: FC<IconButtonProps> = ({
  disabled,
  size,
  containerStyle,
  altLight,
  altDark,
  startIcon,
  endIcon,
  label,
  extraLabelStyle,
  typographyAltLight,
  typographyAltDark,
  ...rest
}) => {
  const {
    settingsStore: { theme },
  } = useContext(RootContext);

  const buttonStyle = (pressed: boolean) => [
    styles.base,
    getSizeStyle(size),
    getPressedStyle(theme, pressed),
    getDisabledStyle(theme, disabled),
    containerStyle,
  ];

  const Label = () => {
    if (isEmpty(label)) {
      return null;
    }

    const variant = getLabelVariant(theme, disabled);
    const labelSize = getLabelSize(size);
    const labelStyle = [styles.text, extraLabelStyle];

    return (
      <Typography
        variant={variant}
        altLight={typographyAltLight}
        altDark={typographyAltDark}
        size={labelSize}
        style={labelStyle}
      >
        {startIcon && ' '}
        {label}
        {endIcon && ' '}
      </Typography>
    );
  };

  const iconTint = getIconTint(theme, disabled);

  const StartIconView = useMemo(
    () =>
      startIcon && (
        <IconComponent icon={startIcon} tint={iconTint} isDisabled={disabled} />
      ),
    [disabled, iconTint, startIcon]
  );

  const EndIconView = useMemo(
    () =>
      endIcon && (
        <IconComponent icon={endIcon} tint={iconTint} isDisabled={disabled} />
      ),
    [disabled, endIcon, iconTint]
  );

  return (
    <Pressable disabled={disabled} {...rest}>
      {({ pressed }) => (
        <Background
          altLight={altLight}
          altDark={altDark}
          style={buttonStyle(pressed)}
        >
          {StartIconView}
          <Label />
          {EndIconView}
        </Background>
      )}
    </Pressable>
  );
};

export default observer(IconButton);
