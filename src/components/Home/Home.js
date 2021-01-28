import PageWrapper from "../PageWrapper/PageWrapper";
import { CgPokemon } from "react-icons/cg";

const Home = () => {
  return (
    <PageWrapper>
      <div className="home-content">
      <h1 className="home-content__title">Welcome to pokedex app.</h1>
      <p className="home-content__text"> In app you can find your favourite pokemons.</p>
      <CgPokemon className="home-content__icon"/>
      </div>
    </PageWrapper>
  );
};

export default Home;
