import React from 'react';
import { Provider } from 'react-redux';
import store from './Store';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import LKHeader from './Components/Header/LKHeader';
import LKAside from './Components/Aside/LKAside';

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <LKHeader />
            <LKAside />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
