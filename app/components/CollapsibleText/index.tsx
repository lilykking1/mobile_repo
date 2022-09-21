import React, { FC, useState, useCallback } from 'react';
import { TouchableOpacity, View, ViewStyle } from 'react-native';
import { size } from 'lodash';

import { translate } from '@app/i18n';
import Typography, { TypographyProps } from '@app/components/Typography';

import styles from './styles';

interface CollapsibleTextProps extends TypographyProps {
  numberOfLines?: number;
  viewStyle?: ViewStyle;
}

const CollapsibleText: FC<CollapsibleTextProps> = ({
  numberOfLines,
  viewStyle,
  children,
  ...rest
}) => {
  // To show your remaining Text
  const [textShown, setTextShown] = useState(false);
  // To show more/less button
  const [lengthMore, setLengthMore] = useState(false);

  const onToggleTextShown = useCallback(() => {
    setTextShown(!textShown);
  }, [textShown]);

  const onTextLayout = useCallback(
    (e) => {
      const { lines } = e.nativeEvent;
      // Guard clause for eliminating all the unnecessary scenarios
      if (!size(lines) || size(lines) < numberOfLines) {
        return;
      }
      // Assign `true`, avoiding ever setting `false` to `false.`
      setLengthMore(true);
    },
    [numberOfLines]
  );

  return (
    <View style={viewStyle}>
      <Typography
        size="body1"
        onTextLayout={onTextLayout}
        numberOfLines={textShown ? undefined : numberOfLines || 4}
        style={styles.text}
        {...rest}
      >
        {children}
      </Typography>
      {lengthMore && (
        <TouchableOpacity onPress={onToggleTextShown}>
          <Typography size="body1">
            {textShown
              ? translate('components.showLess')
              : translate('components.showMore')}
          </Typography>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default CollapsibleText;
