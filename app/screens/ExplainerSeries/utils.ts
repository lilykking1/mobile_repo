import { AmplitudeAuthEvents } from '@app/utils/amplitude';

export const getOnNavigateToAmplitudeEvent = (route: string): string =>
  route === 'SignIn'
    ? AmplitudeAuthEvents.CLICK_LOGIN
    : AmplitudeAuthEvents.CLICK_SIGNUP;
