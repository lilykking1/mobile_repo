import {
  buildAlertGroupList,
  getDateMonthAndYear,
  groupAlertsByMonthAndYear,
  readAlertByIndex,
  readAllAlerts,
  sortAlertsByTimestamp,
  splitAlertsGroupedIntoAlertGroupList,
} from '../utils';
import {
  alerts,
  alertsSortedByTimestamp,
  alertsGroupedByMonthAndYear,
} from './utils.mock';

describe('Sort Alerts By Timestamp descendent order', () => {
  it('Alerts should match the alertsSortedByTimestamp mocked array', () => {
    const sortedResult = sortAlertsByTimestamp(alerts);
    expect(sortedResult).toEqual(alertsSortedByTimestamp);
  });
});

describe('Read Alert By Index', () => {
  it('Alerts should be read after readAlertByIndex', () => {
    const unreadAlertIndex = alerts.findIndex((alert) => !alert.read);
    if (unreadAlertIndex !== -1) {
      let unreadAlert = alerts[unreadAlertIndex];
      expect(unreadAlert.read).toBe(false);
      const updatedAlertsList = readAlertByIndex(alerts, unreadAlertIndex);
      unreadAlert = updatedAlertsList[unreadAlertIndex];
      expect(unreadAlert.read).toBe(true);
    }
  });
});

describe('Read All Alerts', () => {
  it('Should return an Alert[] with all alerts read', () => {
    expect(alerts.every((alert) => alert.read)).toBe(false);
    const allAlertsRead = readAllAlerts(alerts);
    expect(allAlertsRead.every((alert) => alert.read)).toBe(true);
  });
});

describe('Groups alerts by Month and Year', () => {
  it('ordered the most recent alert first and the most recent alert for each month', () => {
    const arg = sortAlertsByTimestamp(alerts);
    const groupedResult = groupAlertsByMonthAndYear(arg);
    expect(groupedResult['Apr 2022'][0].timestamp).toBe(
      alertsGroupedByMonthAndYear['Apr 2022'][0].timestamp
    );
    expect(groupedResult['Mar 2022'][0].timestamp).toBe(
      alertsGroupedByMonthAndYear['Mar 2022'][0].timestamp
    );
    expect(groupedResult['Dec 2021'][0].timestamp).toBe(
      alertsGroupedByMonthAndYear['Dec 2021'][0].timestamp
    );
  });
});

describe('Split Alerts Grouped Object into Alert Lists', () => {
  it('Should build split a group Alerts into alert lists with the same descendent order.', () => {
    const arg = sortAlertsByTimestamp(alerts);
    const groupedResult = groupAlertsByMonthAndYear(arg);
    const alertGroupList = splitAlertsGroupedIntoAlertGroupList(groupedResult);
    expect(groupedResult['Apr 2022']).toEqual(alertGroupList[0]);
    expect(groupedResult['Mar 2022']).toEqual(alertGroupList[1]);
    expect(groupedResult['Feb 2022']).toEqual(alertGroupList[2]);
    expect(groupedResult['Jan 2022']).toEqual(alertGroupList[3]);
    expect(groupedResult['Dec 2021']).toEqual(alertGroupList[4]);
    expect(groupedResult['Nov 2021']).toEqual(alertGroupList[5]);
  });
});

describe('Build Alert Group List By Alerts Grouped', () => {
  it('Should build an List of Alert Lists sorted by Month And Year', () => {
    const alertGroupList = buildAlertGroupList(alerts);
    expect(getDateMonthAndYear(alertGroupList[0][0].timestamp)).toBe(
      'Apr 2022'
    );
    expect(getDateMonthAndYear(alertGroupList[1][0].timestamp)).toBe(
      'Mar 2022'
    );
    expect(getDateMonthAndYear(alertGroupList[2][0].timestamp)).toBe(
      'Feb 2022'
    );
    expect(getDateMonthAndYear(alertGroupList[3][0].timestamp)).toBe(
      'Jan 2022'
    );
    expect(getDateMonthAndYear(alertGroupList[4][0].timestamp)).toBe(
      'Dec 2021'
    );
    expect(getDateMonthAndYear(alertGroupList[5][0].timestamp)).toBe(
      'Nov 2021'
    );
  });
});
