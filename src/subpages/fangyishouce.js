import React, { Component } from "react";
import "./subpage.css";
import Row from "../components/row";

class Fangyishouce extends Component {
  state = {};
  render() {
    return (
      <div className="App">
        <h1>防疫手册</h1>
        <table>
          <tbody>
            <Row></Row>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Fangyishouce;
