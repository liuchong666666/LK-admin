import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getStuDataAction } from './../../Store/actionCreators';
import LKPagination from './../../Components/LKTool/LKPagination';
import { getStuDataCount } from './../../Api/index';
class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pageNum: 1,
      total: 0,
      pageSize: 10, //每页多少条
    };
  }
  componentWillMount() {
    getStuDataCount()
      .then(res => {
        this.setState({
          total: res.result,
        });
      })
      .catch(err => {
        alert('获取用户数据失败');
      });
  }
  componentDidMount() {
    const { pageNum, pageSize } = this.state;
    this.props.reqStuDataList({
      page: pageNum,
      pageSize,
    });
  }
  render() {
    const userData = JSON.parse(sessionStorage.getItem('userData'));
    console.log(this.props.stuDataList);
    console.log(this.state.total);
    const { pageNum, pageSize } = this.state;
    return (
      <>
        {userData ? (
          <div className="container-fluid">
            {/* <!-- 客户列表 --> */}
            <div className="body">
              {/* <!-- 面包屑 --> */}
              <ol className="breadcrumb">
                <li>
                  {' '}
                  <a onClick={e => e.preventDefault()} href="a.html">
                    用户管理
                  </a>
                </li>
                <li className="active">用户列表</li>
              </ol>
              <div className="panel panel-default user-list">
                <div className="panel-body">
                  <form action="" className="form-inline">
                    <select name="" className="form-control input-sm">
                      <option value="">按年龄</option>
                    </select>
                    <select name="" className="form-control input-sm">
                      <option value="">按性别</option>
                    </select>
                    <select name="" className="form-control input-sm">
                      <option value="">按地区</option>
                    </select>
                    <select name="" className="form-control input-sm">
                      <option value="">按日期</option>
                    </select>
                    <button className="btn btn-danger btn-sm">筛选</button>
                    <div className="input-group pull-right">
                      <input type="text" className="form-control input-sm" />
                      <span className="input-group-btn">
                        <button className="btn btn-danger btn-sm">搜索</button>
                      </span>
                    </div>
                  </form>
                </div>
                <table className="table table-striped table-bordered table-hover">
                  <thead>
                    <tr>
                      <th>编号</th>
                      <th>注册账号</th>
                      <th>昵称</th>
                      <th>年龄</th>
                      <th>性别</th>
                      <th>地区</th>
                      <th>手机号码</th>
                      <th>积分</th>
                      <th>注册时间</th>
                      <th>登录时间</th>
                      <th>操作</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.props.stuDataList.map((student, index) => (
                      <tr key={index}>
                        <td>{'LK' + ((pageNum - 1) * pageSize + index + 1)}</td>
                        <td>{student.reg_account}</td>
                        <td>{student.user_name}</td>
                        <td>{student.user_age}</td>
                        <td>{student.user_sex}</td>
                        <td>{student.area}</td>
                        <td>{student.phone}</td>
                        <td>{student.points}</td>
                        <td>{student.reg_time.substr(0, 10)}</td>
                        <td>{student.last_login_time}</td>
                        <td>
                          <a
                            href="user_center.html"
                            className="btn btn-info btn-xs"
                          >
                            查看
                          </a>
                          <a
                            onClick={e => {
                              e.preventDefault();
                            }}
                            href="a.html"
                            className="btn btn-warning btn-xs"
                          >
                            锁定
                          </a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              {/* <!-- 分页 --> */}
              <LKPagination
                current={this.state.pageNum}
                total={this.state.total}
                pageSize={this.state.pageSize}
                //pageNum当前点击的页码
                onChange={pageNum => this._onPageNumChange(pageNum)}
                // hideOnSinglePage={true}
                showQuickJumper
                // showTitle
              />
            </div>
          </div>
        ) : (
          this.props.history.push('/login')
        )}
      </>
    );
  }
  _onPageNumChange(pageNum) {
    this.setState(
      {
        pageNum,
      },
      () => {
        this.props.reqStuDataList({
          page: pageNum,
          pageSize: this.state.pageSize,
        });
      }
    );
  }
}
const mapStateToProps = state => {
  return {
    stuDataList: state.stuDataList,
  };
};
const mapDispatchToProps = dispatch => {
  return {
    reqStuDataList(parmas) {
      const action = getStuDataAction(parmas);
      dispatch(action);
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(User);
