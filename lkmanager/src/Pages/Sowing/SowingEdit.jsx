import React, { Component } from "react";
import { editSowingData } from "./../../Api";
import { Link } from "react-router-dom";

const IMG_PRE = "http://localhost:1688/uploads/";

export default class SowingEdit extends Component {
  constructor(props) {
    super(props);
    console.log(this.props.location.state); //接收路由的信息 通过location
    //要修改的原始数据
    const { sowing } = this.props.location.state;
    this.state = {
      id: sowing._id,
      image_title: sowing.image_title,
      image_url: IMG_PRE + sowing.image_url,
      image_small_url: IMG_PRE + sowing.image_small_url,
      image_link: sowing.image_link,
      s_time: sowing.s_time.substr(0, 10),
      e_time: sowing.e_time.substr(0, 10)
    };
  }
  render() {
    return (
      <>
        <div className="container-fluid">
          <div className="body teacher-profile">
            {/* <!-- 面包屑 --> */}
            <ol className="breadcrumb">
              <li>
                <Link to="/sowing/list">轮播图管理</Link>
              </li>
              <li className="active">编辑轮播图</li>
            </ol>
            <div className="settings">
              <div className="form-horizontal">
                <div className="form-group">
                  <label htmlFor="" className="col-md-3 control-label">
                    图片名称
                  </label>
                  <div className="col-md-5">
                    <input
                      ref="image_title"
                      type="text"
                      className="form-control input-sm"
                      placeholder="填写图片名称"
                      value={this.state.image_title}
                      onChange={e => this._dealInputValue(e, "image_title")}
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label className="col-md-3 control-label">大图片</label>
                  <div className="col-md-2 preview">
                    <img
                      src={this.state.image_url}
                      style={{ border: "1px solid #e0e0e0" }}
                      alt=""
                    />
                    <input
                      ref="image_url"
                      type="file"
                      className="form-control input-sm"
                      placeholder="选择大图片"
                      onChange={() => this._preveiwImg("image_url")}
                    />
                    <div className="cover">
                      <i className="fa fa-upload"></i>
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <label className="col-md-3 control-label">小图片</label>
                  <div className="col-md-2 preview">
                    <img
                      src={this.state.image_small_url}
                      style={{ border: "1px solid #e0e0e0" }}
                      alt=""
                    />
                    <input
                      ref="image_small_url"
                      type="file"
                      className="form-control input-sm"
                      placeholder="选择小图片"
                      onChange={() => this._preveiwImg("image_small_url")}
                    />
                    <div className="cover">
                      <i className="fa fa-upload"></i>
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="" className="col-md-3 control-label">
                    跳转页面链接
                  </label>
                  <div className="col-md-5">
                    <input
                      ref="image_link"
                      type="text"
                      className="form-control input-sm"
                      placeholder="填写跳转链接"
                      value={this.state.image_link}
                      onChange={e => this._dealInputValue(e, "image_link")}
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="" className="col-md-3 control-label">
                    计划上架时间
                  </label>
                  <div className="col-md-5">
                    <input
                      ref="s_time"
                      type="text"
                      className="form-control input-sm"
                      placeholder="请填写上架的链接"
                      value={this.state.s_time}
                      onChange={e => this._dealInputValue(e, "s_time")}
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="" className="col-md-3 control-label">
                    计划下架时间
                  </label>
                  <div className="col-md-5">
                    <input
                      ref="e_time"
                      type="text"
                      className="form-control input-sm"
                      placeholder="请填写下架的链接"
                      value={this.state.e_time}
                      onChange={e => this._dealInputValue(e, "e_time")}
                    />
                  </div>
                </div>
                <div className="form-group">
                  <div className="col-md-8">
                    <button
                      onClick={() => this._dealWithClick()}
                      className="btn btn-danger btn-sm pull-right"
                    >
                      确认修改
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

  //处理文本内容改变
  _dealInputValue(e, type) {
    // console.log({ [type]: e.target.value });
    this.setState({
      [type]: e.target.value
    });
  }
  //处理图片内容的展示
  _preveiwImg(imgRef) {
    //1.根据ref获取用户上传的文件
    let file = this.refs[imgRef].files[0];

    //2.修改图片信息
    let src = "";
    const reader = new FileReader();
    if (file) {
      reader.readAsDataURL(file); //URL格式的Base64字符串以表示所读取文件的内容。
    } else {
      src = "";
    }
    //     FileReader.onloadend
    // 处理loadend事件。该事件在读取操作结束时（要么成功，要么失败）触发。

    //阅读器已经解析完毕,图片解析完毕后的操作
    reader.onloadend = () => {
      //       FileReader.result 只读
      // 文件的内容。该属性仅在读取操作完成后才有效，数据的格式取决于使用哪个方法来启动读取操作。
      src = reader.result;
      this.setState({
        [imgRef]: src //修改状态，当前页面的图片也会修改为修改后的图片
      });
    };
  }
  //点击修改按钮
  _dealWithClick() {
    //1.处理请求的数据
    const { id, image_title, image_link, s_time, e_time } = this.state;
    //2.取出图片原始名称,不要加了前缀地址IMG_PRE的
    const { image_url, image_small_url } = this.props.location.state.sowing;
    console.log("image_url:", this.refs.image_url.files[0] || image_url);

    //3.创建formData
    let formData = new FormData();
    formData.append("id", id);
    formData.append("image_title", image_title);
    formData.append("image_link", image_link);
    formData.append("s_time", s_time);
    formData.append("e_time", e_time);
    //通过判断input标签里面是否存在文件 来判断：图片如果没修改就传图片名称，修改了就传file
    formData.append("image_url", this.refs.image_url.files[0] || image_url);
    formData.append(
      "image_small_url",
      this.refs.image_small_url.files[0] || image_small_url
    );

    // debugger;

    //3.发送请求
    editSowingData(formData)
      .then(res => {
        if (res.status_code === 200) {
          this.props.history.push("/sowingList");
        }
      })
      .catch(err => {
        alert("修改失败", err);
      });
  }
}
