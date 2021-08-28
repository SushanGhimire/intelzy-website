import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Footer from "./components/static/Footer";
import Navbar from "./components/static/Navbar";
import { useSelector } from "react-redux";
function App() {
  const darkmode = useSelector((state) => state.darkmode.darkmode);
  return (
    <div className={`${darkmode ? "dark" : ""}`}>
      <div className="font-popping dark:bg-gray-900">
        <Navbar />
        <Switch>
          <Route exact to="/" component={Home} />
        </Switch>
        <Footer />
      </div>
    </div>
  );
}

export default App;
