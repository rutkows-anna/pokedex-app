import { useEffect } from "react";
import PageWrapper from "../PageWrapper/PageWrapper";
import Loader from "../Loader/Loader";
import Error from "../Error/Error";
import { useSelector, useDispatch } from "react-redux";
import { fetchPokemon } from "../../state/pokemons/actions";
import { useParams } from "react-router-dom";

const PokemonDetails = () => {
  const { pokemonName } = useParams();
  const pokemon = useSelector((state) => state.pokemons.pokemon);
  const error = useSelector((state) => state.pokemons.errorPokemon);
  const loading = useSelector((state) => state.pokemons.loadingPokemon);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPokemon(pokemonName));
  }, [dispatch, pokemonName]);

  return (
    <PageWrapper><div className="details-content">
      <Loader loading={loading} />
      {Object.keys(pokemon).length > 0 && !loading ? (
        <>
          <h1 className="details-content__title">{pokemon.name}</h1>
          <img
            src={pokemon.sprites.other["official-artwork"].front_default}
            alt={pokemon.name}
            className="details-content__img"
          />
          <p className="details-content__text">height: {pokemon.height} dm</p>
          <p className="details-content__text">weight: {pokemon.weight} hg</p>
          <p className="details-content__text">
            types: 
            {pokemon.types.map((type) => {
              return <span key={type.type.name}> {type.type.name}</span>;
            })}
          </p>
          <p className="details-content__text">
            abilities:
            {pokemon.abilities.map((ability) => {
              return (
                <span key={ability.ability.name}> {ability.ability.name}</span>
              );
            })}
          </p>
        </>
      ) : null}
      {error && <Error />}
      </div>
    </PageWrapper>
  );
};

export default PokemonDetails;
