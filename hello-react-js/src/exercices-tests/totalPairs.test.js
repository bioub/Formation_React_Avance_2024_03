import { expect, test } from 'vitest';
import { totalPairs } from './totalPairs';

test('totalPairs works with empty array', () => {
  expect(totalPairs([])).toBe(0);
});

test('totalPairs works with filled array', () => {
  expect(totalPairs([1, 2, 3, 4, 5, 6, 7, 8])).toBe(4);
  expect(totalPairs([2, 4, 6])).toBe(3);
  expect(totalPairs([1, 2, 3])).toBe(1);
});
