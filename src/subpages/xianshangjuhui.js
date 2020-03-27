import React, { Component } from "react";
import "./subpage.css";
//import Row from "../components/row";
import Data from "../data/data.json";
import Row from "../components/row";

class Xianshangjuhui extends Component {
  state = {
    alldata: Data,
    data: []
  };
  componentDidMount() {
    this.sortData();
  }
  sortData = () => {
    let newData = [];
    let Datas = this.state.alldata.map(a => {
      if (a.type === "xianshangjuhui") {
        return newData.push(a);
      }
    });
    console.log("newdata", newData, "Data", Datas);
    this.setState({ data: newData });
  };
  displayRows = () => {
    return this.state.data.map(d => (
      <Row title={d.title} link={d.link} date={d.date}></Row>
    ));
  };
  render() {
    return (
      <div className="App">
        <h1>线上聚会</h1>
        <table>
          <tbody>{this.displayRows()}</tbody>
        </table>
      </div>
    );
  }
}

export default Xianshangjuhui;
