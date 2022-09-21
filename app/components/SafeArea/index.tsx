import React, { FC, useMemo } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

import Background from '@app/components/Background';

import styles from './styles';
import { ViewPropsAndColors } from './types';

interface SafeAreaProps extends ViewPropsAndColors {
  secondary?: boolean;
}

const SafeArea: FC<SafeAreaProps> = ({
  children,
  style,
  secondary,
  altLight,
  altDark,
  ...props
}) => {
  const custom = useMemo(() => [styles.container, style], [style]);

  return (
    <Background
      secondary={secondary}
      altLight={altLight}
      altDark={altDark}
      style={styles.container}
    >
      <SafeAreaView style={custom} {...props}>
        {children}
      </SafeAreaView>
    </Background>
  );
};

export default SafeArea;
