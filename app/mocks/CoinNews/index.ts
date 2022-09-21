import { Article } from '../../models/Article';

export const coinNewsApi = {
  data: {
    coinNews: [
      {
        publishedAt: '2h ago',
        id: 'f6a82fd8-cfef-490c-a3b8-224ff7136808',
        title:
          'As labor struggle takes center stage, can DAOs democratize work?',
        url:
          'https://cointelegraph.com/news/as-labor-struggle-takes-center-stage-can-daos-democratize-work',
      },
      {
        publishedAt: '2h ago',
        id: '8c697fcf-4ec8-433c-a427-cdcfd6355a03',
        title:
          'More institutions are looking to invest in crypto, says NEAR Foundation CEO',
        url:
          'https://cointelegraph.com/news/more-institutions-are-looking-to-invest-in-crypto-says-near-foundation-ceo',
      },
      {
        publishedAt: '3h ago',
        id: '9e3bab38-f604-4e39-ad30-a6f0d8c711b7',
        title:
          'A dozen Bitcoin ATMs installed at the largest EU electronics retailer',
        url:
          'https://cointelegraph.com/news/dozen-of-bitcoin-atms-planned-at-the-largest-eu-electronics-retailer',
      },
      {
        publishedAt: '4h ago',
        id: 'a62f9f84-c136-40d6-af69-86e8d6cf6d15',
        title:
          'Russian central bank needs to ease up digital asset projects, governor says',
        url:
          'https://cointelegraph.com/news/russian-central-bank-needs-to-ease-up-digital-asset-projects-governor-says',
      },
      {
        publishedAt: '5h ago',
        id: '8a405491-a093-4035-a1d2-ba8eaeb579ba',
        title: 'DigitalBits NFT Creator Contest starts with a $10,000 prize!',
        url:
          'https://medium.com/digitalbitsorg/digitalbits-nft-creator-contest-starts-with-a-10-000-prize-4fd92c4cb036',
      },
      {
        publishedAt: '6h ago',
        id: '0a2efaf7-825d-4024-aa5e-63d3b8c037a1',
        title:
          'Untapped Global Macro Data Provider, Augur Labs, Joins the Big Data Protocol Data Alliance Adding Timely Underlying Growth Metrics across 37 economies',
        url:
          'https://medium.com/big-data-protocol/untapped-global-macro-data-provider-augur-labs-joins-the-big-data-protocol-data-alliance-adding-a82ef151ed02',
      },
      {
        publishedAt: '7h ago',
        id: 'f98ec96c-83ba-424e-a000-45ff0fe18fc3',
        title:
          "Bitcoin heads for 2-week highs as Terra promises BTC price will soon 'get spicy' Weekly Recap Ending April 7",
        url:
          'https://cointelegraph.com/news/bitcoin-heads-for-2-week-highs-as-terra-promises-btc-price-will-soon-get-spicy',
      },
      {
        publishedAt: '8h ago',
        id: 'a22902fc-30fd-4c5c-8bdb-7bb83ec01f5c',
        title: 'Lets Talk About RPG Token Economy',
        url:
          'https://medium.com/rangersprotocol/lets-talk-about-rpg-token-economy-9abb13b3e394',
      },
      {
        publishedAt: '9h ago',
        id: '030b9757-f41b-481e-ab9f-41ee70222480',
        title:
          'The 1M euro Bitcoin retirement plan reaches 200K: Its not too late to invest',
        url:
          'https://cointelegraph.com/news/the-1m-bitcoin-retirement-plan-reaches-200k-it-s-not-too-late-to-invest',
      },
      {
        publishedAt: '10h ago',
        id: '13096134-b8fe-4de0-80b3-aacd2abefddd',
        title:
          'Goldman Sachs reportedly eyes FTX alliance with regulatory and public listing assistance',
        url:
          'https://cointelegraph.com/news/goldman-sachs-reportedly-eyes-ftx-alliance-with-regulatory-and-public-listing-assistance',
      },
    ],
  },
};

export const getCoinNews = (limit = 10): Article[] => {
  const items = coinNewsApi.data.coinNews.slice(0, limit);
  return items.map((coin: any) => {
    const article: Article = {
      id: coin.id,
      description: coin.title,
      time: coin.publishedAt,
      url: coin.url,
    };
    return article;
  });
};
