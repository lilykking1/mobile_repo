import React, { FC, useContext, useMemo } from 'react';
import { LayoutChangeEvent, View } from 'react-native';
import { observer } from 'mobx-react';
import Animated, { useAnimatedStyle } from 'react-native-reanimated';
import { Icon, IconButton, Typography } from '@app/components';
import { palette } from '@app/theme';
import { RootContext } from '@app/state';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import {
  interpolateLightHeaderBorderColor,
  interpolateDarkHeaderBorderColor,
  interpolateHeaderButtonColor,
  interpolateHeaderColor,
  interpolateTitleOpacity,
} from './animations';
import { getIconTint } from './utils';
import styles from './styles';
import { DEFAULT_TRESHOLD } from './constants';

export interface SimpleHeaderProps {
  title: string;
  scrollPosition?: Animated.SharedValue<number>;
  onPressBack?: () => void;
  isCollapsedTitle?: boolean;
  handleHeaderLayout?: ({ nativeEvent }: LayoutChangeEvent) => void;
  isSwapHeader?: boolean;
  threshold?: number;
}

const SimpleHeader: FC<SimpleHeaderProps> = ({
  title,
  scrollPosition,
  onPressBack,
  isCollapsedTitle = false,
  handleHeaderLayout,
  isSwapHeader = false,
  threshold = DEFAULT_TRESHOLD,
  children,
}) => {
  const {
    settingsStore: { theme },
  } = useContext(RootContext);
  const iconColor = useMemo(() => getIconTint(theme), [theme]);
  const insets = useSafeAreaInsets();

  const containerStyle = [
    styles.container,
    { marginBottom: isSwapHeader ? 0 : 15 },
  ];

  const headerStyle = { paddingTop: insets.top };
  const animatedHeaderStyle = useAnimatedStyle(() => {
    if (theme === 'light') {
      return {
        backgroundColor: palette.transparent,
        borderBottomWidth: 1,
        borderColor: interpolateLightHeaderBorderColor(
          scrollPosition.value,
          threshold
        ),
      };
    }
    return {
      backgroundColor: interpolateHeaderColor(scrollPosition.value, threshold),
      borderBottomWidth: 1,
      borderColor: interpolateDarkHeaderBorderColor(
        scrollPosition.value,
        threshold
      ),
    };
  });

  const animatedHeaderButtonStyle = useAnimatedStyle(() => {
    if (theme === 'light') {
      return {
        backgroundColor: palette.grey[300],
      };
    }
    return {
      backgroundColor: interpolateHeaderButtonColor(
        scrollPosition.value,
        threshold
      ),
    };
  });

  const animatedTitleStyle = useAnimatedStyle(() => {
    if (isCollapsedTitle) {
      return {
        opacity: interpolateTitleOpacity(scrollPosition.value, threshold),
      };
    }
    return {
      opacity: 1,
    };
  });

  const iconHeader = (
    <Icon.ChevronLeft width={16} height={16} tint={iconColor} />
  );

  return (
    <Animated.View
      style={[animatedHeaderStyle, headerStyle]}
      onLayout={handleHeaderLayout}
    >
      <View style={containerStyle}>
        <Animated.View style={[styles.iconBtn, animatedHeaderButtonStyle]}>
          <IconButton
            containerStyle={styles.iconBtn}
            startIcon={iconHeader}
            onPress={onPressBack}
          />
        </Animated.View>
        <Animated.View
          pointerEvents="none"
          style={[animatedTitleStyle, styles.headerTitle]}
        >
          <Typography size="h6" strong>
            {title}
          </Typography>
        </Animated.View>
      </View>
      {children}
    </Animated.View>
  );
};

export default observer(SimpleHeader);
