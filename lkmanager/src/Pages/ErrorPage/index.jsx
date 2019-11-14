import React, { Component } from "react";
import { Link } from "react-router-dom";
import notFoundImg from "./404.jpg";
export default class ErrorPage extends Component {
  render() {
    return (
      <>
        <div
          className="container-fluid"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            paddingTop: 100
          }}
        >
          <img src={notFoundImg} style={{ width: 400 }} alt="" />
          <Link to="/">
            <h3 className="text-primary">哎呀，迷路了，点我返回首页！！</h3>
          </Link>
        </div>
      </>
    );
  }
}
