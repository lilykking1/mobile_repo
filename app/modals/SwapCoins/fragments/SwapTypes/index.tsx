import React, { FC, useCallback, useContext, useMemo } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { observer } from 'mobx-react';
import { RootContext } from '@app/state';
import { DoubleChevronRight } from '@app/components/Icon';
import { palette } from '@app/theme';
import { Background, Typography } from '@app/components';

import { CoinSwipeType } from '../../types';
import styles from './styles';
import { swapLeftElements, swapRightElements } from './utils';

interface SwapTypesProps {
  type: CoinSwipeType;
  title: string;
  onPress: () => void;
}

const SwapTypes: FC<SwapTypesProps> = ({ type, onPress, title }) => {
  const {
    settingsStore: { theme },
  } = useContext(RootContext);

  const renderRightElements = useCallback(() => swapRightElements(type), [
    type,
  ]);

  const renderLeftElements = useCallback(() => swapLeftElements(type), [type]);

  const isDarkTheme = useMemo(() => theme === 'dark', [theme]);

  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.7}>
      <Background secondary={isDarkTheme} style={styles.container}>
        <View style={styles.rowItems}>
          {renderLeftElements()}
          <View style={styles.arrowContainer}>
            <DoubleChevronRight width={15} tint={palette.grey[500]} />
          </View>
          {renderRightElements()}
        </View>
        <Typography size="h6" strong>
          {title}
        </Typography>
      </Background>
    </TouchableOpacity>
  );
};

export default observer(SwapTypes);
