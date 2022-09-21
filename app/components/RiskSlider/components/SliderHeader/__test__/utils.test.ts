import { getLabelWidth } from '../utils';

describe('Get correct width of labels', () => {
  it('gets correct width based on custom steps', () => {
    let customSteps = [1, 33, 66, 99];
    let result = [];
    customSteps.forEach((step, index) => {
      result.push(getLabelWidth(customSteps, step, index));
    });
    let expected = ['32%', '33%', '33%', '33%'];
    expect(result).toEqual(expected);

    customSteps = [5, 35, 65, 95];
    result = [];
    customSteps.forEach((step, index) => {
      result.push(getLabelWidth(customSteps, step, index));
    });
    expected = ['30%', '30%', '30%', '30%'];
    expect(result).toEqual(expected);
  });
});
