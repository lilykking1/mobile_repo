import React, { FC, useCallback, useMemo } from 'react';
import { Pressable, View, ViewProps } from 'react-native';
import { noop } from 'lodash';

import { Typography, Divider } from '@app/components';
import {
  TypographySize,
  TypographyVariant,
} from '@app/components/Typography/types';
import { IconProps } from '@app/components/Icon/types';

import { MultiSelectCheckbox, MultiSelectCheck } from '..';
import styles from './styles';
import {
  getCheckboxStyles,
  getContainerStyles,
  getIconDirection,
  getIconMargin,
  getIconFlexDirection,
} from './utils';

export interface MultiSelectItemProps extends ViewProps {
  checked?: boolean;
  icon?: React.ReactElement<IconProps>;
  iconPosition?: 'right' | 'left';
  label?: string;
  multiple?: boolean;
  useCheckIcon?: boolean;
  textVariant?: TypographyVariant;
  size?: TypographySize;
  onChange?: (checked: boolean) => void;
}

const MultiSelectItem: FC<MultiSelectItemProps> = ({
  checked,
  icon,
  iconPosition = 'left',
  useCheckIcon = true,
  label,
  multiple = false,
  textVariant = '',
  size = 'body1',
  style,
  onChange = noop,
  ...rest
}) => {
  const iconDirection = useMemo(() => getIconDirection(iconPosition), [
    iconPosition,
  ]);
  const iconMargin = useMemo(() => getIconMargin(iconPosition), [iconPosition]);
  const iconFlexDirection = useMemo(() => getIconFlexDirection(iconPosition), [
    iconPosition,
  ]);

  const containerStyles = useMemo(
    () => getContainerStyles(checked, style, useCheckIcon),
    [checked, style, useCheckIcon]
  );

  const labelStyles = useMemo(() => styles.label, []);

  const checkboxStyles = useMemo(
    () => getCheckboxStyles(multiple, checked, useCheckIcon),
    [checked, multiple, useCheckIcon]
  );

  // Clone icon prop in order to pass size arguments
  const iconComponent = useMemo(
    () =>
      icon &&
      React.cloneElement(icon as React.ReactElement<IconProps>, {
        height: 20,
        width: 20,
      }),
    [icon]
  );

  const handlePress = useCallback(() => {
    onChange(!checked);
  }, [onChange, checked]);

  const CheckboxIcon = useMemo(() => {
    if (checked) {
      return MultiSelectCheck;
    }

    return MultiSelectCheckbox;
  }, [checked]);

  return (
    <Pressable onPress={handlePress}>
      <View style={containerStyles} {...rest}>
        <View style={[styles.iconLabelContainer, iconDirection]}>
          {iconComponent ? (
            <View style={iconMargin}>{iconComponent}</View>
          ) : null}
          <Typography
            style={[labelStyles, iconFlexDirection]}
            strong
            size={size}
            variant={textVariant}
          >
            {label}
          </Typography>
        </View>
        <View style={checkboxStyles}>
          <CheckboxIcon />
        </View>
      </View>
      <Divider />
    </Pressable>
  );
};

export default MultiSelectItem;
