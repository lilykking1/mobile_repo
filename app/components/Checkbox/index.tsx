import React, { FC, useCallback, useEffect, useMemo, useState } from 'react';
import {
  GestureResponderEvent,
  Text,
  TouchableWithoutFeedback,
  TouchableWithoutFeedbackProps,
  View,
} from 'react-native';
import { isEmpty, noop } from 'lodash';

import { extractStyles } from '@app/utils/styles';

import { Check, IconType } from './components';
import { BasicCheckboxProps } from './types';
import styles from './styles';

interface CheckboxProps
  extends BasicCheckboxProps,
    TouchableWithoutFeedbackProps {
  label?: string;
  icon?: IconType;
  onChange?: (checked: boolean) => void;
  onPress?: (event: GestureResponderEvent) => void;
}

const Checkbox: FC<CheckboxProps> = ({
  disabled,
  checked,
  touched,
  error,
  label,
  icon,
  lineCheck,
  style,
  onChange = noop,
  onPress = noop,
  ...rest
}) => {
  const hasError = touched && !isEmpty(error);
  const hasLabel = !isEmpty(label);
  const [state, setState] = useState(false);

  useEffect(() => {
    setState(Boolean(checked));
  }, [checked]);

  const custom = useMemo(() => [styles.base, style], [style]);

  const { containerStyle, labelStyle } = useMemo(() => {
    const extracted = extractStyles(custom, 'containerStyle', 'labelStyle');

    return {
      containerStyle: extracted.containerStyle,
      labelStyle: [styles.label, extracted.labelStyle],
    };
  }, [custom]);

  const handlePress = useCallback(
    (event: GestureResponderEvent) => {
      setState(!state);
      onChange(!state);
      onPress(event);
    },
    [onChange, onPress, state]
  );

  return (
    <TouchableWithoutFeedback
      style={styles.container}
      disabled={disabled}
      onPress={handlePress}
      {...rest}
    >
      <View style={containerStyle}>
        <Check
          checked={state}
          disabled={disabled}
          touched={touched}
          error={error}
          lineCheck={lineCheck}
        >
          {icon}
        </Check>
        <View>
          {hasError && <Text style={styles.error}>{error}</Text>}
          {hasLabel && <Text style={labelStyle}>{label}</Text>}
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Checkbox;
