import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { routes } from "./routes/routes";
import Nav from './components/Nav/Nav';

function App() {
  return (
    <div className="app">
      <Router>
        <Nav />
        <Switch>
        {routes.map((route) => {
              return (
                <Route key={route.title} exact path={route.path} component={route.component} />
              );
            })}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
