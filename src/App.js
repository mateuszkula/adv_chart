import React from "react";
import { Switch, Route } from "react-router-dom";

import { ChartsPage } from "components/pages";

const App = () => (
  <Switch>
    <Route path="/" render={props => <ChartsPage {...props} />} />
  </Switch>
);

export default App;
