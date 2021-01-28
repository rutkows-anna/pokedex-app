import React from "react";
import { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { routes } from "./helpers/routes";
import SignInPage from "./components/SignInPage/SignInPage";
import Nav from "./components/Nav/Nav";
import Home from "./components/Home/Home";
import Pokemons from "./components/Pokemons/Pokemons";
import PokemonDetails from "./components/PokemonDetails/PokemonDetails";
import { useSelector, useDispatch } from "react-redux";
import { checkSignIn } from "./state/auth/actions";

function App() {
  const token = useSelector((state) => state.auth.token);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkSignIn());
  }, [dispatch]);

  return (
    <>
      <div className="app">
        <Router>
          {!token ? (
            <SignInPage />
          ) : (
            <>
              <Nav />
              <Switch>
                <Route exact path={routes.home} component={Home} />
                <Route exact path={routes.pokemons} component={Pokemons} />
                <Route exact path={routes.pokemon} component={PokemonDetails} />
              </Switch>
            </>
          )}
        </Router>
      </div>
    </>
  );
}

export default App;
