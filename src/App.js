import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Footer from "./components/static/Footer";
import Navbar from "./components/static/Navbar";
import { useSelector } from "react-redux";
import Careers from "./components/careers/Careers";
import About from "./components/about/About";
import CareerResult from "./components/careers/CareerResult";
import ContactUs from "./components/contact/ContactUs";
import Services from "./components/services/Services";
function App() {
  const darkmode = useSelector((state) => state.darkmode.darkmode);
  const [nav, setNav] = React.useState("");

  return (
    <div className={`${darkmode ? "dark" : ""}`}>
      <div className="font-popping dark:bg-gray-900">
        <Navbar nav={nav} />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route
            exact
            path="/careers"
            render={(props) => <Careers setNav={setNav} {...props} />}
          />
          <Route
            exact
            path="/services"
            render={(props) => <Services setNav={setNav} {...props} />}
          />
          <Route
            exact
            path="/about-us"
            render={(props) => <About setNav={setNav} {...props} />}
          />
          <Route
            exact
            path="/contact-us"
            render={(props) => <ContactUs setNav={setNav} {...props} />}
          />
          <Route
            exact
            path="/careers/:id/:slug"
            render={(props) => <CareerResult setNav={setNav} {...props} />}
          />
        </Switch>
        <Footer />
      </div>
    </div>
  );
}

export default App;
