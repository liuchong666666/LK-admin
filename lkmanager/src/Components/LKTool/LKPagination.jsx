import React, { Component } from 'react';
import RCPagination from 'rc-pagination';
import 'rc-pagination/dist/rc-pagination.min.css';

export default class LKPagination extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <div className="pagination pull-right">
          <RCPagination {...this.props} />
        </div>
      </>
    );
  }
}
