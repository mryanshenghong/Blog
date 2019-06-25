import React, { Component } from 'react'
import Topic from './components/Topic'
import Recommend from './components/Recommend'
import Writer from './components/Writer'
import List from './components/List'
import { connect } from 'react-redux'
import { actionCreator } from './store'
import {
	HomeWrapper,
	HomeLeft,
	HomeRight
} from './style'
class Home extends Component{
	render(){
		return (
			<HomeWrapper>
				<HomeLeft>
					<img className='banner-img' src="./banner.jpg" alt=""/>
					<Topic />
					<List />
				</HomeLeft>
				<HomeRight>
					<Recommend />
					<Writer />
				</HomeRight>
			</HomeWrapper>
		)
	}

	componentDidMount(){
		this.props.getHomeData()
	}
}


const mapDispatchToProps = (dispatch) => {
	return {
		getHomeData(){
			dispatch(actionCreator.getHomeData())
		}
	}
}

export default connect(null,mapDispatchToProps)(Home)