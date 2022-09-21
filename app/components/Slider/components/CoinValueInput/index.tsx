import React, {
  FC,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  Dispatch,
  SetStateAction,
  useRef,
} from 'react';
import { CoinIcon } from '@app/components';
import TextInput from '@app/components/TextInput';
import Typography from '@app/components/Typography';
import { Padlock, PadlockOpen } from '@app/components/Icon';
import { RootContext } from '@app/state';
import { observer } from 'mobx-react';
import {
  NativeSyntheticEvent,
  TextInputEndEditingEventData,
  View,
} from 'react-native';
import { debounce } from 'lodash';
import { COIN_SIZE, GET_ONLY_NUMBERS_AND_DOT_REGEX } from './constants';
import {
  getInputColor,
  getStringWithPercentByValue,
  getValueWithLimitedDecimal,
} from './utils';
import { styles } from './styles';

interface CoinValueInputProps {
  disabled: boolean;
  coin: string | undefined;
  showCoinIcon: boolean;
  decimalSize: number;
  value: Array<number> | Array<string>;
  onValueChange: (value: number | Array<number> | Array<string>) => void;
  onEndEditing?: (
    e: NativeSyntheticEvent<TextInputEndEditingEventData>
  ) => void;
  maximumValue: number;
  isUsingSlide: boolean;
  debounceWaitValue?: number;
  canLockValue: boolean;
  isValueLocked?: boolean;
  setIsValueLocked?: Dispatch<SetStateAction<boolean>>;
}

const CoinValueInput: FC<CoinValueInputProps> = ({
  disabled,
  coin,
  showCoinIcon,
  decimalSize = 4,
  value,
  onValueChange,
  onEndEditing,
  maximumValue,
  isUsingSlide,
  debounceWaitValue = 3,
  canLockValue,
  isValueLocked,
  setIsValueLocked,
}) => {
  const {
    settingsStore: { theme },
  } = useContext(RootContext);

  const [inputValue, setInputValue] = useState<string>('');
  const [percentValue, setPercentValue] = useState<string>('');

  const styleTextInput = useMemo(
    () => ({
      ...styles.textInput,
      color: getInputColor(theme),
    }),
    [theme]
  );

  const handleOnEndEditing = useCallback(
    (e) => {
      if (value[0] !== undefined && value[0] === '') {
        onValueChange(0);
      }

      if (onEndEditing) {
        onEndEditing(e);
      }
    },
    [onEndEditing, onValueChange, value]
  );

  const handleOnChangeText = useCallback(
    (text: string) => {
      let inputValueWithRules = text.replace(
        GET_ONLY_NUMBERS_AND_DOT_REGEX,
        ''
      );
      if (parseFloat(inputValueWithRules) > maximumValue) {
        inputValueWithRules = maximumValue.toString();
      }
      onValueChange([inputValueWithRules]);
    },
    [maximumValue, onValueChange]
  );

  const viewPercentValue = useMemo(
    () => (
      <View style={styles.containerPercentValue}>
        <Typography size="body1">{percentValue}</Typography>
        {canLockValue && (
          <View style={styles.padlock}>
            {isValueLocked ? <Padlock /> : <PadlockOpen />}
          </View>
        )}
      </View>
    ),
    [percentValue, canLockValue, isValueLocked]
  );
  const viewCoinIcon = useMemo(
    () =>
      showCoinIcon && (
        <CoinIcon coin={coin} size={COIN_SIZE} style={styles.coinIcon} />
      ),
    [coin, showCoinIcon]
  );

  const setValues = useCallback(
    (newValue): void => {
      setInputValue(getValueWithLimitedDecimal(newValue, decimalSize));
      setPercentValue(getStringWithPercentByValue(newValue, maximumValue));
    },
    [decimalSize, maximumValue]
  );

  const setValueDebounced = useRef(
    debounce((newValue) => setValues(newValue), debounceWaitValue)
  ).current;

  useEffect(() => {
    if (isUsingSlide) {
      setValueDebounced(value);
    } else {
      setValues(value);
    }
  }, [
    decimalSize,
    isUsingSlide,
    maximumValue,
    setValueDebounced,
    setValues,
    value,
  ]);

  const onLockPress = useCallback(() => {
    if (canLockValue) {
      setIsValueLocked((oldValue) => !oldValue);
    }
  }, [canLockValue, setIsValueLocked]);

  return (
    <>
      <TextInput
        suffix={coin}
        disabled={disabled}
        icon={viewCoinIcon}
        rightIcon={viewPercentValue}
        onRightIconPress={onLockPress}
        value={inputValue}
        onChangeText={handleOnChangeText}
        onEndEditing={handleOnEndEditing}
        customContainerStyle={styles.textInputCustomContainerStyle}
        style={styleTextInput}
        keyboardType="numeric"
      />
    </>
  );
};

export default observer(CoinValueInput);
