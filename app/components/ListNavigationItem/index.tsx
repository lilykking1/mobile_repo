import React, { FC, ReactNode, useMemo } from 'react';
import { TouchableOpacity, View, ViewStyle } from 'react-native';
import { Icon, IconButton, Typography, Divider } from '@app/components';
import { palette } from '@app/theme';
import { noop } from 'lodash';
import styles from './styles';

export interface ListNavigationItemProps {
  title: string;
  subTitle?: string;
  onPress?: () => void;
  button?: ReactNode;
  containerStyle?: ViewStyle;
  divider?: boolean;
  testID?: string;
}
const ListNavigationItem: FC<ListNavigationItemProps> = ({
  title,
  subTitle,
  onPress = noop,
  button,
  containerStyle,
  divider = true,
  testID,
}) => {
  const subHeader = useMemo(
    () =>
      subTitle ? (
        <Typography variant="grey.600" size="body2" style={styles.subTitle}>
          {subTitle}
        </Typography>
      ) : null,
    [subTitle]
  );

  const icon = button || <Icon.ChevronRight tint={palette.grey[600]} />;

  const iconStyle = useMemo(() => containerStyle || styles.containerStyle, [
    containerStyle,
  ]);
  const navigationButton = button || (
    <IconButton startIcon={icon} containerStyle={iconStyle} onPress={onPress} />
  );

  return (
    <TouchableOpacity testID={testID} onPress={onPress}>
      <View style={styles.container}>
        <View style={styles.containerHeader}>
          <View style={styles.header}>
            <Typography strong size="h6">
              {title}
            </Typography>
            {subHeader}
          </View>
          <View>{navigationButton}</View>
        </View>
        {divider && <Divider style={styles.divider} />}
      </View>
    </TouchableOpacity>
  );
};

export default ListNavigationItem;
