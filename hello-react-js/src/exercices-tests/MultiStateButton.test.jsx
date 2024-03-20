import { fireEvent, render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import MultiStateButton from "./MultiStateButton";

test('MultiStateButton renders', () => {
  render(<MultiStateButton items={['Rouge', 'Vert', 'Bleu']} />);
});

test('MultiStateButton throws when items is empty', () => {
  expect(() => render(<MultiStateButton items={[]} />)).toThrow()
});

test('MultiStateButton select next value on click', () => {
  render(<MultiStateButton items={['Rouge', 'Vert', 'Bleu']} />);

  const button = screen.getByRole('button');
  expect(button.innerText).toContain('Rouge');

  fireEvent.click(button);
  expect(button.innerText).toContain('Vert');

  fireEvent.click(button);
  expect(button.innerText).toContain('Bleu');

  fireEvent.click(button);
  expect(button.innerText).toContain('Rouge');
});
