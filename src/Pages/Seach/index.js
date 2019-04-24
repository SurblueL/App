import React, { Component } from 'react'
import {
    Swiper,
    Listdom
} from '../../components'
import { withRouter } from 'react-router-dom'
import Api from '../../utils/Api'
import { SearchBar } from 'antd-mobile'
import { connect } from "react-redux"
import { changeUiTitle, hiddenNavOrBar } from '../../actions/show';
import './index.less'

// @connect(null,{changeUiTitle})
class Home extends Component {
    constructor() {
        super()
        this.state = {
            active: 0,
            list: [],
            word: ''
        }
    }
    componentWillMount() {
        this.props.hiddenNavOrBar(false, false);
    }

    componentDidMount() {
        this.manualFocusInst.focus()
        this.props.hiddenNavOrBar(false, false);
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.active !== this.state.active) {
            this.getSeachRes()
        }
    }

    componentWillUnmount() {
        this.props.hiddenNavOrBar(true, true)

    }
    backHome = () => {
        console.log(this.props.history)
        this.props.history.go(-1)
    }

    getSeachRes = () => {
        const { word, active } = this.state
        const data = {
            word,
            start: 0,
            sort: active,
            minPrice: 0,
            maxPrice: 99999
        }
        console.log(data)
        Api.getSeach(data).then(res => {
            const { list } = res.data
            this.setState({
                list
            })
        })
    }

    createSort = () => {
        const tab = ['默认', '价格最低', '销量最高']
        const { active } = this.state
        return tab.map((item, index) => {
            return (
                <li key={index} className={`item ${active === index ? 'active' : ''}`} onClick={() => this.setState({ active: index })}>{item}</li>
            )
        })
    }


    render() {
        const { list } = this.state
        return (
            <div className="seach">
                <div className="flex_1">
                    <SearchBar
                        placeholder="搜索"
                        maxLength={8}
                        ref={ref => this.manualFocusInst = ref}
                        onCancel={this.backHome}
                        onSubmit={this.getSeachRes}
                        onChange={(word) => this.setState({ word })}
                    />
                    {list.length > 0 && <ul className="sort_tab">{this.createSort()}</ul>}
                </div>

                <Listdom list={list} />
            </div>
        )
    }
}
export default withRouter(connect(null, { changeUiTitle, hiddenNavOrBar })(Home))
