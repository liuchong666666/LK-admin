import React from 'react';
import avatar from './../../Common/uploads/avatar.png';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const IMG_PRE = 'http://localhost:1688/uploads/';

class LKAside extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected_flag: 'two',
    };
  }
  render() {
    const { userData } = this.props;
    const { selected_flag } = this.state;
    return (
      <div>
        {/* <!-- 侧边栏 --> */}
        <div className="aside">
          {/* <!-- 个人资料 --> */}
          <div className="profile">
            {/* <!-- 头像 --> */}
            <div className="avatar img-circle">
              <img
                src={userData.icon_url ? IMG_PRE + userData.icon_url : avatar}
                alt=""
              />
            </div>
            <h4>{userData.real_name}</h4>
          </div>
          {/* <!-- 导航菜单 --> */}
          <div className="navs">
            <ul className="list-unstyled">
              <li>
                <Link
                  to="/"
                  className={selected_flag === 'one' ? 'active' : ''}
                  onClick={() => this._dealWithClick('one')}
                >
                  <i className="fa fa-area-chart"></i>
                  数据分析
                </Link>
              </li>
              <li>
                <Link
                  to="/user"
                  className={selected_flag === 'two' ? 'active' : ''}
                  onClick={() => this._dealWithClick('two')}
                >
                  <i className="fa fa-users"></i>
                  用户中心
                </Link>
              </li>
              <li>
                {/* 这样来解决 javascript:void(0)  */}
                {/* 工作的时候出现ie对一些方法(isArray)不兼容 用 core.js */}
                <Link
                  to="/course"
                  className={selected_flag === 'three' ? 'active' : ''}
                  onClick={() => this._dealWithClick('three')}
                >
                  <i className="fa fa-object-group"></i>
                  课程管理
                  <i className="arrow fa fa-angle-right"></i>
                </Link>
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
                <Link
                  to="/docent_list"
                  className={selected_flag === 'four' ? 'active' : ''}
                  onClick={() => this._dealWithClick('four')}
                >
                  <i className="fa fa-bars"></i>
                  运营中心
                </Link>
              </li>
              <li>
                <Link
                  to="/sowing/list"
                  className={selected_flag === 'five' ? 'active' : ''}
                  onClick={() => this._dealWithClick('five')}
                >
                  <i className="fa fa-calculator"></i>
                  轮播图中心
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className={selected_flag === 'six' ? 'active' : ''}
                  onClick={() => this._dealWithClick('six')}
                >
                  <i className="fa fa-cog"></i>
                  设置中心
                  <i className="arrow fa fa-angle-right"></i>
                </Link>
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
  _dealWithClick(flag) {
    this.setState({
      selected_flag: flag,
    });
  }
}
const mapStateToProps = state => {
  return {
    userData: state.userData || {},
  };
};

export default connect(mapStateToProps, null)(LKAside);
