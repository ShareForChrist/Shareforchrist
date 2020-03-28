import React, { Component } from "react";
import "./subpage.css";
import Data from "../data/data.json";
import Row from "../components/row";
import { Table, Container } from "react-bootstrap";
import Title from "../components/title";
import Footer from "../components/footer";

class Youqinglianjie extends Component {
  state = {
    alldata: Data,
    data: []
  };
  componentDidMount() {
    this.sortData(); // before loading all the component excute this first
  }
  sortData = () => {
    let newData = []; // hold the data that belogs to this categroy
    // eslint-disable-next-line
    this.state.alldata.map(a => {
      //check the data type wether it fit with the title
      if (a.type === "youqinglianjie-faith") {
        return newData.push(a);
      }
    });
    //newData.sort((a, b) => (a.date > b.date ? -1 : 1));
    this.setState({ data: newData });
  };
  displayRows = () => {
    //loopinf through the data array and display the data
    return this.state.data.map(d => <Row title={d.title} link={d.link}></Row>);
  };
  render() {
    return (
      <div>
        <Container>
          <Title>友情链接</Title>
          <Table hover>
            <tbody>{this.displayRows()}</tbody>
          </Table>
        </Container>
        <Footer />
      </div>
    );
  }
}

export default Youqinglianjie;
