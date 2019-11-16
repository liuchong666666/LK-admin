import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import course from './../../Common/images/course.jpg';

export default class CourseAddTwo extends Component {
  render() {
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
              <div class="content">
                {/* <!-- 标题 --> */}
                <div class="title">
                  <h5>课程封面</h5>
                </div>
                {/* <!-- 上传图片 --> */}
                <div class="picture col-md-offset-2">
                  <div class="preview">
                    <img src={course} alt="" />
                  </div>
                  <p class="tips">
                    可上传jpg, gif, png格式文件,
                    图片建议尺寸大于400x225，文件大小不能超过2M。
                  </p>
                  <div class="col-md-2">
                    <Link to="/course/add_three" class="btn btn-danger btn-sm">
                      下一步
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
