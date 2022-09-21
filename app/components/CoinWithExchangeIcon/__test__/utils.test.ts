import {
  getDimensionContainerIcon,
  getDimensionIcon,
  getDistanceContainerIcon,
} from '../utils';

describe('Get correct dimensions and sizes', () => {
  it('Dimension of container icon', () => {
    const size = 42;
    const expected = 18;
    const result = Math.round(getDimensionContainerIcon(size));
    expect(result).toEqual(expected);
  });

  it('Dimension of icon', () => {
    const size = 42;
    const expected = 10.5;
    const result = getDimensionIcon(size);
    expect(result).toEqual(expected);
  });

  it('Dimension distance to container icon', () => {
    const size = 42;
    const expected = -2.625;
    const result = getDistanceContainerIcon(size);
    expect(result).toEqual(expected);
  });
});
