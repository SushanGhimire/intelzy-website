import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Footer from "./components/static/Footer";
import Navbar from "./components/static/Navbar";
import { useSelector } from "react-redux";
import Careers from "./components/careers/Careers";
import About from "./components/about/About";
import CareerResult from "./components/careers/CareerResult";
function App() {
  const darkmode = useSelector((state) => state.darkmode.darkmode);
  return (
    <div className={`${darkmode ? "dark" : ""}`}>
      <div className="font-popping dark:bg-gray-900">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/careers" component={Careers} />
          <Route exact path="/about-us" component={About} />
          <Route exact path="/careers/:id" component={CareerResult} />
        </Switch>
        <Footer />
      </div>
    </div>
  );
}

export default App;
