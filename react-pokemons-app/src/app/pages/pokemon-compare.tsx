import { useContext, useEffect, useState } from 'react';
import PokemonCardDetails from '../components/pokemon-card-details';
import { getPokemon } from '../services/pokemon-service';
import { Pokemon } from '../models/pokemon';
import { CompareContext } from '../compare-context';
import { useNavigate } from 'react-router-dom';

type Props = Readonly<{}>;

function PokemonCompare({}: Props) {
  const { idsToCompare } = useContext(CompareContext);
  const navigate = useNavigate();

  const [pokemon1, setPokemon1] = useState<Pokemon | undefined>(undefined);
  const [pokemon2, setPokemon2] = useState<Pokemon | undefined>(undefined);

  useEffect(() => {
    getPokemon(idsToCompare[0]).then((pokemon) => setPokemon1(pokemon));
    getPokemon(idsToCompare[1]).then((pokemon) => setPokemon2(pokemon));
  }, []);

  if (idsToCompare.length !== 2) {
    navigate('/pokemons');
    return null;
  }

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
