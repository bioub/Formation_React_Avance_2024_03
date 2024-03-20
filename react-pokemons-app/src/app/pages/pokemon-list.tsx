import { useState, useEffect, useContext, useCallback } from 'react';
import { Pokemon } from '../models/pokemon';
import PokemonCard from '../components/pokemon-card';
import { Link, Navigate } from 'react-router-dom';
import PokemonSearch from '../components/pokemon-search';
import { isAuthenticated } from '../services/authentication-service';
import { CompareContext } from '../compare-context';
import List from '../components/list';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPokemons } from '../store/actions';
import { filteredPokemonsSelector, idsToCompareSelector } from '../store/selectors';


function PokemonList() {
  const dispatch = useDispatch<any>();
  const pokemons = useSelector(filteredPokemonsSelector);
  const idsToCompare = useSelector(idsToCompareSelector);
  // const { idsToCompare } = useContext(CompareContext);

  useEffect(() => {
    dispatch(fetchPokemons());
  }, []);

  if (!isAuthenticated) {
    return <Navigate to={{ pathname: '/login' }} />;
  }

  // const renderItem = useMemo(() => (pokemon: Pokemon) => <PokemonCard key={pokemon.id} pokemon={pokemon} />, []);
  const renderItem = useCallback((pokemon: Pokemon) => <PokemonCard key={pokemon.id} pokemon={pokemon} />, []);

  return (
    <div>
      <h1 className="center">Pokédex</h1>
      <div className="container">
        <div className="row">
          <PokemonSearch />
          <List items={pokemons} renderItem={renderItem} />
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
