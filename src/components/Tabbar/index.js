import React, { Component } from 'react';
import {withRouter} from"react-router-dom";
import "./tabbar.less";
// @withRouter
class Tabbar extends Component {
  onItemClick = (path)=>{
    this.props.history.push(path);
  }
  render() {
    const currentPath = this.props.location.pathname
    return (
      <div className="d-tabbar ">
      {
        this.props.routes.map(route =>{
          const cls =( route.path === currentPath) ? `d-tabbar-item active` :`d-tabbar-item`;
          const clspan =( route.path === currentPath) ? `icon active` :`icon`;
          return(
            <div 
            key={ route.path} 
            className={cls}
            onClick={this.onItemClick.bind(this,route.path)}
            >
            <span className={clspan} dangerouslySetInnerHTML={{__html:route.icon}}/>
            <span>{route.title}</span>
          </div>
          )
        })
      }
      </div>
    )
  }
}
export default withRouter(Tabbar)