// when passed a number (num) returns the smallest positive number that is evenly divided by the numbers between num and 1
const smallestMultiple = require('./smallestMultiple');

describe('smallestMultiple', () => {
  // when passed 1 -> returns 1
  test('return 1 when passed 1', () => {
    expect(smallestMultiple(1)).toBe(1);
  });

  // when passed 2 -> returns 2
  test('return 2 when passed 2', () => {
    expect(smallestMultiple(2)).toBe(2);
  });

  // when passed 3 -> returns 6
  test('return 3 when passed 6', () => {
    expect(smallestMultiple(3)).toBe(6);
  });
  // when passed 4 -> returns 12
  test('return 4 when passed 12', () => {
    expect(smallestMultiple(4)).toBe(12);
  });
  // when passed 10 -> returns 2520
  test('return 10 when passed 2520', () => {
    expect(smallestMultiple(10)).toBe(2520);
  });
});
