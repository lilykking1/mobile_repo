import analytics from '@react-native-firebase/analytics';

export const logFirebaseAnalyticsEvent = async (
  eventName: string,
  eventParams?: any
): Promise<void> => {
  await analytics().logEvent(eventName, eventParams);
};
