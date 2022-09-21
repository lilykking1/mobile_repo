import { getSeparatorStyle } from '../utils';
import { lightThemeSeparator, darkThemeSeparator } from '../constants';

describe('Get correct Separator style based on app theme', () => {
  it('has a lightThemeSeparator background color if its the light theme', () => {
    const match = {
      backgroundColor: lightThemeSeparator,
    };
    const result = getSeparatorStyle('light');
    expect(result).toMatchObject(match);
  });
  it('has a darkThemeSeparator background color if its the dark theme', () => {
    const match = {
      backgroundColor: darkThemeSeparator,
    };
    const result = getSeparatorStyle('dark');
    expect(result).toMatchObject(match);
  });
});
