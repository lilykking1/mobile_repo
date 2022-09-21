import {
  getIconSize,
  getContainerSize,
  getContainerBorderWidth,
} from '../utils';
import { OUTLINE_DISTANCE } from '../constants';

describe('Get correct dimensions and sizes', () => {
  it('calculates the right size of the icon', () => {
    let expected = 22;
    let result = getIconSize(undefined);
    expect(result).toEqual(expected);

    const size = 100;
    expected = 100;
    result = getIconSize(size);
    expect(result).toEqual(expected);
  });

  it('calculates the right size of the container', () => {
    const iconSize = 100;
    let expected = iconSize + OUTLINE_DISTANCE;
    const isOutline = true;
    let result = getContainerSize(iconSize, isOutline);
    expect(result).toEqual(expected);

    expected = iconSize;
    result = getContainerSize(iconSize, !isOutline);
    expect(result).toEqual(expected);
  });

  it('calculates the correct border width of the container', () => {
    const isOutlined = true;
    let expected = 1;
    let result = getContainerBorderWidth(isOutlined);
    expect(result).toEqual(expected);

    expected = 0;
    result = getContainerBorderWidth(!isOutlined);
    expect(result).toEqual(expected);
  });
});
