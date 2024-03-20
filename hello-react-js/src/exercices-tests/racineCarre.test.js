import { expect, test } from "vitest";
import { racineCarre } from "./racineCarre";

test('racineCarre returns sqrt of param', () => {
  expect(racineCarre(4)).toBe(2);
})

test('racineCarre throws when param is negative', () => {
  expect(() => racineCarre(-1)).toThrow();
})