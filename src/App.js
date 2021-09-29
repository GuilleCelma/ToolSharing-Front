import "./App.css"
import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/home";
import NewProduct from "./pages/new-product";
import ProductsList from "./pages/products-list";
import ProductDetails from "./pages/product-details";
import Signup from "./components/signup"

import Navbar from "./components/navbar";

import * as PATHS from "./utils/paths";

function App() {
  return (
    <div className="App">
    <Navbar/>
      <Switch>
        <Route exact path={PATHS.HOMEPAGE} component={Home} />
        <Route exact path={PATHS.PRODUCTSLIST} component={ProductsList} />
        <Route exact path={PATHS.PRODUCTDETAILS} component={ProductDetails} />
        <Route exact path={PATHS.NEWPRODUCT} component={NewProduct} />
      </Switch>
    </div>
  );
}

export default App;

