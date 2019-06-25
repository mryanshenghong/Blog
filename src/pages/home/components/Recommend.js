import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
	RecommendWrapper,
	RecommendItem
} from '../style'
class Recommend extends Component{

	render(){
		const { recommendList } = this.props
		return (
			<RecommendWrapper>
				{
					recommendList.map( (item) =>{
						return (
							<RecommendItem key={item.get('id')} imgUrl={item.get('imgUrl')} />
						)
					})
				}
				<RecommendItem  imgUrl='./api/recommendImg/member.png' />
			</RecommendWrapper>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		recommendList: state.get('home').get('recommendList')
	}
}

export default connect(mapStateToProps,null)(Recommend)