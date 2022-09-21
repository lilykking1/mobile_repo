import React, { FC, ReactElement, useContext, useMemo } from 'react';
import { StyleProp, TextStyle, View, ViewProps, ViewStyle } from 'react-native';
import { Shadow } from 'react-native-shadow-2';
import { translate } from '@app/i18n';
import {
  getLabelContainerStyleByTheme,
  getLabelLetterSpacing,
  getLabelPaddingLeft,
  getLabelSize,
  getPaddingBase,
  getPaddingContent,
  getValueHeight,
  getValueLineHeight,
  getValueSize,
} from '@app/components/RiskCard/utils';
import { RiskCardSize } from '@app/components/RiskCard/types';
import { palette } from '@app/theme';
import { RootContext } from '@app/state';
import { observer } from 'mobx-react';
import {
  SHADOW_COLOR_WITH_ALPHA,
  SHADOW_DISTANCE,
  SHADOW_OFFSET_X,
  SHADOW_OFFSET_Y,
} from './constants';
import styles from './styles';
import Typography from '../Typography';

interface RiskCardProps extends ViewProps {
  value: number;
  size: RiskCardSize;
  label?: ReactElement;
  noShadow?: boolean;
  style?: ViewStyle;
}

const RiskCard: FC<RiskCardProps> = ({
  value,
  size,
  label,
  noShadow,
  style,
}) => {
  const {
    settingsStore: { theme },
  } = useContext(RootContext);

  const labelStyle = useMemo(() => getLabelContainerStyleByTheme(theme), [
    theme,
  ]);

  const styleBase = useMemo(
    () => [
      {
        ...styles.base,
        padding: getPaddingBase(size),
      },
      style,
    ],
    [size, style]
  );

  const styleContent = useMemo(
    () => ({
      ...styles.content,
      paddingVertical: getPaddingContent(size),
    }),
    [size]
  );

  const styleLabel = useMemo(
    () => ({
      ...styles.labelTypography,
      letterSpacing: getLabelLetterSpacing(size),
      paddingLeft: getLabelPaddingLeft(size),
    }),
    [size]
  );

  const valueContent = useMemo(() => {
    const styleValue: StyleProp<TextStyle> = {
      ...styles.typographyFixedHeight,
      lineHeight: getValueLineHeight(size),
      height: getValueHeight(size),
    };

    return (
      <Typography
        strong
        size={getValueSize(size)}
        variant="black"
        numberOfLines={1}
        style={styleValue}
      >
        {value}
      </Typography>
    );
  }, [size, value]);

  const labelContent = useMemo(() => {
    if (label) {
      return <View style={labelStyle}>{label}</View>;
    }
    return null;
  }, [label, labelStyle]);

  return (
    <Shadow
      distance={SHADOW_DISTANCE}
      startColor={noShadow ? palette.transparent : SHADOW_COLOR_WITH_ALPHA}
      offset={[SHADOW_OFFSET_X, SHADOW_OFFSET_Y]}
    >
      <View>
        <View style={styleBase}>
          <View style={styleContent}>
            <Typography
              size={getLabelSize(size)}
              variant="black"
              numberOfLines={1}
              style={styleLabel}
            >
              {translate('components.riskCard.label')}
            </Typography>
            {valueContent}
          </View>
        </View>
        {labelContent}
      </View>
    </Shadow>
  );
};

export default observer(RiskCard);
