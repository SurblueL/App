import React, { Component } from 'react'
import { Checkbox } from 'antd-mobile'
import { connect } from 'react-redux'
import { cartAdd, cartReduce } from '../../actions/cart'
import './items.less'

const CheckboxItem = Checkbox.CheckboxItem
// @connect(null, { cartAdd, cartReduce })
class CartItem extends Component {

  add = (id) => {
    console.log(id)
    this.props.cartAdd && this.props.cartAdd(id)
  }

  reduce = (id) => {
    this.props.cartAdd && this.props.cartAdd(id)
  }

  checKItem = (e, id) => {
    console.log(e, id)
    this.props.onCheckOut && this.props.onCheckOut(id, e.target.checked, id)
  }

  inputChange() {
    console.log(111)
  }

  render() {
    const {
      id,
      price,
      count,
      photo,
      title,
      checked
    } = this.props;
    console.log(this.props.checKAll)
    return (
      <li className="cart-item">
        <CheckboxItem key={id} className="check_box_item" defaultChecked={checked} checked={checked} onChange={(e) => this.checKItem(e, id)}>
          <div className="item-img">
            <img src={photo[0].url} alt={title} />
          </div>
          <div className="item-desc">
            <div className="title" >{title}</div>
            <div className="price_option">
              <span className="price">¥{price}</span>
              <div className="count">
                <span onClick={this.reduce.bind(this, id)} className="btn-option">-</span>
                <input className="btn-counter" value={count} onChange={this.inputChange}/>
                <span onClick={this.add.bind(this, id)} className="btn-option">+</span>
              </div>
            </div>

          </div>
        </CheckboxItem>

      </li>
    )
  }
}
export default connect(null, { cartAdd, cartReduce })(CartItem)
