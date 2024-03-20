# Exercice Test avec mock

En vous inspirant de la slide 228 (pour le mock) et du test de `MultiStateButton` (pour le test de composant).

Ecrire un test du composant `PokemonList` en remplaçant la fonction `getPokemons` d'origine par une fonction générée dans le test.

Cette fonction doit retourner une promesse (Promise) de pokemons (comme à la slide 228), par exemple :

```
[
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
]
```

Vérifier que le nom du pokemon soit présent à l'écran (par exemple en utilisant un data-testid pour selecter le nom du pokemon dans la carte).


