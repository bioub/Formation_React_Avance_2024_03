import { useEffect } from 'react';
import PokemonCardDetails from '../components/pokemon-card-details';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { pokemonsToCompareSelector } from '../store/selectors';
import { fetchPokemons } from '../store/actions';

type Props = Readonly<{}>;

function PokemonCompare({}: Props) {
  const navigate = useNavigate();
  const dispatch = useDispatch<any>();

  const pokemons = useSelector(pokemonsToCompareSelector);

  useEffect(() => {
    dispatch(fetchPokemons());
  }, []);

  if (pokemons.length !== 2) {
    navigate('/pokemons');
    return null;
  }

  return (
    <div className="PokemonCompare">
      <div className="row">
        {pokemons.map((p) => (
          <div className="col s6" key={p.id}>
            <PokemonCardDetails pokemon={p} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default PokemonCompare;
