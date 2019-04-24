import React, { Component } from 'react'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Toast } from 'antd-mobile';
import Api from '../../utils/Api';
import { changeUiTitle, hiddenNavOrBar } from '../../actions/show';
import { addToCart } from '../../actions/cart';
import Iswiper from './Iswiper'
import './index.less'
// @withRouter
// @connect(null, { changeUiTitle,toggleIsSubpage,addToCart })
 class Detail extends Component {
  onAddToCart = (item) => {
    Toast.success('加入购物车成功！', 1);
    this.props.addToCart(item);
  }
  constructor() {
    super();
    this.state = {
        id:null,
        title:null,
        photo: [],
        price:null,
        amount:null,
        detailImg:[],
        count:1
      
    };
  }
  componentDidMount(){
    this.props.hiddenNavOrBar(0,0);
    const proid = this.props.match.params.id;
    Api.getDetail(proid)
      .then(resp => {
        const detail = resp.data.detail;
        // console.log(detail)
        this.setState({
          id:detail.id,
          title:detail.title,
          photo: detail.photo,
          price: detail.bottomPrice,
          amount: detail.saleNum,
          detailImg:detail.descContentList||[]

        })
      });
  }
  componentWillUnmount() {
    this.props.toggleIsSubpage && this.props.toggleIsSubpage();
  }
  render() {
    return (
      <div className = "detail-main">
        <span className="iconfont detail-back" onClick = {this.props.history.goBack.bind(this)}>&#xe625;</span>
        <Iswiper list = {this.state.photo} />
        <div className = "detail-title">{this.state.title}</div>
        <div className = "price-amount">
          <span>￥{this.state.price}</span>
          <span>月销量：{this.state.amount}</span>
       </div>
       <div className="cartbtn">
        <div className="icon">
          <div className="bottom-icon">
              <span className="iconfont">&#xe611;</span>
              <span>店铺</span>
          </div>
          <div className="bottom-icon">
              <span className="iconfont">&#xe610;</span>
              <span>购物车</span>
          </div>
          <div className="bottom-icon">
            <span className="iconfont">&#xe617;</span>
            <span>收藏</span>
          </div>
        </div>
       <span className="addcart" onClick={this.onAddToCart.bind(this, this.state)}>加入购物车</span>
       {/* <span className="addcart" onClick={this.successToast}>加入购物车</span> */}
       </div>
       
       <span className = "pic-detail">图文详情</span>
       <div className = "detail-img">
        {
          
          this.state.detailImg.map(item => (
            // console.log(item)
          item.photo &&<img key={item.photo.id} src={item.photo.url} alt='s'/>
          ))}
        
      </div>
      </div>
      
    )
  }
}
export default withRouter(connect(null,{changeUiTitle,hiddenNavOrBar,addToCart})(Detail))
