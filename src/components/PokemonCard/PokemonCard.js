import { Link } from "react-router-dom";

const PokemonCard = ({ pokemon }) => {
  return (
    <>
      {
        <>
          <Link to={`/pokemons/${pokemon.name}`} className="card">
            <h1 className="card__title">{pokemon.name}</h1>
            <img
              src={pokemon.sprites.other["official-artwork"].front_default}
              alt={pokemon.name}
              className="card__img"
            />
          </Link>
        </>
      }
    </>
  );
};

export default PokemonCard;
