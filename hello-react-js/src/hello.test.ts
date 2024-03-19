import { expect, test } from "vitest";
import { hello } from "./hello";

test('hello function return Hello followed by name', () => {
  // Arrange
  const name = 'Romain';

  // Act
  const result = hello(name);

  // Assert
  expect(result).toBe('Hello Romain');
});