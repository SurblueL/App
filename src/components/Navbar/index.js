import React, { Component ,Fragment } from 'react';
import { NavBar, Icon } from 'antd-mobile';
import {connect} from 'react-redux';
import { withRouter } from 'react-router-dom';

import './navbar.less'

const mapStateToProps = (state)=>{
  return{
    pageTitle:state.show.pageTitle,
    isSubpage: state.show.isSubpage
  }
}

@withRouter
@connect(mapStateToProps)

export default class index extends Component {
  render() {
    const navBarProps = {};
     if(this.props.isSubpage) {
      navBarProps.onLeftClick = this.props.history.goBack.bind(this)
    }
    return (
      <Fragment>
      <NavBar
      mode="light"
      icon={<Icon 
        onClick = {this.props.history.goBack.bind(this)}
        type="left" 
        />}
      rightContent={[
        <Icon key="1" type="ellipsis" />,
      ]}
    >
    {this.props.pageTitle}
    </NavBar>
</Fragment>
    )
  }
}
