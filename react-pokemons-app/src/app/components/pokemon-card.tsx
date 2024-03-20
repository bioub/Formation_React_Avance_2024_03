import { useNavigate } from 'react-router-dom';
import { Pokemon } from '../models/pokemon';
import './pokemon-card.css';
import { formatDate, formatType } from '../helpers';
import classNames from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { idsToCompareSelector } from '../store/selectors';
import { selectId } from '../store/actions';

type Props = {
  pokemon: Pokemon;
  borderColor?: string;
};

function PokemonCard({ pokemon }: Props) {
  const idsToCompare = useSelector(idsToCompareSelector);
  const dispatch = useDispatch();
  // const { idsToCompare, toggleIdSelection } = useContext(CompareContext);
  const navigate = useNavigate();

  function goToPokemon(id: number) {
    navigate(`/pokemons/${id}`);
  }

  return (
    <div className={classNames("col s6 m4", {"teal": idsToCompare.includes(pokemon.id ?? 0)})}  onClick={() => dispatch(selectId(pokemon.id ?? 0))}>
      <div className="card horizontal">
        <div className="card-image">
          <img src={pokemon.picture} alt={pokemon.name} />
        </div>
        <div className="card-stacked">
          <div className="card-content">
            <p>{pokemon.name}</p>
            <p>
              <small>{formatDate(pokemon.created)}</small>
            </p>
            {pokemon.types?.map((type) => (
              <span key={type} className={formatType(type)}>
                {type}
              </span>
            ))}
            <button onClick={() => goToPokemon(pokemon.id ?? 0)}>Details</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PokemonCard;
