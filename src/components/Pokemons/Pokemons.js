import PageWrapper from "../PageWrapper/PageWrapper";
import PokemonList from "../PokemonList/PokemonList";
import FilterBar from "../FilterBar/FilterBar";
import Loader from "../Loader/Loader";
import Error from "../Error/Error";
import { useSelector } from "react-redux";

const Pokemons = () => {
  const error = useSelector((state) => state.pokemons.error);
  const loading = useSelector((state) => state.pokemons.loading);
  return (
    <PageWrapper>
      <FilterBar />
      <Loader loading={loading} />
      <PokemonList />
      {error && <Error />}
    </PageWrapper>
  );
};

export default Pokemons;
