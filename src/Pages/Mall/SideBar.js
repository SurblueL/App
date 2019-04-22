import React, { Component } from 'react';
// import {getCategory} from '../../services';
export default class SideBar extends Component {
  render() {
    return (
      <ul>
        {
          this.props.category.map(item=>{
            const cls = this.props.currentCategoryId === item.id ? 'category-item active' :'category-item' ;
            return(
              <li className={cls}
              key={item.id} 
              onClick={this.props.onItemClick.bind(this,item.id)}
              >
              {item.name}
              </li>
            )
          })
        }
      </ul>
      
    )
  }
}
