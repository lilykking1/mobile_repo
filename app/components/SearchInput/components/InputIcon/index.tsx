import React, { FC, RefObject, useMemo, useCallback } from 'react';
import { TextInput } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import Close from '@app/components/Icon/generic/Close';
import { palette } from '@app/theme';
import { styles } from './styles';

interface InputIconProps {
  isSearchTextPresent: boolean;
  clearText: (string) => void;
  controlRef: RefObject<TextInput>;
}

const InputIcon: FC<InputIconProps> = ({
  isSearchTextPresent,
  clearText,
  controlRef,
}) => {
  const handlePress = useCallback(() => {
    if (isSearchTextPresent) {
      controlRef.current.focus();
    } else {
      clearText('');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSearchTextPresent]);

  const source = useMemo(
    () =>
      !isSearchTextPresent && (
        <Close width={13} height={13} tint={palette.grey[600]} />
      ),
    [isSearchTextPresent]
  );

  return (
    <TouchableOpacity style={styles.container} onPress={handlePress}>
      {source}
    </TouchableOpacity>
  );
};

export default InputIcon;
