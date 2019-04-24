import React, { Component } from 'react'
import { Checkbox } from 'antd-mobile'
import { connect } from 'react-redux'
import { cartAdd, cartReduce, countInputChange } from '../../actions/cart'
import './items.less'

const CheckboxItem = Checkbox.CheckboxItem
// @connect(null, { cartAdd, cartReduce })
class CartItem extends Component {

  constructor(props) {
    super(props)
    this.state = {
      count:  this.props.count && this.props.count || 0
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps) {
      this.setState({
        count: nextProps.count || 0
      })
    }
  }

  add = (id) => {
    console.log(id)
    this.props.cartAdd && this.props.cartAdd(id)
  }

  reduce = (id) => {
    this.props.cartReduce && this.props.cartReduce(id)
  }

  countChange = (e, status, id) => {
    this.props.cartCountChange && this.props.cartCountChange()
    switch (status) {
      case 'add':
      this.props.cartAdd && this.props.cartAdd(id)
        break;
      
      case 'reduce':
      this.props.cartReduce && this.props.cartReduce(id)
        break;

      case 'input':
      console.log(e.target.value)
      this.setState({
        count: parseInt(e.target.value)
      })
      this.props.countInputChange && this.props.countInputChange(id, parseInt(e.target.value))
        break;
    }
  }

  checKItem = (e, id) => {
    console.log(e, id)
    this.props.onCheckOut && this.props.onCheckOut(id, e.target.checked, id)
  }

  render() {
    const {
      id,
      price,
      // count,
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
                <span onClick={(e) => this.countChange(e, 'reduce', id)} className="btn-option">-</span>
                <input className="btn-counter" value={this.state.count} onChange={(e) => this.countChange(e, 'input', id)}/>
                <span onClick={(e) => this.countChange(e, 'add', id)} className="btn-option">+</span>
              </div>
            </div>

          </div>
        </CheckboxItem>

      </li>
    )
  }
}
export default connect(null, { cartAdd, cartReduce, countInputChange })(CartItem)
