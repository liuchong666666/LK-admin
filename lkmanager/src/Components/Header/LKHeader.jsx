import React from 'react';
import A from './../../Components/A';
class LKHeader extends React.Component {
  render() {
    return (
      <div>
        {/* <!-- 管理系统头部 --> */}
        <div className="header">
          <nav className="navbar navbar-custom">
            <div className="navbar-header">
              <a
                onClick={e => e.preventDefault()}
                href="#"
                className="navbar-brand"
              >
                撩课数据分发管理系统
              </a>
            </div>
            <ul className="nav navbar-nav navbar-right">
              <li>
                <a onClick={e => e.preventDefault()} href="#">
                  <i className="fa fa-cloud-upload"></i>教育云中心
                </a>
              </li>
              <li>
                <a onClick={e => e.preventDefault()} href="#">
                  <i className="fa fa-yelp"></i>分销中心
                </a>
              </li>
              <li>
                <a onClick={e => e.preventDefault()} href="#">
                  <i className="fa fa-xing"></i>CRM对接中心
                </a>
              </li>
              <li>
                <a onClick={e => e.preventDefault()} href="#">
                  <i className="fa fa-user"></i>个人中心
                </a>
              </li>
              <li>
                <a onClick={e => e.preventDefault()} href="#">
                  <i className="fa fa-bell"></i>
                  <span className="badge">20</span>
                </a>
              </li>
              <li>
                <a onClick={e => e.preventDefault()} href="#">
                  <i className="fa fa-sign-out"></i>退出
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    );
  }
}
export default LKHeader;
