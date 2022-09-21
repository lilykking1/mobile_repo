export enum SocialName {
  WEBSITE = 'Website',
  GITHUB = 'Github',
  TWITTER = 'Twitter',
  TELEGRAM = 'Telegram',
}

export interface SocialLink {
  name: SocialName;
  href: string;
}

export enum Interval {
  D = '1D',
  W = '1W',
  M = '1M',
  M3 = '3M',
  Y = '1Y',
  ALL = 'All',
}
