import { Alert } from '@app/models';

export type AlertsGroupedByMonthAndYear = { [monthAndYear: string]: Alert[] };
