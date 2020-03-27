import React, { Component } from "react";
import "./subpage.css";
import Row from "../components/row";

class Kepuwenzhang extends Component {
  state = {};
  render() {
    return (
      <div className="App">
        <h1>新冠病毒科普</h1>
        <table>
          <tbody>
            <Row></Row>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Kepuwenzhang;
