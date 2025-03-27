import React, { Component } from "react";
import styles from '@/styles/PageTitle.css'

class PageTitle extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1 className="title">{this.props.title}</h1>
        <p className="subtitle">{this.props.subTitle}</p>
      </div>
    );
  }
}

export default PageTitle;
