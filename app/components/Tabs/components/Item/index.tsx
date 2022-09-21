import React, { FC, useCallback, useContext, useMemo } from 'react';
import { LayoutChangeEvent, TouchableOpacity } from 'react-native';
import { observer } from 'mobx-react';
import { noop } from 'lodash';

import { Typography } from '@app/components';
import { RootContext } from '@app/state';

import { getContainerStyles, getLabelVariant } from './utils';
import styles from './styles';

type ItemProps = {
  selected?: boolean;
  selectedIndex?: number;
  index?: number;
  label: string;
  onPress?: (id: number | string) => void;
  onLayout?: (index: number, dimension: number) => void;
};

const Item: FC<ItemProps> = ({
  selected,
  selectedIndex,
  index,
  label,
  onLayout = noop,
  onPress = noop,
}) => {
  const {
    settingsStore: { theme },
  } = useContext(RootContext);

  const handleLayout = useCallback(
    ({ nativeEvent }: LayoutChangeEvent) => {
      const dimension = nativeEvent.layout.width;
      onLayout(index, dimension);
    },
    [index, onLayout]
  );

  const handlePress = useCallback(() => {
    onPress(index);
  }, [index, onPress]);

  const containerStyles = useMemo(
    () => [styles.container, getContainerStyles(selected)],
    [selected]
  );

  const labelVariant = useMemo(() => getLabelVariant(selected, theme), [
    selected,
    theme,
  ]);

  return (
    <TouchableOpacity
      accessibilityRole="tab"
      accessibilityState={{ selected }}
      style={containerStyles}
      onLayout={handleLayout}
      onPress={handlePress}
      disabled={selectedIndex === index}
    >
      <Typography
        strong
        size="buttons"
        variant={labelVariant}
        style={styles.label}
      >
        {label}
      </Typography>
    </TouchableOpacity>
  );
};

export default observer(Item);
