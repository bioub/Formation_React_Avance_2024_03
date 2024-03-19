import { beforeEach, expect, test } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

beforeEach(() => {
  document.body.innerHTML = '';
})

test('App renders', () => {
  render(<App />);
})

test('App renders "Click on the Vite and React logos to learn more"', () => {
  render(<App />);

  screen.getByText(/Click on the Vite and React logos to learn more/)
})

test('When we click on button, it increments', () => {
  render(<App />);

  const button = screen.getByTestId('counter')

  fireEvent.click(button);

  expect(button.innerText).toBe("count is 1")
})