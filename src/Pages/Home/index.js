import React, { Component } from 'react'
import {
  Swiper,
  Listdom
} from '../../components'
import { withRouter } from 'react-router-dom'
import Api from '../../utils/Api'
import { SearchBar} from 'antd-mobile'
import{ connect } from "react-redux"
import{ changeUiTitle} from "../../actions/show"

// @connect(null,{changeUiTitle})
class Home extends Component {
  constructor() {
    super()
    this.state = {
        listimg: [],
        list: []
    }
  }

  componentDidMount(){
    this.props.changeUiTitle("首页")
    this.getSwiper()
  }
  getSwiper = ()=> {
    Api.getHome(1)
    .then(resp => {
      const {banners,items} = resp.data
      this.setState({
          listimg:banners,
          list: items.list
      })
    })
  }
  toSeach =()=>{
    this.props.history.push(`/seach/`)
  }

  render() {
    return (
      <div>
        <SearchBar placeholder="搜索" maxLength={8} onFocus={this.toSeach}/>
        <Swiper list = {this.state.listimg} />
        <Listdom list = {this.state.list}/>
      </div>
    )
  }
}
export default withRouter(connect(null,{changeUiTitle})(Home))
