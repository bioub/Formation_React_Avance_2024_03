import { fireEvent, render, screen } from "@testing-library/react";
import { expect, test, vitest } from "vitest";
import MultiStateButton from "./MultiStateButton";

test('MultiStateButton renders', () => {
  render(<MultiStateButton items={['Rouge', 'Vert', 'Bleu']} />);
});

test('MultiStateButton throws when items is empty', () => {
  expect(() => render(<MultiStateButton items={[]} />)).toThrow()
});

test('MultiStateButton select next value on click', () => {
  const callback = vitest.fn();

  render(<MultiStateButton items={['Rouge', 'Vert', 'Bleu']} selected={'Bleu'} onSelected={callback} />);

  const button = screen.getByRole('button');
  expect(button.innerText).toContain('Bleu');

  fireEvent.click(button);
  
  expect(callback).toHaveBeenCalledWith('Rouge');
});
