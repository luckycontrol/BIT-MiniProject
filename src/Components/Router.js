import React from "react";
import Header from "./Header";
import Home from "../Routes/Home";
import MovieList from "../Routes/MovieList";
import MovieFavorite from "../Routes/MovieFavorite";
import { HashRouter as Router, Switch, Route } from "react-router-dom";

export default () => (
  <Router>
    <Header />

    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/movie/list" exact component={MovieList} />
      <Route path="/movie/favorite" exact component={MovieFavorite} />
    </Switch>
  </Router>
);
