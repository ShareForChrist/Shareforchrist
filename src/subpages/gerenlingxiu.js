import React, { Component } from "react";
import "./subpage.css";
import Row from "../components/row";

class Gerenlingxiu extends Component {
  state = {};
  render() {
    return (
      <div className="App">
        <h1>个人灵修资源</h1>
        <table>
          <tbody>
            <Row></Row>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Gerenlingxiu;
