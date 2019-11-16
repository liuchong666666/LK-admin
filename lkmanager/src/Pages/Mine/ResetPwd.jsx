import React, { Component } from 'react';
import md5 from 'md5';
import { editPwdData } from './../../Api/index';
const S_KEY = 'WaYjH1314.ItLikE.CoM';
//获取本地数据
const userData = JSON.parse(sessionStorage.getItem('userData'));
export default class ResetPwd extends Component {
  constructor(props) {
    super(props);
    this.state = {
      token: userData.token || '',
      //旧密码
      old_pwd: '',
      //新密码
      new_pwd: '',
      //确定密码
      re_pwd: '',
    };
  }
  render() {
    let { old_pwd, new_pwd, re_pwd } = this.state;
    return (
      <>
        <div className="container-fluid">
          {/* <!-- 修改密码 --> */}
          <div className="body">
            <div className="repass">
              <div action="" className="form-horizontal col-md-offset-2">
                <div className="form-group">
                  <label htmlFor="" className="col-md-3 control-label">
                    原密码
                  </label>
                  <div className="col-md-4">
                    <input
                      name="old_pwd"
                      value={old_pwd}
                      type="text"
                      className="form-control input-sm"
                      onChange={e => this._onInputChange(e)}
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="" className="col-md-3 control-label">
                    新密码
                  </label>
                  <div className="col-md-4">
                    <input
                      name="new_pwd"
                      value={new_pwd}
                      type="password"
                      className="form-control input-sm"
                      onChange={e => this._onInputChange(e)}
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="" className="col-md-3 control-label">
                    确认密码
                  </label>
                  <div className="col-md-4">
                    <input
                      name="re_pwd"
                      value={re_pwd}
                      onChange={e => this._onInputChange(e)}
                      type="text"
                      className="form-control input-sm"
                    />
                  </div>
                </div>
                <div className="form-group">
                  <div className="col-md-7">
                    <button
                      type="submit"
                      className="btn btn-success btn-danger  pull-right"
                      onClick={e => {
                        this._onSubmit(e);
                      }}
                    >
                      修 改
                    </button>
                    <button
                      type="submit"
                      className="btn btn-success btn-warning pull-right"
                      style={{ marginRight: 10 }}
                      onClick={() => {
                        this.props.history.goBack();
                      }}
                    >
                      返回
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
  _onInputChange(e) {
    //1.获取数据e
    let inputName = e.target.name,
      inputValue = e.target.value;

    //1.2更新状态机
    this.setState({
      [inputName]: inputValue,
    });
  }
  _onSubmit(e) {
    //1.1数据校验
    let { old_pwd, new_pwd, re_pwd, token } = this.state;
    if (new_pwd !== re_pwd) {
      alert('两次密码不一致！！');
      return;
    }
    //1.2数据加密
    const md5_old_pwd = md5(old_pwd + S_KEY);
    const md5_new_pwd = md5(new_pwd + S_KEY);
    let params = new URLSearchParams();
    params.append('old_pwd', md5_old_pwd);
    params.append('new_pwd', md5_new_pwd);
    params.append('token', token);
    //1.3调用接口
    editPwdData(params)
      .then(res => {
        console.log(res);
        //删除本地记录
        if (res.status_code === 200) {
          alert('密码修改成功！');
          sessionStorage.removeItem('userData');
        }
        //返回重新登录
        this.props.history.push('/login');
      })
      .catch(err => {
        console.log(err);
        alert('操作有误，请重新进来');
      });
  }
}
