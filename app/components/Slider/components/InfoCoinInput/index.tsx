import React, {
  FC,
  useState,
  useCallback,
  useEffect,
  useRef,
  useMemo,
  useContext,
} from 'react';
import { View } from 'react-native';
import { debounce } from 'lodash';
import { RootContext } from '@app/state';
import { observer } from 'mobx-react';
import { CoinIcon, Typography, TextInput } from '@app/components';
import { formatNumberToLocale } from '@app/utils/numbers';
import CoinLevels from './components/CoinLevels';
import styles from './styles';
import { COIN_SIZE } from './constants';
import {
  getInputColor,
  getValueWithLimitedDecimal,
  getValueWithMaxRule,
} from './utils';

interface InfoCoinInputProps {
  isLevelsValue: boolean;
  maximumValue: number;
  minimumValue: number;
  coin: string | undefined;
  isUsingSlide: boolean;
  disabled: boolean;
  onValueChange: (value: number | Array<number> | Array<string>) => void;
  value: Array<number> | Array<string>;
  decimalSize: number;
  debounceWaitValue?: number;
}

const InfoCoinInput: FC<InfoCoinInputProps> = ({
  isLevelsValue,
  maximumValue,
  minimumValue,
  coin,
  disabled,
  onValueChange,
  isUsingSlide,
  decimalSize,
  debounceWaitValue = 3,
  value,
}) => {
  const {
    settingsStore: { theme },
  } = useContext(RootContext);
  const [inputValue, setInputValue] = useState<string>('');

  const styleTextInput = useMemo(
    () => ({
      ...styles.textInput,
      color: getInputColor(theme),
    }),
    [theme]
  );

  const handleOnChangeText = useCallback(
    (text: string) => {
      const maxValueInput = getValueWithMaxRule(text, maximumValue);
      onValueChange([maxValueInput]);
    },
    [maximumValue, onValueChange]
  );

  const setValues = useCallback(
    (newValue): void => {
      const formattedValue = formatNumberToLocale(
        getValueWithLimitedDecimal(newValue, decimalSize)
      );
      setInputValue(formattedValue);
    },
    [decimalSize]
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
  }, [isUsingSlide, setValueDebounced, setValues, value]);

  const handleOnEndEditing = useCallback(() => {
    if (value[0] !== undefined && value[0] === '') {
      onValueChange(0);
    }
  }, [onValueChange, value]);

  return (
    <>
      <View style={styles.container}>
        <View style={styles.coinInfo}>
          <CoinIcon coin={coin} size={COIN_SIZE} />
          <Typography size="h6" style={styles.coinName} strong>
            {coin}
          </Typography>
        </View>
        <TextInput
          disabled={disabled}
          value={inputValue}
          onChangeText={handleOnChangeText}
          onEndEditing={handleOnEndEditing}
          keyboardType="numeric"
          customContainerStyle={styles.textInputCustomContainerStyle}
          style={styleTextInput}
        />
      </View>
      {isLevelsValue && (
        <CoinLevels maximumValue={maximumValue} minimumValue={minimumValue} />
      )}
    </>
  );
};

export default observer(InfoCoinInput);
