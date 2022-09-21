import Typography from '@app/components/Typography';
import React, { FC, memo, ReactElement } from 'react';
import { View } from 'react-native';
import styles from './styles';

interface StickyBottomHeaderProps {
  BottomTitle?: string | ReactElement;
  BottomRight?: ReactElement;
  hasInlineComponents?: boolean;
}

const StickyBottomHeader: FC<StickyBottomHeaderProps> = ({
  BottomTitle,
  BottomRight,
  hasInlineComponents,
}) => {
  if (
    BottomTitle &&
    React.isValidElement(BottomTitle) &&
    !hasInlineComponents
  ) {
    return BottomTitle;
  }
  if ((BottomTitle && typeof BottomTitle === 'string') || hasInlineComponents) {
    return (
      <>
        <Typography strong size="h2">
          {BottomTitle}
        </Typography>
        {BottomRight ? <View style={styles.right}>{BottomRight}</View> : null}
      </>
    );
  }
  if (BottomRight) {
    return <View style={styles.right}>{BottomRight}</View>;
  }
  return null;
};

export default memo<typeof StickyBottomHeader>(StickyBottomHeader);
