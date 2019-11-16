import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import course from './../../Common/images/course.jpg';
import { connect } from 'react-redux';
class CourseAddTwo extends Component {
  constructor(props) {
    super(props);
    const course_page = this.props.addCourseData.course_page;
    this.state = {
      course_page,
    };
  }
  render() {
    const { course_page } = this.state;

    return (
      <>
        <div class="body course-add teacher-profile">
          {/* <!-- 面包屑 --> */}
          <ol class="breadcrumb">
            <li>
              <a href="javascript:;">课程管理</a>
            </li>
            <li class="active">课程添加</li>
          </ol>
          <div class="steps">
            {/* <!-- 步聚 --> */}
            <ul class="forwards list-unstyled">
              <li>
                <Link to="/course/add_one">
                  <b>1</b>
                  基本信息
                </Link>
              </li>
              <li>
                <Link to="/course/add_two" class="active">
                  <b>2</b>
                  课程图片
                </Link>
              </li>
              <li>
                <Link to="/course/add_three">
                  <b>3</b>
                  课时管理
                </Link>
              </li>
            </ul>
            {/* <!-- 课程图片 --> */}
            <div class="content settings">
              {/* <!-- 标题 --> */}
              <div class="title">
                <h5>课程封面</h5>
              </div>
              {/* <!-- 上传图片 --> */}
              <div class="picture col-md-offset-2">
                <div class="preview" style={{ height: 225 }}>
                  <img src={course_page === '' ? course : course_page} alt="" />
                  <input
                    ref="course_page"
                    type="file"
                    className="form-control input-sm"
                    placeholder="选择大图片"
                    onChange={() => this._preveiwImg('course_page')}
                  />
                  <div className="cover">
                    <i className="fa fa-upload"></i>
                  </div>
                </div>
                <p class="tips">
                  可上传jpg, gif, png格式文件,
                  图片建议尺寸大于400x225，文件大小不能超过2M。
                </p>
                <div class="col-md-2">
                  <button
                    class="btn btn-danger btn-sm pull-right"
                    onClick={() => this._dealClick()}
                  >
                    下一步
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
  //处理图片内容的展示
  _preveiwImg(imgRef) {
    //1.根据ref获取用户上传的文件
    let file = this.refs[imgRef].files[0];

    //2.修改图片信息
    let src = '';
    const reader = new FileReader();
    if (file) {
      reader.readAsDataURL(file); //URL格式的Base64字符串以表示所读取文件的内容。
    } else {
      src = '';
    }
    //     FileReader.onloadend
    // 处理loadend事件。该事件在读取操作结束时（要么成功，要么失败）触发。

    //阅读器已经解析完毕,图片解析完毕后的操作
    reader.onloadend = () => {
      //       FileReader.result 只读
      // 文件的内容。该属性仅在读取操作完成后才有效，数据的格式取决于使用哪个方法来启动读取操作。
      src = reader.result;
      this.setState({
        [imgRef]: src, //修改状态，当前页面的图片也会修改为修改后的图片
      });
    };
  }

  _dealClick() {
    //1.取出图片内容
    const { course_page } = this.state;
    if (course_page === '') {
      alert('请上传封面图片！');
      return;
    }
    //上传图片的时候应该是传文件file对象 而不是base64字符串
    this.props.addCourseData.course_page = course_page;
    this.props.addCourseData.course_page_url = this.refs.course_page.files[0];
    //跳到下一页面
    this.props.history.push('/course/add_three');
  }
}
const mapStateToProps = state => {
  return {
    addCourseData: state.addCourseData,
  };
};
const mapDispatchToProps = disaptch => {
  return {};
};
export default connect(mapStateToProps, mapDispatchToProps)(CourseAddTwo);
