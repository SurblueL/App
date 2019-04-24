import React, { Component } from 'react'
import { connect } from "react-redux";
import { changeUiTitle } from "../../actions/show";
import Api from '../../utils/Api';
import {
  Listdom
} from '../../components';
// import SideBar from './SideBar.js';
import { Tabs } from 'antd-mobile'
// import "./mall.less";

// @connect(null, { changeUiTitle })

class Mall extends Component {
  constructor() {
    super();
    this.state = {
      tabs: [],
      currentCategoryId: 2,
      list: []
    }
  }

  componentDidMount() {
    this.props.changeUiTitle("商城")
    this.getCategory()
  }
  getCategory = () => {
    Api.getCategory().then(res => {
      const data = res.data.list.slice(1)
      const tabs = data.map(item => {
        const tabs = {
          title: item.name,
          id: item.id
        }
        return tabs
      });
      this.setState({
        tabs
      }, () => {
        this.getTabsList(2)
      })

    })
  }
  onItemClick = (id) => {
    this.setState({
      currentCategoryId: id
    }, () => {
      Api.getCategoryLIstById(this.state.currentCategoryId)
        .then(resp => {
          this.setState({
            list: resp.data.data.items.list,
          })
        })
    })
  }
  renderContent = tab =>
    (<Listdom list={this.state.list} />)

  // 切换tabs
  changeTabs = (tab, index) => {
    console.log(tab, index)
    this.getTabsList(tab.id)
  }

  // 请求新的tabs下的商品
  getTabsList = (id) => {
    Api.getCategoryLIstById(id)
      .then(res => {
        this.setState({
          list: res.data.items.list
        })
      })
  }


  render() {
    const { tabs } = this.state
    return (
      <div className="all-mall-wrapper">
        <Tabs tabs={tabs} renderTabBar={props => <Tabs.DefaultTabBar {...props} page={5} onTabClick={this.changeTabs} />}>
          {this.renderContent}
        </Tabs>
      </div>
    )
  }
}
export default connect(null, { changeUiTitle })(Mall)
