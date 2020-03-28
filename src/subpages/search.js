import React, { Component } from "react";
import "./subpage.css";
import Data from "../data/data.json";
import About from "../components/about/about";
import Header from "../components/header";
import Footer from "../components/footer";
import Contact from "../components/contact/contact";
import Container from "../components/wraper";

class Home extends Component {
  state = {
    data: Data,
    query: "",
    result: ""
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

    console.log("result final", this.state.query);
    this.state.data.map(t => {
      if (t.title.indexOf(this.state.query) !== null) {
        console.log(t);
        return result.push(t);
      }
    });
    console.log("result", result);
    console.log("Total data", Data);
    this.setState({
      data: result
    });
  };
  render() {
    return (
      <form>
        <input
          placeholder="Search for..."
          ref={input => (this.search = input)}
          onChange={this.handleInputChange}
        />
        <button onClick={this.getInfo}>Submit</button>
        <p>{this.state.result}</p>
      </form>
    );
  }
}

export default Home;
