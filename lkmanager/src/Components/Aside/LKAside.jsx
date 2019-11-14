import React from "react";
import avatar from "./../../Common/uploads/avatar.png";
import { Route, Switch, Redirect, Link } from "react-router-dom";

class LKAside extends React.Component {
  render() {
    return (
      <div>
        {/* <!-- 侧边栏 --> */}
        <div className="aside">
          {/* <!-- 个人资料 --> */}
          <div className="profile">
            {/* <!-- 头像 --> */}
            <div className="avatar img-circle">
              <img src={avatar} alt="" />
            </div>
            <h4>旋之华</h4>
          </div>
          {/* <!-- 导航菜单 --> */}
          <div className="navs">
            <ul className="list-unstyled">
              <li>
                <Link to="/" className="active">
                  <i className="fa fa-area-chart"></i>
                  数据分析
                </Link>
              </li>
              <li>
                <Link to="/user">
                  <i className="fa fa-users"></i>
                  用户中心
                </Link>
              </li>
              <li>
                {/* 这样来解决 javascript:void(0)  */}
                {/* 工作的时候出现ie对一些方法(isArray)不兼容 用 core.js */}
                <a onClick={e => e.preventDefault()} href="a.html">
                  <i className="fa fa-object-group"></i>
                  课程管理
                  <i className="arrow fa fa-angle-right"></i>
                </a>
                <ul className="list-unstyled">
                  <li>
                    <Link to="/course/add">课程添加</Link>
                  </li>
                  <li>
                    <Link to="/course/list">课程列表</Link>
                  </li>
                  <li>
                    <Link to="/course/category">课程分类</Link>
                  </li>
                  <li>
                    <Link to="/course/topic">课程专题</Link>
                  </li>
                </ul>
              </li>
              <li>
                <a href="docent_list.html">
                  <i className="fa fa-bars"></i>
                  运营中心
                </a>
              </li>
              <li>
                <Link to="/sowing/list">
                  <i className="fa fa-calculator"></i>
                  轮播图中心
                </Link>
              </li>
              <li>
                <a onClick={e => e.preventDefault()} href="a.html">
                  <i className="fa fa-cog"></i>
                  设置中心
                  <i className="arrow fa fa-angle-right"></i>
                </a>
                <ul className="list-unstyled">
                  <li>
                    <a onClick={e => e.preventDefault()} href="a.html">
                      站点设置
                    </a>
                  </li>
                  <li>
                    <a onClick={e => e.preventDefault()} href="a.html">
                      用户设置
                    </a>
                  </li>
                  <li>
                    <a onClick={e => e.preventDefault()} href="a.html">
                      角色管理
                    </a>
                  </li>
                  <li>
                    <a onClick={e => e.preventDefault()} href="a.html">
                      课程设置
                    </a>
                  </li>
                  <li>
                    <a onClick={e => e.preventDefault()} href="a.html">
                      运营设置
                    </a>
                  </li>
                  <li>
                    <a onClick={e => e.preventDefault()} href="a.html">
                      财务设置
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
export default LKAside;
