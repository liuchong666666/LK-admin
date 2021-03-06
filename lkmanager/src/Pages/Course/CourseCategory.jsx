import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getCategoryDataAction } from './../../Store/actionCreators';
import { connect } from 'react-redux';
class CourseCategory extends Component {
  render() {
    return (
      <>
        <div className="container-fluid">
          <div className="body course-category">
            {/* <!-- 面包屑 --> */}
            <ol className="breadcrumb">
              <li>
                {' '}
                <Link to="/course">课程管理</Link>
              </li>
              <li className="active">课程分类</li>
            </ol>
            <div className="page-title">
              <Link
                to="/course/category_add"
                className="btn btn-danger btn-sm pull-right"
              >
                添加分类
              </Link>
            </div>
            <div className="panel panel-default">
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th width="18%">分类名称</th>
                    <th>课程数量</th>
                    <th>是否显示</th>
                    <th>排序</th>
                    <th width="10%">操作</th>
                  </tr>
                </thead>

                {this.props.categoryData.map((category, index) => {
                  return (
                    <tbody key={index}>
                      <tr className="active">
                        <td className="text-left">{category.main_title}</td>
                        {/* 由于还不会后端的计算数组大小，所以自己前端这里通过length
                        来计算 */}
                        <td>{category.sub_course.length}</td>
                        <td>{category.main_is_show === '1' ? '是' : '否'}</td>
                        <td>{category.main_sort}</td>
                        <td>
                          <Link
                            to="/course/category_add"
                            className="btn btn-info btn-xs"
                          >
                            编辑
                          </Link>
                        </td>
                      </tr>
                      {category.sub_course.map((sub, index) => {
                        return (
                          <tr key={'sub' + index}>
                            <td className="text-left">
                              &nbsp;&nbsp;├ {sub.sub_title}
                            </td>
                            <td>{sub.sub_total_count}</td>
                            <td>{sub.sub_is_show === '1' ? '是' : '否'}</td>
                            <td>{sub.sub_sort}</td>
                            <td>
                              <Link
                                to="/course/category_add"
                                className="btn btn-info btn-xs"
                              >
                                编辑
                              </Link>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  );
                })}
              </table>
            </div>
          </div>
        </div>
      </>
    );
  }
  componentDidMount() {
    this.props.reqCategoryData();
  }
}
const mapStateToProps = state => {
  return {
    categoryData: state.categoryData,
  };
};
const mapDispatchToProps = disaptch => {
  return {
    reqCategoryData() {
      const action = getCategoryDataAction();
      disaptch(action);
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(CourseCategory);
