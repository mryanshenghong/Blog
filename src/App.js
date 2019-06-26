import React, { Component, Fragment } from 'react'
// import { GlobalStyles } from './style'
// import { Icon } from './statics/iconfont/iconfont'
import Header from './common/header'
import store from './store'
import { Provider } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'
import Login from './pages/login'
import Home from './pages/home'
import Detail from './pages/detail/loadable'
import Write from './pages/write'

class App extends Component {
  render() {
    return (
          <Provider store={store}>
	            <BrowserRouter>
		            <Fragment>
		            <Header />
		            	<Route path="/" exact component={Home}></Route>
		            	<Route path="/detail/:id" exact component={Detail}></Route>
		            	<Route path="/login" exact component={Login}></Route>
		            	<Route path="/write" exact component={Write}></Route>
		            </Fragment>
	            </BrowserRouter>				              
          </Provider>                
    );
  }
}

export default App;
