import React, { Component, Fragment } from 'react'
import { GlobalStyles } from './style'
import { Icon } from './statics/iconfont/iconfont'
import Header from './common/header'
import store from './store'
import { Provider } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'

import Home from './pages/home'
import Detail from './pages/detail'

class App extends Component {
  render() {
    return (
          <Provider store={store}>
			<Fragment>
	            <GlobalStyles />
	            <Icon />
	            <BrowserRouter>
	            <Header />
	            	<Route path="/" exact component={Home}></Route>
	            	<Route path="/detail" exact component={Detail}></Route>
	            </BrowserRouter>				
			</Fragment>              
          </Provider>                
    );
  }
}

export default App;
