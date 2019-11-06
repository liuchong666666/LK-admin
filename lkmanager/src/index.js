import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './Common/css/index.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';
import 'nprogress/nprogress.css';
import 'bootstrap/dist/js/bootstrap';
// jquery放这里 可能会造成和bootstrap造成冲突，所以通过全局来引入，放入public通过路径来引入，在public/index 里面引入

ReactDOM.render(<App />, document.getElementById('root'));
