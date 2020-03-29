import React, { Component } from "react";
import { Link } from "react-router-dom";

class Row extends Component {
  state = {};
  render() {
    return <Link to={this.props.link}>{this.props.title}</Link>;
  }
}

export default Row;
