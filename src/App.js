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
import Faqs from "./components/faq/Faqs";
import PrivacyPolicy from "./components/privacy-policy/PrivacyPolicy";
function App() {
  const darkmode = useSelector((state) => state.darkmode.darkmode);
  return (
    <div className={`${darkmode ? "dark" : ""}`}>
      <div className="font-popping dark:bg-gray-900">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/careers" component={Careers} />
          <Route exact path="/services" component={Services} />
          <Route exact path="/about-us" component={About} />
          <Route exact path="/contact-us" component={ContactUs} />
          <Route exact path="/careers/:id/:slug" component={CareerResult} />
          <Route exact path="/faqs" component={Faqs} />
          <Route exact path="/privacy-policy" component={PrivacyPolicy} />
        </Switch>
        <Footer />
      </div>
    </div>
  );
}

export default App;
