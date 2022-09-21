import { ViewProps } from 'react-native';

export interface CoinIconProps extends ViewProps {
  coin: string;
  size?: number;
  isOutlined?: boolean;
}
