import React, { Component } from "react";
import "./subpage.css";
import Data from "../data/data.json";
import Row from "../components/row";
import { Table, Container } from "react-bootstrap";
import Title from "../components/title";

class Gerenlingxiu extends Component {
  state = {
    alldata: Data,
    data: []
  };
  componentDidMount() {
    this.sortData();
  }
  sortData = () => {
    let newData = [];
    // eslint-disable-next-line
    this.state.alldata.map(a => {
      if (a.type === "gerenlingxiu") {
        return newData.push(a);
      }
    });
    newData.sort((a, b) => (a.date > b.date ? -1 : 1));
    this.setState({ data: newData });
  };
  displayRows = () => {
    return this.state.data.map(d => (
      <Row title={d.title} link={d.link} date={d.date}></Row>
    ));
  };
  render() {
    return (
      <Container>
        <Title>个人灵修资源</Title>
        <Table hover>
          <tbody>{this.displayRows()}</tbody>
        </Table>
      </Container>
    );
  }
}

export default Gerenlingxiu;
