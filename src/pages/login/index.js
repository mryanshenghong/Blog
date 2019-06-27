import React, { PureComponent } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { actionCreator } from './store'
import {
	LoginWrapper,
	LoginBox,
	Input,
	Button,
	Option,
	SocialBox
} from './style'

class Login extends PureComponent{
	render(){
		const { loginStatus } = this.props
		if(!loginStatus){
			return (
				<LoginWrapper>
					<LoginBox>
						<Option><a className="active">登录</a>·<a>注册</a></Option>
						<Input className='acc' placeholder="账号"  ref={ (input) => { this.account = input }} />
						<Input className='pwd' placeholder="密码" type='password' ref={(input) => {this.password = input}} />
						<Button onClick={ () => this.props.login(this.account,this.password)}>登录</Button>
					<SocialBox>
						<p className='social-title'>社交帐号登录</p>
					</SocialBox>						
					</LoginBox>
				</LoginWrapper>
			)			
		}else{
			return <Redirect to='/'></Redirect>
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

const mapDispatchToProps = (dispatch) => {
	return {
		login(acc,pwd){
			dispatch(actionCreator.login(acc,pwd))
		}
	}
}


export default connect(mapStateToProps,mapDispatchToProps)(Login)