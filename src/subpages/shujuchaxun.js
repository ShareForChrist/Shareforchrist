import React, { Component } from "react";
import "./subpage.css";
import Row from "../components/row";

class Shujuchaxun extends Component {
  state = {};
  render() {
    return (
      <div className="App">
        <h1>数据查询</h1>
        <table>
          <tbody>
            <Row></Row>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Shujuchaxun;
