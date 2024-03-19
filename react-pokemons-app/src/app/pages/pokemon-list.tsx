import { useState, useEffect, useContext } from 'react';
import { Pokemon } from '../models/pokemon';
import PokemonCard from '../components/pokemon-card';
import { getPokemons } from '../services/pokemon-service';
import { Link, Navigate } from 'react-router-dom';
import PokemonSearch from '../components/pokemon-search';
import { isAuthenticated } from '../services/authentication-service';
import { CompareContext } from '../compare-context';

function PokemonList() {
  const { idsToCompare } = useContext(CompareContext);
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  useEffect(() => {
    getPokemons().then((pokemons) => setPokemons(pokemons));
  }, []);

  if (!isAuthenticated) {
    return <Navigate to={{ pathname: '/login' }} />;
  }

  return (
    <div>
      <h1 className="center">Pokédex</h1>
      <div className="container">
        <div className="row">
          <PokemonSearch />
          {pokemons.map((pokemon) => (
            <PokemonCard key={pokemon.id} pokemon={pokemon} />
          ))}
        </div>
      </div>
      <Link
        className="btn-floating btn-large waves-effect waves-light red z-depth-3"
        style={{ position: 'fixed', bottom: '25px', right: '25px' }}
        to="/pokemon/add"
      >
        <i className="material-icons">add</i>
      </Link>
      <Link
        className="btn-floating btn-large waves-effect waves-light blue z-depth-3"
        style={{ position: 'fixed', bottom: '25px', right: '100px', display: idsToCompare.length !== 2 ? 'none': 'block' }}
        to="/pokemon/compare"
      >
        <i className="material-icons">compare</i>
      </Link>
    </div>
  );
}

export default PokemonList;
