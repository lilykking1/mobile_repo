export enum BOT_STATUS {
  LONG = 'Long',
  WAITING = 'Waiting',
}

export interface Bot {
  name: string;
  logoPath: string;
  exchangeConfigurationId?: string;
}

export interface BotConfig {
  bot: Bot;
}
