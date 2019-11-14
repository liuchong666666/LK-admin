import React from "react";
import { Provider } from "react-redux";
import store from "./Store/index";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import LayOut from "./Components/LayOut";
import Home from "./Pages/Home/Home";
import Login from "./Pages/User/Login";
import User from "./Pages/User/User";
import Mine from "./Pages/Mine/Mine";

import ErrorPage from "./Pages/ErrorPage/index";

import SowingRouter from "./Pages/Sowing/router";
import CourseRouter from "./Pages/Course/router";

class App extends React.Component {
  render() {
    //主面板
    let LayOutRouter = (
      <LayOut>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/user" component={User} />
          <Route path="/mine" component={Mine} />
          <Route path="/sowing" component={SowingRouter} />
          <Route path="/course" component={CourseRouter} />
          <Route component={ErrorPage} />
        </Switch>
      </LayOut>
    );
    return (
      <Provider store={store}>
        <Router>
          <div>
            {/* <LKHeader />
            <div className="main">
              <LKAside />
              //  <Route path={} component={}/>
              {routes.map((route, key) => {
                if (route.exact) {
                  return (
                    <Route
                      key={key}
                      exact
                      path={route.path}
                      render={props => <route.component {...props} />}
                    />
                  );
                } else {
                  return (
                    <Route
                      key={key}
                      path={route.path}
                      render={props => <route.component {...props} />}
                    />
                  );
                }
              })}
            </div> */}
          </div>
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/" render={props => LayOutRouter} />
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default App;
