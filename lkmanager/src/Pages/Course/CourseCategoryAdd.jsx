import React, { Component } from 'react';
import { Link } from 'react-router-dom';
export default class CourseCategoryAdd extends Component {
  render() {
    return (
      <>
        <div class="container-fluid">
          <div class="body course-category">
            {/* <!-- 面包屑 --> */}
            <ol class="breadcrumb">
              <li>
                <Link to="/course/category">课程管理</Link>
              </li>
              <li class="active">课程分类</li>
            </ol>
            <div class="category-add">
              <form action="" class="form-horizontal">
                <div class="form-group">
                  <label for="" class="col-md-4 control-label">
                    名称
                  </label>
                  <div class="col-md-3">
                    <input
                      type="text"
                      class="form-control input-sm"
                      placeholder="填写分类名称"
                    />
                  </div>
                </div>
                <div class="form-group">
                  <label for="" class="col-md-4 control-label">
                    级别
                  </label>
                  <div class="col-md-2">
                    <select name="" class="form-control input-sm">
                      <option value="">顶级分类</option>
                      <option value="">web大前端</option>
                      <option value="">JavaEE+大数据</option>
                      <option value="">Python+人工智能</option>
                    </select>
                  </div>
                </div>
                <div class="form-group">
                  <label for="" class="col-md-4 control-label">
                    排序
                  </label>
                  <div class="col-md-1">
                    <input
                      type="text"
                      class="form-control input-sm"
                      value="10"
                    />
                  </div>
                </div>
                <div class="form-group">
                  <label for="" class="col-md-4 control-label">
                    是否显示
                  </label>
                  <div class="col-md-3">
                    <label class="checkbox-inline">
                      <input type="checkbox" checked /> 是
                    </label>
                    <label class="checkbox-inline">
                      <input type="checkbox" /> 否
                    </label>
                  </div>
                </div>
                <div class="form-group">
                  <div class="col-md-8">
                    <Link
                      to="/course/category"
                      class="btn btn-sm btn-danger pull-right"
                    >
                      保存
                    </Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </>
    );
  }
}
