/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
import getIntervalArray from '../components/utils';

const cases = {
  test1: {
    width: 330,
    dataLength: 30,
    labelWidth: 35,
  },
  test2: {
    width: 'sldfj',
    dataLength: 30,
    labelWidth: 35,
  },
  test3: {
    width: 630,
    dataLength: 30,
    labelWidth: 15,
  },
};

describe('Generate X Axis Label Array', () => {
  it('Gives the correct indexes to generate labels for', () => {
    const { width, dataLength, labelWidth } = cases.test1;
    const arr = getIntervalArray(width, dataLength, labelWidth);
    // equal?
    expect(arr.sort()).toEqual([4, 8, 12, 16, 20, 24, 28].sort());
  });
  it('The labels all have equal interval spacing', () => {
    const { width, dataLength, labelWidth } = cases.test1;
    const arr = getIntervalArray(width, dataLength, labelWidth);

    arr.map((val: number, i: number) => {
      if (i === 0) {
        return expect(val).toBe(arr[1] - 4);
      }
      if (i === arr.length - 1) {
        return expect(val).toBe(arr[i - 1] + 4);
      }
      expect(val).toBe(arr[i - 1] + 4);
      expect(val).toBe(arr[i + 1] - 4);
    });
  });
  it('Does not include 0 index or last index # of would be data array', () => {
    const { width, dataLength, labelWidth } = cases.test3;
    const arr = getIntervalArray(width, dataLength, labelWidth);
    // true/false
    const includesZeroIndex = arr.includes(0);
    const includesLastIndex =
      arr[arr.length - 1] === cases.test3.dataLength - 1;
    // test
    expect(includesZeroIndex).toEqual(false);
    expect(includesLastIndex).toEqual(false);
  });
  it('Returns the an empty array if arg types are incorrect', () => {
    const { width, dataLength, labelWidth } = cases.test2;
    expect(
      getIntervalArray(
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        width,
        dataLength,
        labelWidth
      )
    ).toEqual([]);
  });
});
