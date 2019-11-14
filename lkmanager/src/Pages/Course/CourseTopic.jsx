import React, { Component } from "react";

export default class CourseTopic extends Component {
  render() {
    return (
      <>
        <div className="container-fluid">
          <div className="body course-topic">
            {/* <!-- 面包屑 --> */}
            <ol className="breadcrumb">
              <li>
                {" "}
                <a onClick={e => e.preventDefault()} href="a.html">
                  课程管理
                </a>
              </li>
              <li className="active">课程专题</li>
            </ol>
            <h3>版块拓展中...</h3>
          </div>
        </div>
      </>
    );
  }
}
