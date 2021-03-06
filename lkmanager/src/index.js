import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './Common/css/index.css';

// import 'jquery';
// import 'jquery/dist/jquery.min';
import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap/dist/js/bootstrap';
import 'react-bootstrap';
// import '../public/base';
import 'font-awesome/css/font-awesome.css';
import 'nprogress/nprogress.css';

// jquery放这里 可能会造成和bootstrap造成冲突，所以通过全局来引入，放入public通过路径来引入，在public/index 里面引入

import { Provider } from 'react-redux';
import store from './Store';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
