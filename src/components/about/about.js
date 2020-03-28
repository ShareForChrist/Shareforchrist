import React, { Component } from "react";
import "./about.css";
import xianshangjuhui from "../../img/线上聚会.jpg";
class About extends Component {
  state = {};
  render() {
    return (
      <div>
        <div>
          <h1 className="text-center">关于我们</h1>
          <div className="mt-4 p-3 about-text">
            <p>
              这个网站是一群来自安大略省不同的教会的弟兄姐妹临时组成团队搭建的。发起人为杨磊夫妇。因为新冠病毒的风险不断升级，有许多网络信息扑天盖地的在各个社交媒体传播。我们想要提供经过一定过滤后的靠谱文章，链接，公众号和网站。尤其是针对教会，团契以及弟兄姐妹面对疫情期间所需要的信仰，教牧辅导或医疗资源。教会以及属灵文章有少数团队的原创，和翻译文章。医疗资源主要由武汉NCP生命支援网络信息驿站，加拿大安省睦邻隔离期爱心互助群提供.
            </p>
          </div>
          <div className="mt-4 d-flex flex-wrap justify-content-around">
            <div className="text-center p-3">
              <a
                className="mx-auto"
                href="Shareforchrist/src/subpages/xianshangjuhui.js"
              >
                <div className="d-flex align-items-center icons">
                  <img
                    className="icon"
                    alt="线上聚会"
                    src={xianshangjuhui}
                  ></img>
                </div>
              </a>
              <lable className="row ml-2 p-2">
                <a
                  className="text-dark"
                  href="/Users/Veladaraston/Desktop/Shareforchrist-master/Shareforchrist/src/subpages/xianshangjuhui.js"
                >
                  线上聚会
                </a>
              </lable>
            </div>
            <div className="text-center p-3">
              <a
                className="mx-auto"
                href="Shareforchrist/src/subpages/gerenlingxiu.js"
              >
                <div className="d-flex align-items-center icons">
                  <img
                    className="icon"
                    src="Shareforchrist/img/个人灵修-By Eucalyp.png"
                  />
                </div>
              </a>
              <lable className="row ml-2 p-2">
                <a
                  className="text-dark"
                  href="Shareforchrist/src/subpages/gerenlingxiu.js"
                >
                  个人灵修
                </a>
              </lable>
            </div>
            <div className="text-center p-3">
              <a
                className="mx-auto"
                href="Shareforchrist/src/subpages/jiaohuimuyang.js"
              >
                <div className="d-flex align-items-center icons">
                  <img
                    className="icon"
                    src="Shareforchrist/img/教会牧养-By Darius Dan.png"
                  />
                </div>
              </a>
              <lable className="row ml-2 p-2">
                <a
                  className="text-dark"
                  href="Shareforchrist/src/subpages/jiaohuimuyang.js"
                >
                  教会牧养
                </a>
              </lable>
            </div>
            <div className="text-center p-3">
              <a
                className="mx-auto"
                href="Shareforchrist/src/subpages/jiatingyuer.js"
              >
                <div className="d-flex align-items-center icons">
                  <img
                    className="icon"
                    src="Shareforchrist/img/家庭育儿-By Freepik.png"
                  />
                </div>
              </a>
              <lable className="row ml-2 p-2">
                <a
                  className="text-dark"
                  href="Shareforchrist/src/subpages/jiatingyuer.js"
                >
                  家庭育儿
                </a>
              </lable>
            </div>
            <div className="text-center p-3">
              <a
                className="mx-auto"
                href="Shareforchrist/src/subpages/kepuwenzhang.js"
              >
                <div className="d-flex align-items-center icons">
                  <img
                    className="icon"
                    src="Shareforchrist/img/科普文章-By Smashicons.png"
                  />
                </div>
              </a>
              <lable className="row ml-2 p-2">
                <a
                  className="text-dark"
                  href="Shareforchrist/src/subpages/kepuwenzhang.js"
                >
                  科普文章
                </a>
              </lable>
            </div>
            <div className="text-center p-3">
              <a
                className="mx-auto"
                href="Shareforchrist/src/subpages/fangyishouce.js"
              >
                <div className="d-flex align-items-center icons">
                  <img
                    className="icon"
                    src="Shareforchrist/img/防疫手册-By Smashicons.png"
                  />
                </div>
              </a>
              <lable className="row ml-2 p-2">
                <a
                  className="text-dark"
                  href="Shareforchrist/src/subpages/fangyishouce.js"
                >
                  防疫手册
                </a>
              </lable>
            </div>
            <div className="text-center p-3">
              <a
                className="mx-auto"
                href="Shareforchrist/src/subpages/wenzhenpingtai.js"
              >
                <div className="d-flex align-items-center icons">
                  <img
                    className="icon"
                    src="Shareforchrist/img/问诊平台-By Good Ware.png"
                  />
                </div>
              </a>
              <lable className="row ml-2 p-2">
                <a
                  className="text-dark"
                  href="Shareforchrist/src/subpages/wenzhenpingtai.js"
                >
                  问诊平台
                </a>
              </lable>
            </div>
            <div className="text-center p-3">
              {" "}
              <a
                className="mx-auto"
                href="Shareforchrist/src/subpages/shujuchaxun.js"
              >
                <div className="d-flex align-items-center icons">
                  <img
                    className="icon"
                    src="Shareforchrist/img/数据查询-By DinosoftLabs.png"
                  />
                </div>
              </a>
              <lable className="row ml-2 p-2">
                <a
                  className="text-dark"
                  href="Shareforchrist/src/subpages/shujuchaxun.js"
                >
                  数据查询
                </a>
              </lable>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
