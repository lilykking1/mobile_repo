import { getOnNavigateToAmplitudeEvent } from '../utils';

describe('Amplitude events', () => {
  it('return correct key when navigate to SignIn or SignUp', () => {
    let route = 'SignIn';
    let expected = 'click login';
    let result = getOnNavigateToAmplitudeEvent(route);
    expect(result).toEqual(expected);

    route = 'SignUp';
    expected = 'click signup';
    result = getOnNavigateToAmplitudeEvent(route);
    expect(result).toEqual(expected);
  });
});
