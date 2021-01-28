import * as actions from "./actionTypes";

const initialState = {
  pokemons: [],
  error: false,
  loading: false,
  pokemon: {},
  errorPokemon: false,
  loadingPokemon: false,
  search: "",
  filter: "all",
  types: [],
};

export const pokemonsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.SET_POKEMONS:
      return {
        ...state,
        pokemons: action.payload,
        error: false,
        loading: false,
      };
    case actions.SET_POKEMONS_ERROR:
      return {
        ...state,
        error: true,
        loading: false,
      };
    case actions.SET_POKEMONS_LOADING:
      return {
        ...state,
        loading: true,
      };
    case actions.SET_POKEMON:
      return {
        ...state,
        pokemon: action.payload,
        errorPokemon: false,
        loadingPokemon: false,
      };
    case actions.SET_POKEMON_ERROR:
      return {
        ...state,
        errorPokemon: true,
        loadingPokemon: false,
      };
    case actions.SET_POKEMON_LOADING:
      return {
        ...state,
        loadingPokemon: true,
      };
    case actions.SET_SEARCH:
      return {
        ...state,
        search: action.payload,
      };
    case actions.SET_FILTER:
      return {
        ...state,
        filter: action.payload,
      };
    case actions.SET_TYPES:
      return {
        ...state,
        types: action.payload,
      };
    default:
      return state;
  }
};

export default pokemonsReducer;
