import React, { PureComponent } from 'react'
import Topic from './components/Topic'
import Recommend from './components/Recommend'
import Writer from './components/Writer'
import List from './components/List'
import { connect } from 'react-redux'
import { actionCreator } from './store'
import {
	HomeWrapper,
	HomeLeft,
	HomeRight,
	BackTop
} from './style'
// pureComponent 一定要和 immutatable.js 相结合来管理数据 不然会有问题
class Home extends PureComponent {

	render(){
		const { showScrollTop } = this.props
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
				{ showScrollTop  ? <BackTop onClick={this.handleScrollTop.bind(this)}>△</BackTop> : null}
			</HomeWrapper>
		)
	}

	componentDidMount(){
		this.props.getHomeData()
		this.bindEvents();
	}

	componentWillUnmount() {
		window.removeEventListener('scroll',this.props.changeScrollTopShow)
	}

	handleScrollTop(){
		window.scrollTo(0,0)
	}

	bindEvents(){
		window.addEventListener('scroll',this.props.changeScrollTopShow)
	}
}

const mapStateToProps = (state) => {
	return {
		showScrollTop : state.get('home').get('showScrollTop')
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		getHomeData(){
			dispatch(actionCreator.getHomeData())
		},
		changeScrollTopShow () {
			console.log(document.documentElement.scrollTop)
			if(document.documentElement.scrollTop > 100){
				dispatch(actionCreator.changeScrollTopShow(true))
			}else{
				dispatch(actionCreator.changeScrollTopShow(false))
			}
		}
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(Home)