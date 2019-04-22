import React, { Component } from 'react';
import { Carousel } from 'antd-mobile';
// import { SearchBar} from 'antd-mobile';
import './swiper.less';

export default class Iswiper extends Component {
  render() {
    
    const list = this.props.list||[];
    return (
      <div>
        {/* <SearchBar placeholder="Search" maxLength={8} /> */}
        {/* 轮播 */}
        <Carousel className="detail-carousel"
        //  style = "touch-action: none;"
          dots
          swiping
          autoplay
          infinite
          speed={1000}
          autoplayInterval={2000}
        >
          {list.map(item => (
            <div key={item.id} className="img-item">
              <img src={item.url} alt={item.title} onLoad={() => {window.dispatchEvent(new Event('resize'));}}/>
            </div>
          ))}
        </Carousel>

      </div>
    )
  }
}

