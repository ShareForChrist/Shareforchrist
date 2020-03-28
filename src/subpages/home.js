import React, { Component } from "react";
import "./subpage.css";
import About from "../components/about/about";

class Gerenlingxiu extends Component {
  state = {};
  render() {
    return (
      <div className="App">
        <h1>HOME PAGE</h1>
        <About></About>
      </div>
    );
  }
}

export default Gerenlingxiu;
