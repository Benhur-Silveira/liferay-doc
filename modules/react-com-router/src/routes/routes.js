import React from "react";
import {
  Route,
  HashRouter as Router,
  Switch as Routes,
} from "react-router-dom";
import { Home } from "../pages/Home";
import { About } from "../pages/About";

export const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
      </Routes>
    </Router>
  );
};
