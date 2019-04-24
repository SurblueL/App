import React, { Component } from 'react'
import { connect } from "react-redux"
import { changeUiTitle, hiddenNavOrBar } from "../../actions/show"
// @connect(null,{changeUiTitle})
import './index.less'
class Mall extends Component {
  constructor() {
    super()
    this.state = {
      tab: [
        {
          path: "/MyOrder",
          title: "我的订单",
          icon: "#icon-dingdan",
        }, {
          path: "/MyAddress",
          title: "我的收货地址",
          icon: "#icon-weizhi",
        }, {
          path: "/MyBrowsing",
          title: "浏览历史",
          icon: "#icon-xiaoxi",
        }, {
          path: "/MyCollect",
          title: "我的收藏",
          icon: "#icon-shoucang",
        }, {
          path: "/MySetting",
          title: "设置",
          icon: "#icon-shezhi",
        }, {
          path: "/About",
          title: "关于",
          icon: "#icon-bangzhu",
        }
      ]
    }
  }
  componentDidMount() {
    this.props.hiddenNavOrBar(false)
  }
  componentWillUnmount() {
    this.props.hiddenNavOrBar(1)
  }

  toSubpage = (url) => {
    this.props.history.push(url)
  }

  createSubpag = () => {
    const { tab } = this.state
    const dom = tab.map(item => {
      return (
        <li className="subpage_item" key={item.path} onClick={this.toSubpage.bind(this, item.path)}>
          <i className={`iconfont ${item.icon}`} ></i>
          <svg class="iconfont" aria-hidden="true">
            <use href={item.icon}></use>
          </svg>
          <span >{item.title}</span>
          <i class="iconfont tosubpage">&#xe633;</i>
        </li>
      )
    })
    return dom
  }
  render() {

    return (
      <div className="mine">
        <div className="header">
          <div className="user_info">
            <div className="img_box">
              <img src="https://wx1.sinaimg.cn/mw690/e571fdf0ly1g29f8rw3pzj21w01ut1kx.jpg" alt="s"></img>
            </div>
            <span className="name">我想吃烤香蕉</span>
          </div>
        </div>
        <ul className="subpage">
          {this.createSubpag()}
        </ul>

      </div>
    )
  }
}
export default connect(null, { changeUiTitle, hiddenNavOrBar })(Mall)
