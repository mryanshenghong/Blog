import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import {
	ListItem,
	ListInfo,
	LoadMore,
	Records,
	RecordItem
} from '../style'
import { actionCreator } from '../store'
import { Link } from 'react-router-dom'
class List extends PureComponent{

	render(){
		const { articleList, getMoreArtical } = this.props 
		return (
			<div>
				{
					articleList.map( (item) => {
						return (
							<Link key={item.get('id')} to='/detail'>
								<ListItem  img={item.get('imgUrl')}>
									<img className="list-pic" src={item.get('imgUrl')} alt=""/>
									<ListInfo img={item.get('imgUrl')}>
										<h3 className="title">{item.get('title')}</h3>
										<p className="des">{item.get('desc')}</p>
										<Records>
											<RecordItem>
												<i className="iconfont app">&#xe609;</i>{item.get('app')}
											</RecordItem>
											<RecordItem>
												<i className='author'>{item.get('author')}</i>
											</RecordItem>
											<RecordItem>
												<i className="iconfont">&#xe628;</i>{item.get('commends')}
											</RecordItem>
											<RecordItem>
												<i className="iconfont">&#xe757;</i>{item.get('likes')}
											</RecordItem>
										</Records>
									</ListInfo>
								</ListItem>
							</Link>	
						)						
					})
				}
				<LoadMore onClick={getMoreArtical}>阅读更多</LoadMore>			
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		articleList: state.get('home').get('articleList')
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		getMoreArtical(){
			dispatch(actionCreator.getMoreArtical())
		}
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(List)