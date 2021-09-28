import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "normalize.css";
import "./Css/App.css";
import Home from "./components/pages/Home";
import Products from "./components/pages/Products";
import Services from "./components/pages/Services";
import SignUp from "./components/pages/SignUp";
import Footer from "./components/pages/Footer";
import Card from "./components/Card";
import { ScrollToTop } from "./components/ScrollToTop";

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <ScrollToTop>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/products" component={Products} />
            <Route path="/services" component={Services} />
            <Route path="/sign-up" component={SignUp} />
          </Switch>
        </ScrollToTop>
        <Card />
        <Footer />
      </Router>
    </>
  );
};

export default App;
