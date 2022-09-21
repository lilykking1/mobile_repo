import { Theme } from '@app/state/stores/settings/types';
import { inputStyle } from '@app/modals/WithdrawSuccess/styles';
import { StyleSheet } from 'react-native';
import { VariationStyle } from '@app/modals/WithdrawSuccess/types';

export const getBackgroundInput = (
  theme: Theme = 'light'
): StyleSheet.NamedStyles<VariationStyle> => inputStyle[theme];
