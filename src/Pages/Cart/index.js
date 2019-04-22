import React, { Component } from 'react'
import { connect } from "react-redux"
import { Checkbox } from 'antd-mobile'
import { changeUiTitle } from "../../actions/show"
import Item from './items'
import './index.less'

const CheckboxItem = Checkbox.CheckboxItem
const mapState = state => {
  return {
    list: state.cart.list
  }
}
// @connect(mapState,{changeUiTitle})
class Mall extends Component {
  constructor() {
    super();
    this.state = {
      countTatol: 0,
      checKAll:false

    };
  }
  componentDidMount() {
    // console.log(this.props)
    this.props.changeUiTitle("购物车")
    this.calculate()
  }

  calculate = () => {
    const list = this.props.list
    const countTatol = list.reduce((result, item) => {
      result += parseFloat(item.count)
      return result
    },0)
    this.setState({ countTatol })
  }

  checKAll = (e)=>{
    const checKAll = e.target.checked
    this.setState({checKAll})
  }

  render() {
    // console.log(this.props)
    const list = this.props.list;
    const { countTatol,checKAll } = this.state
    return (
      <div className="cart_box">
        <div className="cart_top">
          <span>共<span>{countTatol}</span>件宝贝</span>
          <span>管理</span>
        </div>
        <ul className="mycart">
          {
            list.map(cart => {
              // console.log(list)
              return <Item key={cart.id} {...cart} checKAll={checKAll} />
            })
          }
        </ul>
        <div className="fixed_footer">
          <CheckboxItem className="check_box_item" onChange={this.checKAll} checked={checKAll}>全选</CheckboxItem>
          <div className="foot_right">
            <span>合计：<span>¥ 43434344</span></span>
            <div className="total">结算(0)</div>
          </div>
        </div>
      </div>
    )
  }
}
export default connect(mapState, { changeUiTitle })(Mall)
