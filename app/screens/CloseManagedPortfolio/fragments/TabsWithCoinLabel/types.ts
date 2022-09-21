import { Tab } from '@app/components/TabViews/types';

export interface TabsWithCoinLabelProps {
  altDark: string;
  selected: number | string;
  onChange: (id: number | string) => void;
  tabs: Array<Tab>;
  btcAmount: string;
  usdcAmount: string;
}
