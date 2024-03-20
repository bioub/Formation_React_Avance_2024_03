import { render, screen } from "@testing-library/react"
import PokemonCard from "./pokemon-card"
import { expect, test } from "vitest"

test('PokemonCard shows pokemon name', () => {
  render(<PokemonCard pokemon={{ name: 'Pikachu' }}  />);

  expect(screen.queryByText('Pikachu')).toBeInTheDocument();
})