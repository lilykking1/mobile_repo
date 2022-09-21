import styles from './styles';
import { ValueLabelVariant } from './types';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getRightStyles = (variant: ValueLabelVariant): any[] => [
  styles.rightLabel,
  { paddingBottom: variant === 'large' ? 10 : 0 },
];
