import React from "react";
import "./nav.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <Link to="/">
        <h3>Logo</h3>
      </Link>

      <ul>
        <Link to="xianshangjuhui">
          <li>线上聚会</li>
        </Link>
        <Link to="jiatingyuer">
          <li>家庭育儿</li>
        </Link>
        <Link to="gerenlingxiu">
          <li>个人灵修资源</li>
        </Link>
        <Link to="jiaohuimyang">
          <li>教会牧养资源</li>
        </Link>
        <Link to="fangyishouce">
          <li>防疫手册</li>
        </Link>
        <Link to="Kepuwenzhang">
          <li>科普文章</li>
        </Link>
        <Link to="wenzhenpingtai">
          <li>线上聚会</li>
        </Link>
        <Link to="shujuchaxun">
          <li>数据查询</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Navbar;
