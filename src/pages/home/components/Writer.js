import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { actionCreator } from '../store'
import {
	WriterList,
	WriterWrapper
} from '../style'
import { SearchInfoSwitch } from '../../../common/header/style'
class Writer extends PureComponent{
	render(){
		const { writer_page_now, writer_totalPage, handleSwitchPage } = this.props
		return (
			<WriterWrapper>
				推荐作者
				<SearchInfoSwitch onClick={() => handleSwitchPage(writer_page_now,writer_totalPage,this.spinIcon)}>
					<i ref={(icon) => {this.spinIcon = icon}} className="iconfont spin">&#xe851;</i>
					换一批
				</SearchInfoSwitch>
				{
					this.showWriterList()
				}			
			</WriterWrapper>
		)
	}

	showWriterList() {
		const { writerList, writer_page_now } = this.props
		const jsInfoList = writerList.toJS()
		let info_in_page_now = []

		if(jsInfoList.length){
			for(let i = writer_page_now * 5; i < (writer_page_now+1)*5; i++){
				if(jsInfoList[i] !== undefined){
					info_in_page_now.push(
						<WriterList key={jsInfoList[i].id}>
							<img className='writerImg' src={jsInfoList[i].avatar_source} alt=""/>
							<div className="infoWrapper">
								<p className='writerName'>{jsInfoList[i].nickname}</p>
								<p className='info'>写了{this.handleCount(jsInfoList[i].total_wordage)}字 · {this.handleCount(jsInfoList[i].total_likes_count)}喜欢</p>						
							</div>
							<span className='follow'>+关注</span>
						</WriterList>						
					)			
				}
			}		
		}
		return info_in_page_now					
	}

	handleCount(count){
		if(count < 9999) return count 
		else{
			count = (count/1000).toFixed(1)
			return count + 'k'
		}
	}

	componentDidMount(){
		this.props.getWriterList(this.props.writerList)
	}
}

const mapStateToProps = (state) => {
	return {
		writerList: state.get('home').get('writerList'),
		writer_page_now: state.get('home').get('writer_page_now'),
		writer_totalPage: state.get('home').get('writer_totalPage')
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		getWriterList(list){
			(list.size === 0 ) && dispatch(actionCreator.getWriterList())			
		},
		handleSwitchPage(page,totalPage,spinIcon) {
			var originAngle = spinIcon.style.transform.replace(/[^0-9]/ig,'')
			if(originAngle){
				originAngle = parseInt(originAngle, 10)
			}else{
				originAngle = 0
			}
			spinIcon.style.transform = 'rotate('+(originAngle+360)+ 'deg)'
			if(page < totalPage -1 ) {
				dispatch(actionCreator.handleSwitchPage(page+1))
			}else{
				dispatch(actionCreator.handleSwitchPage(0))
			}
			
		}		
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(Writer)