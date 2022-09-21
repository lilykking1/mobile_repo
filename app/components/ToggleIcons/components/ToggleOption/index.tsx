import React, { FC, memo, useCallback, useMemo, ReactElement } from 'react';
import { View } from 'react-native';
import { noop } from 'lodash';

import { Options } from '@app/components/ToggleIcons/types';
import { IconProps } from '@app/components/Icon/types';

import getContainerWidth from './utils';
import styles from './styles';
import { CONTAINER_HEIGHT } from '../ToggleIcon/constants';

interface ToggleOptionProps {
  children?: ReactElement<IconProps>;
  option: Options;
  width?: number;
  onLayout?: (width: number, option: Options) => void;
}

const ToggleOption: FC<ToggleOptionProps> = ({
  children,
  option,
  width,
  onLayout = noop,
}) => {
  // TODO: We could add different sized containers here sm, md, lg
  const handleLayout = useCallback(() => {
    onLayout(CONTAINER_HEIGHT, option);
  }, [onLayout, option]);

  const containerStyle = useMemo(
    () => [styles.container, getContainerWidth(width)],
    [width]
  );

  return (
    <View style={containerStyle} onLayout={handleLayout}>
      {children}
    </View>
  );
};

export default memo(ToggleOption);
