import { AiFillHome } from "react-icons/ai";
import { AiOutlineSearch } from "react-icons/ai";
import { AiFillStar } from "react-icons/ai";
import Home from "../components/Home/Home";
import PokemonList from "../components/PokemonList/PokemonList";
import Favourites from "../components/Favourites/Favourites";

export const routes = [
  {
    title: "Home",
    path: "/",
    component: Home,
    icon: <AiFillHome />,
  },
  {
    title: "Pokemons",
    path: "/pokemons",
    component: PokemonList,
    icon: <AiOutlineSearch />,
  },
  {
    title: "Favourites",
    path: "/favourites",
    component: Favourites,
    icon: <AiFillStar />,
  },
];
