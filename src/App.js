import React, { Component } from 'react'
import {
    Switch,
    Redirect,
    Route
} from 'react-router-dom';
import { connect } from 'react-redux';
import routes from './routes';
import {
  Tabbar,
  Navbar
} from './components';
import './app.less';
import './style/index.less';

require('./style/iconfonts/iconfont.js');



const tabbarRoutes = routes.filter(route=>route.title);
const mapState = state => {
  return {
    isShowNav: state.show.isShowNav,
    isShowTab: state.show.isShowTab
  }
}
// @connect(mapState)
class App extends Component {
render(){
  const {isShowNav,isShowTab}=this.props
  return (
    <div className="app">
    {/* <Navbar/> */}
    {
          isShowNav && (
            <Navbar/>
          )
        }
      <div className="main">
        <Switch>
            {
              routes.map(route =>{
                return(
                  <Route key={route.path} 
                          path={route.path}
                          component={route.component}
                  />
                )
              })
            }    
            <Redirect  exact from ="/" to={routes[0].path}/>   
          </Switch>
      </div>
      {
          isShowTab && (
            <div>
              <Tabbar
                routes={tabbarRoutes}
              />
            </div>
          )
        }
    </div>
  )
}
 
}
export default connect(mapState, { })(App)
