import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

//页面
import Mine from './Mine';
import ResetPwd from './ResetPwd';

export default class MineRouter extends Component {
  componentWillMount() {
    console.log(this.props.history.location.pathname)
  }
  render() {
    const userData = JSON.parse(sessionStorage.getItem('userData'));

    return (
      <>
        {
          this.props.history.location.pathname === '/register' ?
            this.props.history.push('/register') :
            userData ? (
              <Switch>
                <Route path="/mine/main" component={Mine} />
                <Route path="/mine/reset" component={ResetPwd} />
                <Redirect exact from="/mine" to="/mine/main" />
              </Switch>
            ) : (
                this.props.history.push('/login')
              )
        }

      </>
    );
  }
}
