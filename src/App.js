import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
function App() {
  return (
    <div>
      <Switch>
        <Route exact to="/" component={Home} />
      </Switch>
    </div>
  );
}

export default App;
