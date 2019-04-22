import React, { Component } from 'react';
import { Carousel } from 'antd-mobile';
// import { create } from 'domain';
// import { SearchBar} from 'antd-mobile';
// import './swiper.less';

export default class Swiper extends Component {
  createSwiper = () => {
    const { list } = this.props
    const swiperDom = list&&list.map(item => (
      <div key={item.id} className="b-item">
        <img src={item.imageUrl} alt={item.title} onLoad={() => {window.dispatchEvent(new Event('resize'));}}/>
      </div>
    ))
    return swiperDom
  }
  render() {
    // const { list } = this.props
    return (
      <div>
        {/* 轮播 */}
        <Carousel className="b-carousel"
        //  style = "touch-action: none;"
          dots
          swiping
          autoplay
          infinite
          speed={1000}
          autoplayInterval={2000}
        >
          {this.createSwiper()}
        </Carousel>

      </div>
    )
  }
}

