import { getThePreviousRouteName } from '../navigation';

describe('Get Previous Route Name', () => {
  it('should return the previous page when theres 2 routes on the Navigation routes list', () => {
    const mockedNavigationProp: any = {
      getState() {
        return {
          routes: [
            { name: 'PreviousScreen', key: '1' },
            { name: 'CurrentScreen', key: '2' },
          ],
        };
      },
    };
    const result = getThePreviousRouteName(mockedNavigationProp);

    expect(result).toEqual('PreviousScreen');
  });

  it('should return the previous page when theres 3 routes on the Navigation routes list', () => {
    const mockedNavigationProp: any = {
      getState() {
        return {
          routes: [
            { name: 'FirstScreen', key: '1' },
            { name: 'PreviousScreen', key: '2' },
            { name: 'CurrentScreen', key: '3' },
          ],
        };
      },
    };
    const result = getThePreviousRouteName(mockedNavigationProp);
    expect(result).toEqual('PreviousScreen');
  });

  it('should return undefined when theres no previous screen', () => {
    const mockedNavigationProp: any = {
      getState() {
        return {
          routes: [{ name: 'CurrentScreen', key: '1' }],
        };
      },
    };
    const result = getThePreviousRouteName(mockedNavigationProp);
    expect(result).toEqual(undefined);
  });
});
