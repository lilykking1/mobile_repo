import { Asset, EXCHANGES, WALLETS } from '@app/models';
import { CardType } from '@app/screens/AssetsArea/types';

export interface ExchangesCarouselItemData {
  title?: EXCHANGES | WALLETS | string | string[];
  amount?: string;
  connected?: boolean;
  hasWebProducts?: boolean;
  configured?: boolean;
  type: CardType;
  assets?: Asset[];
}
