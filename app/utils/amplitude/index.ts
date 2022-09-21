import { Amplitude, Identify } from '@amplitude/react-native';
import { AMPLITUDE_API_KEY } from '@env';

export * from './constants';

const ampInstance = Amplitude.getInstance();

export const initAmplitude = async (): Promise<void> => {
  await ampInstance.init(AMPLITUDE_API_KEY);
};

export const setAmplitudeUserId = (userId: string): void => {
  ampInstance.setUserId(userId);
};

export const setAmplitudeUserProperty = (
  propertyName: string,
  propertyValue: string | number
): void => {
  const identify = new Identify();
  identify.set(propertyName, propertyValue);
  ampInstance.identify(identify);
};

export const logAmplitudeEvent = (
  eventType: string,
  eventProperties?: Record<string, string>
): void => {
  ampInstance.logEvent(eventType, eventProperties);
  ampInstance.uploadEvents();
};
