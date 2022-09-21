import { translate } from '@app/i18n';

export enum PeriodFilterShortLabels {
  ONE_DAY = '24H',
  ONE_WEEK = '1 W',
  ONE_MONTH = '1 M',
  THREE_MONTHS = '3 M',
  ONE_YEAR = '1 Y',
  FIVE_YEARS = '5 Y',
  ALL_TIME = 'All time',
}

export const getPeriodShortLabel = (
  period: string
): PeriodFilterShortLabels => {
  switch (period) {
    case translate('modals.Interval.1week'):
      return PeriodFilterShortLabels.ONE_WEEK;
    case translate('modals.Interval.1month'):
      return PeriodFilterShortLabels.ONE_MONTH;
    case translate('modals.Interval.3months'):
      return PeriodFilterShortLabels.THREE_MONTHS;
    case translate('modals.Interval.year'):
      return PeriodFilterShortLabels.ONE_YEAR;
    case translate('modals.Interval.5years'):
      return PeriodFilterShortLabels.FIVE_YEARS;
    case translate('modals.Interval.allTime'):
      return PeriodFilterShortLabels.ALL_TIME;
    default:
      return PeriodFilterShortLabels.ONE_DAY;
  }
};
