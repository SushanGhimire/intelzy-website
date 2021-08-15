import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Footer from "./components/static/Footer";
import Navbar from "./components/static/Navbar";
function App() {
  return (
    <div className=" font-popping bg-white">
      <Navbar />
      <Switch>
        <Route exact to="/" component={Home} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
