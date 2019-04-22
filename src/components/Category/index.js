import React, { PureComponent } from 'react'
import { Grid } from 'antd-mobile'
import Api from '../../utils/Api'

export default class Classify extends PureComponent {
  constructor() {
    super();
    this.state = {
      category: [],
      list: []

    };
  }
  componentDidMount() {
    this.getCategory()
  }
  getCategory = () => {
    Api.getCategory().then(res => {
      const data = res.data.list.slice(1)
      const category = data.map(item => {
        const newCategory={
          icon: item.imageUrl,
          text:item.name
        }
        return newCategory
      });
      this.setState({
        category
      }, () => {
        // const {currentCategoryId} = this.state
        // Api.getCategoryLIstById(currentCategoryId)
        //   .then(res=>{
        //     this.setState({
        //       list:res.data.items,
        //     })
        //   })
        console.log(this.state)
      })

    })
  }
  render() {
    const { category } = this.state
    return (
      <div>
        <Grid data={category} columnNum={4} hasLine={false} itemStyle={{width:'94px',height:'80px'}}/>
      </div>
    )
  }
}
