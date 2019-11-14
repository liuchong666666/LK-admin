import React from "react";
import { Provider } from "react-redux";
import store from "./../../Store";
import { BrowserRouter as Router, Route } from "react-router-dom";
import LKHeader from "./../../Components/Header/LKHeader";
import LKAside from "./../../Components/Aside/LKAside";

export default class LayOut extends React.Component {
  render() {
    return (
      <>
        <div>
          <LKHeader />
          <div className="main">
            <LKAside />
            {this.props.children}
          </div>
        </div>
      </>
    );
  }
}
