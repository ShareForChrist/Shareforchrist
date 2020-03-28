import React, { Component } from "react";
import "./subpage.css";
import Data from "../data/data.json";
import { Table } from "react-bootstrap";
import Header from "../components/header";
import Footer from "../components/footer";
import Container from "../components/wraper";
import Row from "../components/row";

class Home extends Component {
  state = {
    data: Data,
    query: "",
    result: []
  };
  handleInputChange = () => {
    this.setState({
      query: this.search.value
    });
    console.log("result", this.state.query);
  };
  getInfo = event => {
    event.preventDefault();
    let result = [];
    // eslint-disable-next-line
    this.state.data.map(t => {
      if (t.title.indexOf(this.state.query) > 0) {
        return result.push(t);
      }
    });
    this.setState({
      result: result
    });
  };
  displayRows = () => {
    return this.state.result.map(d => (
      <Row title={d.title} link={d.link} date={d.date}></Row>
    ));
  };
  render() {
    return (
      <div>
        <Container>
          <form>
            <input
              placeholder="Search for..."
              ref={input => (this.search = input)}
              onChange={this.handleInputChange}
            />
            <button onClick={this.getInfo}>Submit</button>
            <Table hover>
              <tbody>{this.displayRows()}</tbody>
            </Table>
          </form>
        </Container>
        <Footer />
      </div>
    );
  }
}

export default Home;
