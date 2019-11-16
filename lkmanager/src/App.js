import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';

import LayOut from './Components/LayOut';
import Home from './Pages/Home/Home';
import Login from './Pages/Mine/Login';
import User from './Pages/User/User';

import ErrorPage from './Pages/ErrorPage/index';

import SowingRouter from './Pages/Sowing/router';
import CourseRouter from './Pages/Course/router';
import MineRouter from './Pages/Mine/router';
import * as constants from './Store/actionTypes';

import { connect } from 'react-redux';

class App extends React.Component {
  componentWillMount() {
    this.props.reqLocalData();
  }
  render() {
    //进来的时候会先直接调用render方法，所以取出来的userData是空，所以得先让reducer存进值了再从reducer里面取
    //主面板
    let LayOutRouter = (
      <LayOut>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/user" component={User} />
          <Route path="/mine" component={MineRouter} />
          <Route path="/sowing" component={SowingRouter} />
          <Route path="/course" component={CourseRouter} />
          <Route component={ErrorPage} />
        </Switch>
      </LayOut>
    );
    return (
      <>
        <>
          {/* 为了把登录状态统一，所以把 <Provider store={store}>放app上面，就不放这里了 */}
          {/* <Provider store={store}>
          <div>
            <LKHeader />
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
            </div>
          </div>
        </Provider> */}
        </>
        <Router>
          <Switch>
            {/* 如果用户登录信息（userData）存在 就进入LayOutRouter，不存在就重定向进入login*/}
            <Route
              exact
              path="/"
              render={
                //  this.props.userData取reducer状态里面的userData
                this.props.userData
                  ? props => LayOutRouter
                  : () => <Redirect to="/login" push />
              }
            />
            <Route path="/login" component={Login} />
            <Route path="/" render={props => LayOutRouter} />
          </Switch>
        </Router>
      </>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    //请求本地数据
    //取出本地的用户信息
    reqLocalData() {
      const userData = JSON.parse(sessionStorage.getItem('userData')); //取，取出来是一个字符串，通过JSON.parse转为json对象
      dispatch({
        type: constants.INIT_USER_DATA,
        userData,
      });
    },
  };
};

const mapStateToProps = state => {
  return {
    userData: state.userData,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
