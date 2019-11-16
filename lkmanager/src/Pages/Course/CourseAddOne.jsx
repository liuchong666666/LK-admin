import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class CourseAddOne extends Component {
  constructor(props) {
    super(props);
    //1.获取数据对象
    const addCourseData = this.props.addCourseData;
    const categoryData = this.props.categoryData;
    this.state = {
      //课程标题
      course_title: addCourseData.course_title,
      //课程副标题
      course_sub_title: addCourseData.course_sub_title,
      // 课程讲师
      course_teacher: addCourseData.course_teacher,
      //课程连载状态（0：非连载状态，1：更新中，2：已完结）
      course_serialize_status: addCourseData.course_serialize_status,
      //主分类
      main_category: addCourseData.main_category,
      //子分类
      sub_category: addCourseData.sub_category,
      //课程简介
      course_intro: addCourseData.course_intro,
      //课程标签
      course_tag: addCourseData.course_tag,

      //二级分类（默认是第一个）
      sub_course: categoryData[0].sub_course,
    };
  }

  render() {
    const {
      course_title,
      course_sub_title,
      course_teacher,
      course_serialize_status,
      main_category,
      sub_category,
      course_intro,
      course_tag,
      sub_course,
    } = this.state;
    return (
      <>
        <div class="container-fluid">
          <div class="body course-add">
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
                  <Link to="/course/add_one" class="active">
                    <b>1</b>
                    基本信息
                  </Link>
                </li>
                <li>
                  <Link to="/course/add_two">
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
              {/* <!-- 基本信息 --> */}
              <div class="content">
                {/* <!-- 标题 --> */}
                <div class="title">
                  <h5>课程信息</h5>
                </div>
                <div class="basic form-horizontal">
                  <div class="form-group">
                    <label for="" class="col-md-2 control-label">
                      标题
                    </label>
                    <div class="col-md-8">
                      <input
                        name="course_title"
                        type="text"
                        class="form-control input-sm"
                        placeholder="填写课程的标题"
                        value={course_title}
                        onChange={e => this._dealInputValue(e)}
                      />
                    </div>
                  </div>
                  <div class="form-group">
                    <label for="" class="col-md-2 control-label">
                      副标题
                    </label>
                    <div class="col-md-8">
                      <input
                        name="course_sub_title"
                        type="text"
                        class="form-control input-sm"
                        placeholder="填写课程的副标题"
                        value={course_sub_title}
                        onChange={e => this._dealInputValue(e)}
                      />
                    </div>
                  </div>
                  <div class="form-group">
                    <label for="" class="col-md-2 control-label">
                      讲师
                    </label>
                    <div class="col-md-8">
                      <select
                        name="course_teacher"
                        class="form-control input-sm"
                        value={course_teacher}
                        onChange={e =>
                          this._dealInputValue(e, 'course_teacher')
                        }
                      >
                        <option value="光头强">光头强</option>
                        <option value="熊大">熊大</option>
                        <option value="熊二">熊二</option>
                      </select>
                    </div>
                  </div>
                  <div class="form-group">
                    <label for="" class="col-md-2 control-label">
                      连载状态
                    </label>
                    <div class="col-md-8">
                      <select
                        name="course_serialize_status"
                        class="form-control input-sm"
                        value={course_serialize_status}
                        onChange={e =>
                          this._dealInputValue(e, 'course_serialize_status')
                        }
                      >
                        <option value="非连载课程">非连载课程</option>
                        <option value="更新中">更新中</option>
                        <option value="已完结">已完结</option>
                      </select>
                    </div>
                  </div>
                  <div class="form-group">
                    <label for="" class="col-md-2 control-label">
                      分类
                    </label>
                    <div class="col-md-8">
                      <select
                        name="main_category"
                        class="form-control input-sm"
                        value={main_category}
                        onChange={e => this._dealInputValue(e, 'main_category')}
                      >
                        {this.props.categoryData.map((category, index) => {
                          return (
                            <option key={index} value={category.main_title}>
                              {category.main_title}
                            </option>
                          );
                        })}
                      </select>
                      <select
                        name="sub_category"
                        class="form-control input-sm"
                        value={sub_category}
                        onChange={e => this._dealInputValue(e, 'sub_category')}
                      >
                        {sub_course.map((course, index) => {
                          return (
                            <option key={index} value={course.sub_title}>
                              {course.sub_title}
                            </option>
                          );
                        })}
                      </select>
                    </div>
                  </div>
                  <div class="form-group">
                    <label for="" class="col-md-2 control-label">
                      课程简介
                    </label>
                    <div class="col-md-8 ckeditor">
                      <textarea
                        name="course_intro"
                        rows="15"
                        class="form-control input-sm"
                        value={course_intro}
                        onChange={e => this._dealInputValue(e, 'course_intro')}
                      ></textarea>
                    </div>
                  </div>
                  <div class="form-group">
                    <label for="" class="col-md-2 control-label">
                      标签
                    </label>
                    <div class="col-md-8">
                      <input
                        name="course_tag"
                        type="text"
                        class="form-control input-sm"
                        value={course_tag}
                        onChange={e => this._dealInputValue(e, 'course_tag')}
                      />
                      <p class="help-block">标签将有利于您的课程被学生检索到</p>
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="col-md-10">
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
          </div>
        </div>
      </>
    );
  }
  _dealInputValue(e, type = null) {
    //1.获取数据

    let inputValue = e.target.value,
      inputName = e.target.name;

    //2.特殊情况处理，二级联动
    if (type === 'main_category') {
      this.props.categoryData.map((category, index) => {
        if (category.main_title === inputValue) {
          this.setState({
            sub_course: category.sub_course,
          });
        }
      });
    }

    //3.更新状态
    this.setState({
      [inputName]: inputValue,
    });
  }

  _dealClick() {
    //1.转化数据
    const {
      course_title,
      course_sub_title,
      course_teacher,
      course_serialize_status,
      main_category,
      sub_category,
      course_intro,
      course_tag,
    } = this.state;

    //2.空验证，
    if (
      course_title === '' ||
      course_sub_title === '' ||
      course_intro === '' ||
      course_tag === ''
    ) {
      alert('输入的内容不能为空！');
      return;
    }
    //3.赋值
    this.props.addCourseData.course_title = course_title; //同步
    this.props.addCourseData.course_sub_title = course_sub_title;
    this.props.addCourseData.course_teacher =
      course_teacher === '' ? '光头强' : course_teacher; //    //用户没选择下拉框的时候也需要给值
    this.props.addCourseData.course_serialize_status =
      course_serialize_status === '' ? '非连载状态' : course_serialize_status;
    this.props.addCourseData.main_category =
      main_category === ''
        ? this.props.categoryData[0].main_title
        : main_category;
    this.props.addCourseData.sub_category =
      sub_category === ''
        ? this.props.categoryData[0].sub_course[0].sub_title
        : sub_category;
    this.props.addCourseData.course_intro = course_intro;

    this.props.addCourseData.course_tag = course_tag;
    // console.log(this.props.addCourseData);
    // debugger;

    //跳到下一页面
    this.props.history.push('/course/add_two');
  }
}
const mapStateToProps = state => {
  return {
    addCourseData: state.addCourseData,
    categoryData: state.categoryData,
  };
};
const mapDispatchToProps = disaptch => {
  return {};
};
export default connect(mapStateToProps, mapDispatchToProps)(CourseAddOne);
