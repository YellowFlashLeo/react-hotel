import React, { Component } from "react";
import "./App.css";
import Home from "./pages/Home";
import Error from "./pages/Error";
import SingleRoom from "./pages/SingleRoom";
import Rooms from "./pages/Rooms";
import Navbar from "./commponents/Navbar";
import { Link, Route, Switch } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/rooms" component={Rooms} />
        <Route exact path="/rooms/:slug" component={SingleRoom} />
        <Route component={Error} />
      </Switch>
    </>
  );
}

export default App;
