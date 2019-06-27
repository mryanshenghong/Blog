import React, { PureComponent } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
// import { actionCreator } from './store'
// import {
// 	LoginWrapper,
// 	LoginBox,
// 	Input,
// 	Button
// } from './style'

class Write extends PureComponent{
	render(){
		const { loginStatus } = this.props
		if(loginStatus){
			return (
				<div>写文章</div>
			)			
		}else{
			return <Redirect to='/login'></Redirect>
		}
	}

	componentDidMount() {

	}
}

const mapStateToProps = (state) => {
	return {
		loginStatus: state.get('login').get('login')
	}
}



export default connect(mapStateToProps,null)(Write)