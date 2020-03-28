import React from "react";
import "./nav.css";
import { NavDropdown, Navbar, Nav } from "react-bootstrap";

function Navbars() {
  return (
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
            <NavDropdown.Item href="/kepuwenzhang">科普文章</NavDropdown.Item>
            <NavDropdown.Item href="/fangyishouce">防疫手册</NavDropdown.Item>
            <NavDropdown.Item href="/wenzhenpingtai">问诊平台</NavDropdown.Item>
            <NavDropdown.Item href="/shujuchaxun">数据查询</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="/youqinglianjie">友情链接</Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link href="/search">查找</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Navbars;
