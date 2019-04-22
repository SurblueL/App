import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import "./list.less"

// @withRouter
class HomeList extends Component {
  toDetail(id) {
    this.props.history.push(`/detail/${id}`)
  }
  render() {
    const list = this.props.list.list||[];
    // console.log(this.props.list)
    return (
      <ul>
       {list.map(item => (
          item.type===1?
            <li key = {item.id} className = "card pubcard" onClick={this.toDetail.bind(this, item.id)}>
                  <div className = "img">
                    <img src = {item.image} alt='s'></img>
                  </div>
                  <div className = "text">
                      <div className="title">{item.title}</div>
                      {
                        item.couponValue?
                        <div className = "quan">{item.couponValue}</div>
                        :
                        <div></div>

                      }
                      {/*  <div className = "quan">{item.couponValue}</div> */}
                      <div className = "more">
                          <span>￥{item.originPrice}</span>
                          {
                            item.saleNum>10000?
                            <span>{parseInt(item.saleNum/10000)}万人已买</span>
                            :
                            <span>{item.saleNum}人已买</span>
                          }
                          {/* <span>{item.saleNum}人已买</span> */}
                          {/* <span>{item.couponValue}</span> */}
                      </div>
                  </div>
            </li>
            :
            <li key = {item.id} className = "onlycard pubcard">
                  <div className = "onlyimg">
                    <img src = {item.image} alt='s'></img>
                  </div>
                  
            </li>
          ))}
      </ul>
    )
  }
}
export default withRouter(HomeList)
