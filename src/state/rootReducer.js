import { combineReducers } from "redux";
import authReducer from "./auth/reducer";
import pokemonsReducer from "./pokemons/reducer";

const rootReducer = combineReducers({
  auth: authReducer,
  pokemons: pokemonsReducer,
});

export default rootReducer;
