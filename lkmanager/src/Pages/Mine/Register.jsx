import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUserDataAction } from '../../Store/actionCreators';
import { regeisterUser } from './../../Api/index.js'
import md5 from 'md5';

const S_KEY = 'WaYjH1314.ItLikE.CoM';

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user_name: '',
      user_pwd: '',
      user_re_pwd: '',
    };
  }
  render() {
    const { user_name,
      user_pwd,
      user_re_pwd } = this.state
    return (
      <>
        <div className="login">
          <div className="login-wrap" style={{ height: 380 }}>
            <div className="avatar">
              <img src="./uploads/logo.jpg" className="img-circle" alt="" />
            </div>
            <div action="" className="col-md-offset-1 col-md-10" >
              <div className="input-group input-group-lg">
                <span className="input-group-addon">
                  撩课口令：
                </span>
                <input
                  name="user_name"
                  type="text"
                  className="form-control"
                  placeholder="撩课口令"
                  value={user_name}
                  onChange={e => this._onInputChange(e)}
                  onKeyUp={e => {
                    this._onInputKeyUp(e);
                  }}
                />
              </div>
              <div className="input-group input-group-lg" >
                <span className="input-group-addon">
                  密&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;码：
                </span>
                <input
                  name="user_pwd"
                  type="password"
                  className="form-control"
                  placeholder="密&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;码"
                  value={user_pwd}
                  onChange={e => this._onInputChange(e)}
                  onKeyUp={e => {
                    this._onInputKeyUp(e);
                  }}
                />
              </div>
              <div className="input-group input-group-lg" >
                <span className="input-group-addon">
                  确认密码：
                </span>
                <input
                  name="user_re_pwd"
                  type="password"
                  className="form-control"
                  placeholder="确认密码"
                  value={user_re_pwd}
                  onChange={e => this._onInputChange(e)}
                  onKeyUp={e => {
                    this._onInputKeyUp(e);
                  }}
                />
              </div>
              <button
                type="submit"
                className="btn btn-lg btn-danger btn-block"
                onClick={e => this._onSubmit(e)}
                style={{ marginBottom: 500 }}
              >
                确定注册
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }
  //1.当输入框内容发生改变触发
  _onInputChange(e) {
    //1.1获取数据
    let inputValue = e.target.value,
      inputName = e.target.name;
    console.log(inputName, inputValue)
    //1.2更新数据
    this.setState({
      [inputName]: inputValue,
    });
  }
  //2.当按下回车键
  _onInputKeyUp(e) {
    if (e.keyCode === 13) {

      this._onSubmit();
    }

  }
  //3.当用户提交表单按钮
  _onSubmit(e) {
    //3.1获取数据

    let { user_name,
      user_pwd,
      user_re_pwd } = this.state;
    //3.2验证数据
    if (!user_name) {
      alert('输入的口令不能为空！');
      return;
    }
    if (!user_pwd) {
      alert('输入的密码不能为空！');
      return;
    }
    if (!user_re_pwd) {
      alert('请确认密码！');
      return;
    }
    if (user_pwd !== user_re_pwd) {
      alert('两次密码不一致！');
      return;
    }
    //3.3加密密码 // 也可以在后端处理
    const md5_user_pwd = md5(user_pwd + S_KEY);

    let params = new URLSearchParams();
    params.append('user_name', user_name);
    params.append('user_pwd', md5_user_pwd);
    console.log(user_pwd, md5_user_pwd);
    //axios：当不是formdata的形式数据时，传给后端时候会将整个数据作为键值对中的键 ('data':'') 然后 值value 为 空字符串
    //上面元素是div 不是 form表单
    //3.4发起网络请求
    regeisterUser(params).then(res => {
      if (res.status_code === 200) {
        this.props.reqLogin(params, userData => {
          if (userData.token !== '') {
            this.props.history.push('/');
          }
        });
      }
    }).catch(err => {
      alert('注册失败！')
      return
    })

  }
}
const mapDispatchToProps = dispatch => {
  return {
    reqLogin(data, callback) {
      const action = getUserDataAction(data, callback);
      dispatch(action);
    },
  };
};
export default connect(null, mapDispatchToProps)(Register);
