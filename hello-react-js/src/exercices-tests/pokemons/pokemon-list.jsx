import { useEffect, useState } from "react";
import PokemonCard from "./pokemon-card";
import { getPokemons } from "./pokemon-service";

function PokemonList() {
 const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    getPokemons().then((pokemons) => setPokemons(pokemons));
  }, []);

  return (
    <div>
      <h1 className="center">Pokédex</h1>
      <div className="container">
        <div className="row">
          {pokemons.map((pokemon)=> <PokemonCard key={pokemon.id} pokemon={pokemon} />)}
        </div>
      </div>
    </div>
  );
}

export default PokemonList;