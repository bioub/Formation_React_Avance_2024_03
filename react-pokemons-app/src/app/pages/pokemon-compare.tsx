import { useEffect, useState } from 'react';
import PokemonCardDetails from '../components/pokemon-card-details';
import { getPokemon } from '../services/pokemon-service';
import { Pokemon } from '../models/pokemon';

type Props = Readonly<{}>;

function PokemonCompare({}: Props) {
  const [pokemon1, setPokemon1] = useState<Pokemon | undefined>(undefined);
  const [pokemon2, setPokemon2] = useState<Pokemon | undefined>(undefined);

  useEffect(() => {
    getPokemon(1).then((pokemon) => setPokemon1(pokemon));
    getPokemon(2).then((pokemon) => setPokemon2(pokemon));
  }, []);

  return (
    <div className="PokemonCompare">
      <div className="row">
        <div className="col s6">
          <PokemonCardDetails pokemon={pokemon1} />
        </div>
        <div className="col s6">
          <PokemonCardDetails pokemon={pokemon2} />
        </div>
      </div>
    </div>
  );
}

export default PokemonCompare;
