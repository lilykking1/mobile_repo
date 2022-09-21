import { Bot } from '@app/interfaces/Bot';
import { Exchange } from '@app/interfaces/Exchange';
import { Notification } from '@app/interfaces/Notification';

export interface User {
  bots: Bot[];
  notifications: Notification[];
  exchanges: Exchange[];
}
