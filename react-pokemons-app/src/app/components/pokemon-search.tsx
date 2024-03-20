import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Pokemon } from '../models/pokemon';
import { searchPokemon } from '../services/pokemon-service';
import { useDispatch, useSelector } from 'react-redux';
import { searchTermSelector } from '../store/selectors';
import { updateSearchTerm } from '../store/actions';


function PokemonSearch() {
  const searchTerm = useSelector(searchTermSelector);
  const dispatch = useDispatch();

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>): void {
    const term = event.target.value;
    dispatch(updateSearchTerm(term));
  }

  return (
    <div className="row">
      <div className="col s12 m6 offset-m3">
        <div className="card">
          <div className="card-content">
            <div className="input-field">
              <input
                type="text"
                placeholder="Rechercher un pokémon"
                value={searchTerm}
                onChange={(e) => handleInputChange(e)}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PokemonSearch;
