import { Alert } from '@app/models';
import dayjs from 'dayjs';
import { AlertsGroupedByMonthAndYear } from './types';

export const getDateMonthAndYear = (timestamp: number): string => {
  const date = new Date(timestamp * 1000);
  return dayjs(date).format('MMM YYYY');
};
export const sortAlertsByTimestamp = (alerts: Alert[]): Alert[] =>
  alerts.sort((alertA, alertB) => {
    if (alertA.timestamp <= alertB.timestamp) {
      return 1;
    }
    return -1;
  });

export const readAlertByIndex = (alerts: Alert[], index: number): Alert[] =>
  alerts.map((alert, alertIndex) =>
    index === alertIndex ? { ...alert, read: true } : alert
  );

export const readAllAlerts = (alerts: Alert[]): Alert[] =>
  alerts.map((alert) => ({ ...alert, read: true }));

export const groupAlertsByMonthAndYear = (
  alertsSortedByTimestamp: Alert[]
): AlertsGroupedByMonthAndYear => {
  const alertsByMonthAndYear: AlertsGroupedByMonthAndYear = {};
  alertsSortedByTimestamp.forEach((alert) => {
    const alertMonthAndYear = getDateMonthAndYear(alert.timestamp);
    if (alertsByMonthAndYear[alertMonthAndYear]) {
      alertsByMonthAndYear[alertMonthAndYear] = [
        ...alertsByMonthAndYear[alertMonthAndYear],
        alert,
      ];
    } else {
      alertsByMonthAndYear[alertMonthAndYear] = [alert];
    }
  });
  return alertsByMonthAndYear;
};

export const splitAlertsGroupedIntoAlertGroupList = (
  alertsGroupedByMonthAndYear: AlertsGroupedByMonthAndYear
): Alert[][] => {
  const alertGroupList: Alert[][] = [];
  Object.values(alertsGroupedByMonthAndYear).forEach((alertsGrouped) => {
    alertGroupList.push(alertsGrouped);
  });
  return alertGroupList;
};

export const buildAlertGroupList = (alerts: Alert[]): Alert[][] => {
  const alertsSortedByTimestamp = sortAlertsByTimestamp(alerts);
  const alertsByMonthAndYear = groupAlertsByMonthAndYear(
    alertsSortedByTimestamp
  );
  const alertGroupList = splitAlertsGroupedIntoAlertGroupList(
    alertsByMonthAndYear
  );
  return alertGroupList;
};
