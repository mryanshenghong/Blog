import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { actionCreator } from './store'
import {
	DetailWrapper,
	Header,
	Content
} from './style'

class Detail extends PureComponent{
	render(){
		return (
			<DetailWrapper>
				<Header>{this.props.title}</Header>
				<Content dangerouslySetInnerHTML={{__html: this.props.content}} />
			</DetailWrapper>
		)
	}

	componentDidMount() {
		//获取页面路由参数 this.props.match.params.id
		this.props.getDetail();
	}
}

const mapStateToProps = (state) => {
	return {
		title: state.get('detail').get('title'),
		content: state.get('detail').get('content')
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		getDetail () {
			dispatch(actionCreator.getDetail())
		}
	}
}


export default connect(mapStateToProps,mapDispatchToProps)(withRouter(Detail))