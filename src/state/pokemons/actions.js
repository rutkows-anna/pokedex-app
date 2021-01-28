import {
  SET_POKEMONS,
  SET_POKEMONS_LOADING,
  SET_POKEMONS_ERROR,
  SET_POKEMON,
  SET_POKEMON_LOADING,
  SET_POKEMON_ERROR,
  SET_FILTER,
  SET_TYPES,
  SET_SEARCH,
} from "./actionTypes";

export const setPokemons = (pokemons) => ({
  type: SET_POKEMONS,
  payload: pokemons,
});
export const setPokemonsLoading = () => ({
  type: SET_POKEMONS_LOADING,
});
export const setPokemonsError = () => ({
  type: SET_POKEMONS_ERROR,
});
export const setPokemon = (pokemon) => ({
  type: SET_POKEMON,
  payload: pokemon,
});
export const setPokemonLoading = () => ({
  type: SET_POKEMON_LOADING,
});
export const setPokemonError = () => ({
  type: SET_POKEMON_ERROR,
});
export const setTypes = (types) => ({
  type: SET_TYPES,
  payload: types,
});
export const setSearch = (search) => ({
  type: SET_SEARCH,
  payload: search,
});
export const setFilter = (filter) => ({
  type: SET_FILTER,
  payload: filter,
});

export const fetchPokemons = () => (dispatch) => {
  dispatch(setPokemonsLoading());
  fetch("https://pokeapi.co/api/v2/pokemon?limit=100")
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        dispatch(setPokemonsError());
      }
    })
    .then((data) => {
      Promise.all(
        data.results.map((pokemon) => {
          return fetch(pokemon.url).then((response) => response.json());
        })
      )
        .then((pokemons) => {
          dispatch(setPokemons(pokemons));
        })
        .catch((error) => {
          dispatch(setPokemonsError());
        });
    })
    .catch((error) => {
      dispatch(setPokemonsError());
    });
};

export const fetchPokemon = (pokemonName) => (dispatch) => {
  dispatch(setPokemonLoading());
  fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        dispatch(setPokemonError());
      }
    })
    .then((pokemon) => {
      dispatch(setPokemon(pokemon));
    })
    .catch((error) => {
      dispatch(setPokemonError());
    });
};

export const fetchTypes = () => (dispatch) => {
  fetch("https://pokeapi.co/api/v2/type")
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error(`Http error: ${response.status}`);
      }
    })
    .then((data) => {
      dispatch(setTypes(data.results));
    })
    .catch((error) => {
      console.error(error);
    });
};
