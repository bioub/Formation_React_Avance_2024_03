export async function getPokemons() {
  const response = await fetch('http://localhost:3001/pokemons');
    return await response.json();
}
