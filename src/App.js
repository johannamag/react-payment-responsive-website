import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/pages/HomePage/Home";
import Footer from "./components/pages/Footer/Footer";
import Products from "./components/pages/Products/Products";
import Services from "./components/pages/Services/Services";
import SignUp from "./components/pages/Sign Up/SignUp";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/products" exact component={Products} />
        <Route path="/services" exact component={Services} />
        <Route path="/sign-up" exact component={SignUp} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
