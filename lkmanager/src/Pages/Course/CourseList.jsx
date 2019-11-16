import React, { Component } from 'react';
import course_1 from '../../Common/uploads/course_1.png';
import { connect } from 'react-redux';
import { getSourceDataAction } from './../../Store/actionCreators';
const IMG_PRE = 'http://localhost:1688/uploads/';

class CourseList extends Component {
  componentDidMount() {
    this.props.reqCourseData();
  }
  render() {
    const { sourceData } = this.props;
    console.log(sourceData);
    /*
course_intro: "web大前端"
course_manager: [{…}]
course_name: "web大前端"
course_page: "upload_acfebb63b5e06139c1ee7ff5926e71ab.jpg"
course_serialize_status: "更新中"
course_sub_title: "web大前端"
course_tag: "web大前端"
course_teacher: "熊大"
course_title: "web大前端"
main_category: "web"
sub_category: "c语言"
    */
    return (
      <>
        <div className="container-fluid">
          {/* <!-- 客户列表 --> */}
          <div className="body course-list">
            {/* <!-- 面包屑 --> */}
            <ol className="breadcrumb">
              <li>
                {' '}
                <a onClick={e => e.preventDefault()} href="a.html">
                  课程管理
                </a>
              </li>
              <li className="active">课程列表</li>
            </ol>
            <div className="courses">
              {/* <!-- 搜索 --> */}
              <div className="search"></div>
              {sourceData.map((source, index) => {
                return (
                  <div className="course" key={index}>
                    <div className="pic">
                      <img src={IMG_PRE + source.course_page} alt="" />
                    </div>

                    <div className="info">
                      <a onClick={e => e.preventDefault()} href="a.html">
                        {source.course_name}
                      </a>
                      <ul className="list-unstyled">
                        <li>
                          <span>讲师：{source.course_teacher}</span>
                          <span>类别：{source.main_category}</span>
                        </li>
                        <li>
                          <span>课时：{source.course_manager[0].c_time}</span>
                          <span>学员：111111</span>
                        </li>
                        <li>
                          <span>浏览：123333</span>
                          <span></span>
                        </li>
                      </ul>
                    </div>
                  </div>
                );
              })}
            </div>
            {/* <!-- 分页 --> */}
            <ul className="pagination pull-right">
              <li>
                <a onClick={e => e.preventDefault()} href="a.html">
                  上一页
                </a>
              </li>
              <li>
                <a onClick={e => e.preventDefault()} href="a.html">
                  1
                </a>
              </li>
              <li>
                <a onClick={e => e.preventDefault()} href="a.html">
                  2
                </a>
              </li>
              <li>
                <a onClick={e => e.preventDefault()} href="a.html">
                  3
                </a>
              </li>
              <li>
                <a onClick={e => e.preventDefault()} href="a.html">
                  4
                </a>
              </li>
              <li>
                <a onClick={e => e.preventDefault()} href="a.html">
                  5
                </a>
              </li>
              <li>
                <a onClick={e => e.preventDefault()} href="a.html">
                  下一页
                </a>
              </li>
            </ul>
          </div>
        </div>
      </>
    );
  }
}
const mapStateToProps = state => {
  return {
    sourceData: state.sourceData,
  };
};
const mapDispatchToProps = disaptch => {
  return {
    reqCourseData() {
      const action = getSourceDataAction();
      disaptch(action);
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(CourseList);
