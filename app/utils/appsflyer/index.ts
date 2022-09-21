import appsFlyer, { InitSDKOptions } from 'react-native-appsflyer';
import { APPSFLYER_API_KEY, IOS_APP_ID } from '@env';

export function getAppsFlyerOptions(): InitSDKOptions {
  return {
    isDebug: true,
    devKey: APPSFLYER_API_KEY,
    appId: IOS_APP_ID,
    onInstallConversionDataListener: false,
  };
}

export function initAppsFlyer(): void {
  const options = getAppsFlyerOptions();

  appsFlyer.initSdk(options, null, null);
}

export function logAppsFlyerEvent(
  eventName: string,
  eventData?: Record<string, string>
): void {
  appsFlyer.logEvent(eventName, eventData);
}
