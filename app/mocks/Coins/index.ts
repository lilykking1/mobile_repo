import {
  Asset,
  AssetVariation,
  AssetVariationDirection,
  getCoinProperties,
} from '@app/models';
import { random } from 'lodash';

export const assets = [
  'ATOM',
  'BTC',
  'ETH',
  'FIL',
  'SOL',
  'UNI',
  'USDT',
  'XRP',
];

export const assetsList: Asset[] = assets
  .map((asset) => {
    const coinProperties = getCoinProperties(asset);

    const fiatAmount = random(0, 10_000, true);
    const coinAmount = random(0, 30, true);

    return {
      name: coinProperties.name,
      symbol: asset,
      fiatAmount,
      coinAmount,
    };
  })
  .sort((coinA, coinB) => {
    if (Number(coinA.fiatAmount) < Number(coinB.fiatAmount)) {
      return 1;
    }
    if (Number(coinA.fiatAmount) > Number(coinB.fiatAmount)) {
      return -1;
    }
    return 0;
  });

export const variationAssetsList: AssetVariation[] = [
  {
    coin: 'USDT',
    currentCoinAmount: 4384.19,
    currentFiatAmount: 4384.19,
    endCoinAmount: 14384.19,
    endFiatAmount: 14384.19,
    direction: AssetVariationDirection.FROM,
  },
  {
    coin: 'ETH',
    currentCoinAmount: 1.921,
    currentFiatAmount: 10_921.0,
    endCoinAmount: 0.824,
    endFiatAmount: 4874.88,
    direction: AssetVariationDirection.TO,
  },
  {
    coin: 'BTC',
    currentCoinAmount: 1.25,
    currentFiatAmount: 23_000.54,
    endCoinAmount: 0.675,
    endFiatAmount: 11_456.89,
    direction: AssetVariationDirection.TO,
  },
  {
    coin: 'XRP',
    currentCoinAmount: 2968.204,
    currentFiatAmount: 1543.97,
    endCoinAmount: 1841.48,
    endFiatAmount: 1841.48,
    direction: AssetVariationDirection.TO,
  },
];

export const allCoins: Asset[] = [
  {
    symbol: 'DOT',
    name: 'Polkadot',
  },
  {
    symbol: 'SHIB',
    name: 'Shiba Inu',
  },
  {
    symbol: 'AVAX',
    name: 'Avalanche',
  },
  {
    symbol: 'DAI',
    name: 'Dai',
  },
  {
    symbol: 'MATIC',
    name: 'Polygon',
  },
  {
    symbol: 'TRX',
    name: 'TRON',
  },
  {
    symbol: 'UNI',
    name: 'Uniswap',
  },
  {
    symbol: 'WBTC',
    name: 'Wrapped Bitcoin',
  },
  {
    symbol: 'ETC',
    name: 'Ethereum Classic',
  },
  {
    symbol: 'LEO',
    name: 'Unus Sed Leo',
  },
  {
    symbol: 'BTC',
    name: 'Bitcoin',
  },
  {
    symbol: 'ETH',
    name: 'Ethereum',
  },
  {
    symbol: 'USDT',
    name: 'Tether',
  },
  {
    symbol: 'BNB',
    name: 'BNB',
  },
  {
    symbol: 'XRP',
    name: 'XRP',
  },
  {
    symbol: 'ADA',
    name: 'Cardano',
  },
  {
    symbol: 'SOL',
    name: 'Solana',
  },
  {
    symbol: 'DOGE',
    name: 'Dogecoin',
  },
  {
    symbol: 'LTC',
    name: 'Litecoin',
  },
  {
    symbol: 'FTT',
    name: 'FTX Token',
  },
  {
    symbol: 'LINK',
    name: 'Chainlink',
  },
  {
    symbol: 'ATOM',
    name: 'Cosmos',
  },
  {
    symbol: 'XLM',
    name: 'Stellar',
  },
  {
    symbol: 'XMR',
    name: 'Monero',
  },
  {
    symbol: 'BCH',
    name: 'Bitcoin Cash',
  },
  {
    symbol: 'ALGO',
    name: 'Algorand',
  },
  {
    symbol: 'FIL',
    name: 'Filecoin',
  },
  {
    symbol: 'MANA',
    name: 'Decentraland',
  },
  {
    symbol: 'SAND',
    name: 'The Sandbox',
  },
  {
    symbol: 'XTZ',
    name: 'Tezos',
  },
  {
    symbol: 'EOS',
    name: 'EOS',
  },
  {
    symbol: 'AAVE',
    name: 'Aave',
  },
  {
    symbol: 'AXS',
    name: 'Axie Infinity',
  },
  {
    symbol: 'THETA',
    name: 'Theta Network',
  },
  {
    symbol: 'CHZ',
    name: 'Chiliz',
  },
  {
    symbol: 'ZEC',
    name: 'Zcash',
  },
  {
    symbol: 'MKR',
    name: 'Maker',
  },
  {
    symbol: 'NEO',
    name: 'NEO',
  },
  {
    symbol: 'CAKE',
    name: 'PancakeSwap',
  },
  {
    symbol: 'CRV',
    name: 'Curve',
  },
  {
    symbol: 'BAT',
    name: 'Basic Attention Token',
  },
  {
    symbol: 'WAVES',
    name: 'Waves',
  },
  {
    symbol: 'ENJ',
    name: 'Enjin Coin',
  },
  {
    symbol: 'DASH',
    name: 'Dash',
  },
  {
    symbol: 'LRC',
    name: 'Loopring',
  },
  {
    symbol: 'KAVA',
    name: 'Kava',
  },
  {
    symbol: 'ANKR',
    name: 'Ankr Network',
  },
  {
    symbol: 'XEM',
    name: 'NEM',
  },
  {
    symbol: '1INCH',
    name: '1inch',
  },
  {
    symbol: 'COMP',
    name: 'Compound',
  },
  {
    symbol: 'YFI',
    name: 'yearn.finance',
  },
  {
    symbol: 'SNX',
    name: 'Synthetix Network Token',
  },
  {
    symbol: 'OMG',
    name: 'OMG Network',
  },
  {
    symbol: 'ZRX',
    name: '0x',
  },
  {
    symbol: 'GNT',
    name: 'Golem',
  },
  {
    symbol: 'BAL',
    name: 'Balancer',
  },
  {
    symbol: 'SRM',
    name: 'Serum',
  },
  {
    symbol: 'SUSHI',
    name: 'SushiSwap',
  },
  {
    symbol: 'CVC',
    name: 'Civic',
  },
  {
    symbol: 'REN',
    name: 'Ren',
  },
  {
    symbol: 'BNT',
    name: 'Bancor',
  },
  {
    symbol: 'RLC',
    name: 'iExec RLC',
  },
  {
    symbol: 'CHR',
    name: 'Chromia',
  },
  {
    symbol: 'RAY',
    name: 'Raydium',
  },
  {
    symbol: 'ALICE',
    name: 'Alice',
  },
  {
    symbol: 'HXRO',
    name: 'Hxro',
  },
  {
    symbol: 'LOOM',
    name: 'Loom Network',
  },
  {
    symbol: 'GHST',
    name: 'Aavegotchi',
  },
  {
    symbol: 'BAND',
    name: 'Band Protocol',
  },
  {
    symbol: 'MAPS',
    name: 'MAPS',
  },
  {
    symbol: 'OXY',
    name: 'Oxygen',
  },
  {
    symbol: 'KNC',
    name: 'Kyber Network',
  },
  {
    symbol: 'USD',
    name: 'United States Dollar',
  },
  {
    symbol: 'ZRX',
    name: '0x (Wormhole)',
  },
];
