import React, { FC } from 'react';
import { TouchableOpacity, TouchableOpacityProps } from 'react-native';

import { Typography } from '@app/components';
import { LinkSize, LinkVariant } from './types';
import { getLinkStyle, getLabelStyle } from './utils';

interface LinkProps extends TouchableOpacityProps {
  label: string;
  size?: LinkSize;
  underlined?: boolean;
  variant?: LinkVariant;
}

const Link: FC<LinkProps> = ({ label, size, variant, underlined, ...rest }) => {
  const labelStyle = getLabelStyle(variant, size);
  const linkStyle = getLinkStyle(variant, underlined);

  return (
    <TouchableOpacity activeOpacity={0.75} style={linkStyle} {...rest}>
      <Typography style={labelStyle}>{label}</Typography>
    </TouchableOpacity>
  );
};

export default Link;
