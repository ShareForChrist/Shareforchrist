import React, { Component } from "react";
import "./nav.css";
import { NavDropdown, Navbar, Nav, Form, FormControl } from "react-bootstrap";
import { Link } from "react-router-dom";
import RollBar from "../../components/rollBar";

class Navbars extends Component {
  state = { query: "" };
  handleInputChange = () => {
    this.setState({
      query: this.search.value
    });
    console.log("result", this.state.query);
  };
  render() {
    return (
      <din>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Navbar.Brand href="/">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/xianshangjuhui">线上聚会</Nav.Link>
              <Nav.Link href="/gerenlingxiu">个人灵修资源</Nav.Link>
              <Nav.Link href="/jiaohuimuyang">教会牧养资源</Nav.Link>
              <Nav.Link href="/jiatingyuer">家庭育儿资源</Nav.Link>
              <NavDropdown title="疫情须知" id="collasible-nav-dropdown">
                <NavDropdown.Item href="/kepuwenzhang">
                  科普文章
                </NavDropdown.Item>
                <NavDropdown.Item href="/fangyishouce">
                  防疫手册
                </NavDropdown.Item>
                <NavDropdown.Item href="/wenzhenpingtai">
                  问诊平台
                </NavDropdown.Item>
                <NavDropdown.Item href="/shujuchaxun">
                  数据查询
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="/youqinglianjie">友情链接</Nav.Link>
            </Nav>
            <Form inline>
              <FormControl
                type="text"
                placeholder="Search"
                className="mr-sm-2"
                ref={input => (this.search = input)}
                onChange={this.handleInputChange}
              />
              <Link to={{ pathname: "/search", message: this.state.query }}>
                查找
              </Link>
            </Form>
          </Navbar.Collapse>
        </Navbar>
        <RollBar />
      </din>
    );
  }
}

export default Navbars;
