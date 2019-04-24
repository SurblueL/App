import React, { Component } from 'react'
import { connect } from "react-redux"
import { Checkbox } from 'antd-mobile'
import { changeUiTitle } from "../../actions/show"
import Item from './items'
import './index.less'

const CheckboxItem = Checkbox.CheckboxItem
const syncCartStorage = (carlist) => {
  window.localStorage.setItem('mycart', JSON.stringify(carlist))
}
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
      checKAll:false,
      cartData: "",
      totalPrice: 0
    };
  }
  componentDidMount() {
    // console.log(this.props)
    this.setState({
      cartData: this.props.list || []
    })
    this.props.changeUiTitle && this.props.changeUiTitle("购物车")
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
    const { cartData = [] } = this.state
    for (const item of cartData) {
        item['checked'] = checKAll
    }
    syncCartStorage(cartData)  
    this.setState({
      cartData,
      checKAll
    })
  }

  onCheckOut = (id, status) => {
    console.log(id, status, this)
    let { cartData = [] } = this.state
    let checKAll = true
    for (const item of cartData) {
      if(item['id'] == id) {
        item['checked'] = status
      }
    }

    for (const item of cartData) {
      if (!item['checked']) {
        checKAll = false
      }
    }
    syncCartStorage(cartData)  
    this.setState({
      cartData,
      checKAll
    })
  }

  render() {
    console.log('this.state.cartData', this.state.cartData)
    console.log('this.props', this.props)
    let { countTatol, checKAll, cartData} = this.state
    let totalPrice = 0;
    if (cartData && cartData.length) {
      for (const item of cartData) {
        if (item['checked']) {
          totalPrice = Number(Number(totalPrice) + (item['count'] * item['price'])).toFixed(2)
        }
      }
    }
    return (
      <div className="cart_box">
        <div className="cart_top">
          <span>共<span>{countTatol}</span>件宝贝</span>
          <span>管理</span>
        </div>
        <ul className="mycart">
          {
            cartData && cartData.map(cart => {
              // console.log(list)
              return <Item key={cart.id} {...cart} onCheckOut={this.onCheckOut}/>
            })
          }
        </ul>
        <div className="fixed_footer">
          <CheckboxItem cartCountChange={() => this.countChange()} className="check_box_item" onChange={this.checKAll} checked={checKAll}>全选</CheckboxItem>
          <div className="foot_right">
            <span>合计：<span>¥ {totalPrice}</span></span>
            <div className="total">结算</div>
          </div>
        </div>
      </div>
    )
  }
}
export default connect(mapState, { changeUiTitle })(Mall)
