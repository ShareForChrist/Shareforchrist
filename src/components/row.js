import React, { Component } from "react";

class Row extends Component {
  state = {};
  render() {
    return (
      <tr>
        <td>
          <a href={this.props.link}>{this.props.title}</a>
        </td>
        <td>{this.props.date}</td>
      </tr>
    );
  }
}

export default Row;
