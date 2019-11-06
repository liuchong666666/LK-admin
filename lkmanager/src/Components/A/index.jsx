import React, { Component } from 'react';
import styles from './index.module.scss';

export default class A extends Component {
  render() {
    let { children, ...rest } = this.props;
    return (
      <span>
        <span className={styles.box} {...rest}>
          {children}
        </span>
      </span>
    );
  }
}
