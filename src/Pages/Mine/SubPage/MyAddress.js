import React, { Component } from 'react'
import{ connect } from "react-redux"

import{ changeUiTitle,hiddenNavOrBar} from "../../../actions/show"

// @connect(null,{changeUiTitle})
class Myorder extends Component {
  componentDidMount(){
    this.props.changeUiTitle("我的收货地址")
    this.props.hiddenNavOrBar(true,false)
  }
  componentWillUnmount(){
    this.props.hiddenNavOrBar(true,true)
  }
  render() {

    return (
      <div>
        我的收货地址
      </div>
    )
  }
}
export default connect(null,{changeUiTitle,hiddenNavOrBar})(Myorder)
