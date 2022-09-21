import { cloneElement, FC, memo, ReactElement, useMemo } from 'react';
import { ViewProps } from 'react-native';

import { IconProps } from '@app/components/Icon/types';

export interface IconComponentProps extends ViewProps {
  icon: ReactElement<IconProps>;
  tint: string;
}

// Clones the <Icon> in order to be
// able to pass in new props. (tint)
const IconComponent: FC<IconComponentProps> = ({ icon, tint }) => {
  const iconCopy = useMemo(() => icon && cloneElement(icon, { tint }), [
    icon,
    tint,
  ]);

  return iconCopy;
};

export default memo(IconComponent);
