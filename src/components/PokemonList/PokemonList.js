import { useEffect } from "react";
import PokemonCard from "../PokemonCard/PokemonCard";
import { useSelector, useDispatch } from "react-redux";
import { fetchPokemons } from "../../state/pokemons/actions";

const PokemonList = () => {
  const loading = useSelector((state) => state.pokemons.loading);
  const pokemons = useSelector((state) => state.pokemons.pokemons);
  const search = useSelector((state) => state.pokemons.search);
  const filter = useSelector((state) => state.pokemons.filter);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPokemons());
  }, [dispatch]);

  const filtered = pokemons.filter((pokemon) => {
    const serachByName = pokemon.name
      .toLowerCase()
      .includes(search.toLowerCase());
    if (filter === "all") {
      return serachByName;
    } else {
      return (
        serachByName &&
        pokemon.types.map((type) => type.type.name).includes(filter)
      );
    }
  });

  return (
    <div className="list">
      {filtered.length > 0 && !loading && filtered.map((pokemon) => {
        return <PokemonCard key={pokemon.name} pokemon={pokemon} />;
      })}
    </div>
  );
};

export default PokemonList;
