import { expect, test, vitest } from 'vitest';
import PokemonList from './pokemon-list';
import { render, screen } from '@testing-library/react';
import { getPokemons } from './pokemon-service';

// Pour que ce test passe, il faut démarrer le backend
// test('PokemonList shows pokemons from getPokemons service', async () => {
//   render(<PokemonList />);

//   const element = await screen.findByText('Pikachu');

//   expect(element).toBeInTheDocument();
// });

vitest.mock('./pokemon-service');

test('PokemonList shows pokemons from getPokemons service (mock)', async () => {
  vitest.mocked(getPokemons).mockResolvedValue([
    {
      id: 1,
      name: 'Mon Faux Pokemon',
      hp: 21,
      cp: 4,
      picture:
        'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/007.png',
      types: ['Eau'],
      created: new Date(),
    },
  ]);

  render(<PokemonList />);

  const element = await screen.findByText('Mon Faux Pokemon');

  expect(element).toBeInTheDocument();
});
