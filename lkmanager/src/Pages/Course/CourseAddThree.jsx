import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { addSourceData } from './../../Api/index';
class CourseAddThree extends Component {
  render() {
    return (
      <>
        <div>
          <div class="body course-add">
            {/* <!-- 面包屑 --> */}
            <ol class="breadcrumb">
              <li>
                <a href="javascript:;">课程管理</a>
              </li>
              <li class="active">课程添加</li>
            </ol>
            <div class="steps">
              <ul class="forwards list-unstyled">
                <li>
                  <Link to="/course/add_one">
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
                  <Link to="/course/add_three" class="active">
                    <b>3</b>
                    课时管理
                  </Link>
                </li>
              </ul>
              {/* <!-- 基本信息 --> */}

              {/* <!-- 课时管理 --> */}
              <div class="content">
                {/* <!-- 标题 --> */}
                <div class="title">
                  <h5>课时管理</h5>
                  <a
                    src="javascript:;"
                    data-toggle="modal"
                    data-target="#lesson"
                    class="btn btn-danger btn-sm pull-right"
                  >
                    <i class="fa fa-plus"></i>
                    课时
                  </a>
                </div>
                <div class="lessons">
                  <ul class="list-unstyled">
                    <li>
                      <i class="fa fa-video-camera"></i>
                      <span class="order">任务1</span>
                      <span class="name">H5+C3基础-常用标签</span>
                      <span class="duration">12:06</span>
                      {/* <!-- 操作 --> */}
                      <div class="action pull-right">
                        <a
                          href="javascript:;"
                          class="btn btn-primary btn-xs"
                          data-toggle="modal"
                          data-target="#lesson"
                        >
                          编辑
                        </a>
                        {/* <a href="javascript:;" class="btn btn-primary btn-xs">
                          预览
                        </a> */}
                        <a href="javascript:;" class="btn btn-danger btn-xs">
                          删除
                        </a>
                      </div>
                    </li>
                    <li>
                      <i class="fa fa-video-camera"></i>
                      <span class="order">任务1</span>
                      <span class="name">H5+C3基础-常用标签</span>
                      <span class="duration">12:06</span>
                      {/* <!-- 操作 --> */}
                      <div class="action pull-right">
                        <a
                          href="javascript:;"
                          class="btn btn-primary btn-xs"
                          data-toggle="modal"
                          data-target="#lesson"
                        >
                          编辑
                        </a>
                        {/* <a href="javascript:;" class="btn btn-primary btn-xs">
                          预览
                        </a> */}
                        <a href="javascript:;" class="btn btn-danger btn-xs">
                          删除
                        </a>
                      </div>
                    </li>
                    <li>
                      <i class="fa fa-video-camera"></i>
                      <span class="order">任务1</span>
                      <span class="name">H5+C3基础-常用标签</span>
                      <span class="duration">12:06</span>
                      {/* <!-- 操作 --> */}
                      <div class="action pull-right">
                        <a
                          href="javascript:;"
                          class="btn btn-primary btn-xs"
                          data-toggle="modal"
                          data-target="#lesson"
                        >
                          编辑
                        </a>
                        {/* <a href="javascript:;" class="btn btn-primary btn-xs">
                          预览
                        </a> */}
                        <a href="javascript:;" class="btn btn-danger btn-xs">
                          删除
                        </a>
                      </div>
                    </li>
                    <li>
                      <i class="fa fa-video-camera"></i>
                      <span class="order">任务1</span>
                      <span class="name">H5+C3基础-常用标签</span>
                      <span class="duration">12:06</span>
                      {/* <!-- 操作 --> */}
                      <div class="action pull-right">
                        <a
                          href="javascript:;"
                          class="btn btn-primary btn-xs"
                          data-toggle="modal"
                          data-target="#lesson"
                        >
                          编辑
                        </a>
                        {/* <a href="javascript:;" class="btn btn-primary btn-xs">
                          预览
                        </a> */}
                        <a href="javascript:;" class="btn btn-danger btn-xs">
                          删除
                        </a>
                      </div>
                    </li>
                    <li>
                      <i class="fa fa-video-camera"></i>
                      <span class="order">任务1</span>
                      <span class="name">H5+C3基础-常用标签</span>
                      <span class="duration">12:06</span>
                      {/* <!-- 操作 --> */}
                      <div class="action pull-right">
                        <a
                          href="javascript:;"
                          class="btn btn-primary btn-xs"
                          data-toggle="modal"
                          data-target="#lesson"
                        >
                          编辑
                        </a>
                        {/* <a href="javascript:;" class="btn btn-primary btn-xs">
                          预览
                        </a> */}
                        <a href="javascript:;" class="btn btn-danger btn-xs">
                          删除
                        </a>
                      </div>
                    </li>
                  </ul>
                </div>
                <button
                  class="btn btn-danger btn-sm pull-right"
                  onClick={() => this._dealClick()}
                >
                  提交课程
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- 模态框 添加课程 --> */}
        <div class="modal fade" id="lesson">
          <div class="modal-dialog" style={{ width: 800 }}>
            <div class="modal-content">
              <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal">
                  &times;
                </button>
                <h4 class="modal-title">添加任务</h4>
              </div>
              <div class="modal-body">
                <form action="" class="form-horizontal">
                  <div class="form-group">
                    <label for="" class="col-md-2 control-label">
                      *标题
                    </label>
                    <div class="col-md-6">
                      <input type="text" class="form-control input-sm" />
                    </div>
                    <div class="col-md-2">
                      <div class="checkbox">
                        <label>
                          <input type="checkbox" /> 免费试学
                        </label>
                      </div>
                    </div>
                  </div>
                  <div class="form-group">
                    <label for="" class="col-md-2 control-label">
                      *视频
                    </label>
                    <div class="col-md-8">
                      <div class="input-group">
                        <input
                          type="text"
                          class="form-control input-sm"
                          placeholder="支持腾讯、爱奇艺、网易的视频页面地址导入"
                        />
                        <span class="input-group-btn">
                          <button class="btn btn-danger btn-sm">获取</button>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div class="form-group">
                    <label for="" class="col-md-2 control-label">
                      *课程介绍
                    </label>
                    <div class="col-md-8">
                      <textarea
                        name=""
                        rows="5"
                        class="form-control input-sm"
                      ></textarea>
                    </div>
                  </div>
                  <div class="form-group form-inline">
                    <label for="" class="col-md-2 control-label">
                      *时长
                    </label>
                    <div class="col-md-8">
                      <input type="text" class="form-control input-sm small" />
                      分
                      <input type="text" class="form-control input-sm small" />
                      秒<p class="help-block">时长必须为整数。</p>
                    </div>
                  </div>
                  <div class="form-group form-inline">
                    <label for="" class="col-md-2 control-label">
                      建议学习时长
                    </label>
                    <div class="col-md-8">
                      <input type="text" class="form-control input-sm small" />
                      小时
                      <p class="help-block">
                        （如未设置，则默认学习时长为视频时长2倍取整。）
                      </p>
                    </div>
                  </div>
                </form>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-link btn-sm"
                  data-dismiss="modal"
                >
                  取消
                </button>
                <button type="button" class="btn btn-danger btn-sm">
                  {' '}
                  添 加{' '}
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
  _dealClick() {
    //1.取出数据
    const addCourseData = this.props.addCourseData;
    console.log(addCourseData);

    //2.创建formData
    let formData = new FormData();
    formData.append('course_name', addCourseData.course_name);
    formData.append('course_title', addCourseData.course_title);
    formData.append('course_sub_title', addCourseData.course_sub_title);
    formData.append('course_teacher', addCourseData.course_teacher);
    formData.append(
      'course_serialize_status',
      addCourseData.course_serialize_status
    );
    formData.append('main_category', addCourseData.main_category);
    formData.append('sub_category', addCourseData.sub_category);
    formData.append('course_intro', addCourseData.course_intro);
    formData.append('course_tag', addCourseData.course_tag);
    formData.append('course_page', addCourseData.course_page_url);

    addSourceData(formData)
      .then(res => {
        if (res.status_code === 200) {
          //提交成功后还需要把reducer里面得addCourseData清空  然后再次填的时候就是空得了
          //清空
          this.props.addCourseData.course_name = '';
          this.props.addCourseData.course_title = '';
          this.props.addCourseData.course_sub_title = '';
          this.props.addCourseData.course_teacher = '';
          this.props.addCourseData.course_serialize_status = '';
          this.props.addCourseData.main_category = '';
          this.props.addCourseData.sub_category = '';
          this.props.addCourseData.course_intro = '';
          this.props.addCourseData.course_tag = '';
          this.props.addCourseData.course_page = '';
          this.props.addCourseData.course_page_url = '';
          //返回主页面
          this.props.history.push('/');
        }
      })
      .catch(err => {
        console.log(err);
        alert('上传课程失败!');
      });
  }
}
const mapStateToProps = state => {
  return {
    addCourseData: state.addCourseData,
  };
};
export default connect(mapStateToProps, null)(CourseAddThree);
