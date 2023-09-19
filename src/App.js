import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./app.css";
import NavBar from "./components/NavBar/NavBar";

export default function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Switch>
          <Route path="/" exact />
        </Switch>
      </Router>
    </>
  );
}
