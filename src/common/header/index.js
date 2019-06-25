import React , { Component } from 'react'
import {CSSTransition} from 'react-transition-group'
import { connect } from 'react-redux'
import { HeaderWapper, Logo, Nav, NavItem, NavSearch, Addtion, Button, SearchWrapper, SearchInfo, SearchInfoTitle, SearchInfoSwitch, SearchInfoList , SearchInfoItem } from './style'
import  { actionCreator } from './store'


//无状态组件，性能更高
// const Header = (props) => {
// 	return (
// 	<HeaderWapper>
// 				<Logo href='/' />
// 				<Nav>
// 					<NavItem className='left active'>首页</NavItem>
// 					<NavItem className='left'>下载App</NavItem>
// 					<NavItem className='right'>登录</NavItem>
// 					<NavItem className='right'>
// 						<i className="iconfont">&#xe636;</i>
// 					</NavItem>
// 					<SearchWrapper>
// 						<CSSTransition
// 							timeout={200}
// 							in={props.focused}
// 							classNames="inputSlide"
// 						>
// 							<NavSearch 
// 								className={props.focused ? 'focused' : ''}
// 								onFocus={props.handleInputFocus}
// 								onBlur={props.handleInputBlur}
// 							>
// 							</NavSearch>							
// 						</CSSTransition>
// 						<i className={props.focused ? 'focused iconfont' : 'iconfont'} >&#xe60b;</i>
// 						{showSearchInfoList(props.focused)}						
// 					</SearchWrapper>
// 				</Nav>
// 				<Addtion>
// 					<Button className="writting">
// 						<i className="iconfont">&#xe624;</i>
// 						写文章
// 					</Button>
// 					<Button className="reg">注册</Button>
// 				</Addtion>
// 			</HeaderWapper>		
// 	)
// }

class Header extends Component {
	showSearchInfoList() {
	const { focused ,searchInfoList, page, totalPage , mouseIn, handleMouseEnter, handleMouseLeave, handleSwitchPage } = this.props 
	const jsInfoList = searchInfoList.toJS()
	let info_in_page_now = []

	if(jsInfoList.length){
		for(let i = page * 10; i < (page+1)*10; i++){
			console.log()
			if(jsInfoList[i] !== undefined){
				info_in_page_now.push(
					<SearchInfoItem key={jsInfoList[i]}>{jsInfoList[i]}</SearchInfoItem>
				)			
			}
		}		
	}


	if(focused || mouseIn){
		return (
				<SearchInfo 
					onMouseEnter={handleMouseEnter}
					onMouseLeave={handleMouseLeave}
				>
					<SearchInfoTitle>
						热门搜索
						<SearchInfoSwitch onClick={() => handleSwitchPage(page,totalPage,this.spinIcon)}>
							<i ref={(icon) => {this.spinIcon = icon}} className="iconfont spin">&#xe851;</i>
							换一批
						</SearchInfoSwitch>
					</SearchInfoTitle>
					<SearchInfoList>
						{info_in_page_now}					
					</SearchInfoList>
				</SearchInfo>
			)
		}else{
			return null
		}
	}	
	render(){
		const { focused , handleInputFocus, handleInputBlur, searchInfoList} = this.props
		return (
			<HeaderWapper>
				<Logo href='/' />
				<Nav>
					<NavItem className='left active'>首页</NavItem>
					<NavItem className='left'>下载App</NavItem>
					<NavItem className='right'>登录</NavItem>
					<NavItem className='right'>
						<i className="iconfont app">&#xe609;</i>
					</NavItem>
					<NavItem className='right'>
						<i className="iconfont">&#xe636;</i>
					</NavItem>
					<SearchWrapper>
						<CSSTransition
							timeout={200}
							in={focused}
							classNames="inputSlide"
						>
							<NavSearch 
								className={focused ? 'focused' : ''}
								onFocus={() => handleInputFocus(searchInfoList)}
								onBlur={handleInputBlur}
							>
							</NavSearch>							
						</CSSTransition>
						<i className={focused ? 'focused iconfont zoom' : 'iconfont zoom'} >&#xe60b;</i>
						{this.showSearchInfoList()}						
					</SearchWrapper>
				</Nav>
				<Addtion>
					<Button className="writting">
						<i className="iconfont">&#xe624;</i>
						写文章
					</Button>
					<Button className="reg">注册</Button>
				</Addtion>
			</HeaderWapper>	
		)
	}

}

const mapStateToProps = (state) => {
	return {
		// focused: state.getIn(['header','focused'])
		focused: state.get('header').get('focused'),
		searchInfoList: state.get('header').get('searchInfoList'),
		page: state.get('header').get('page'),
		mouseIn: state.get('header').get('mouseIn'),
		totalPage: state.get('header').get('totalPage')
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		handleInputFocus(list){
			(list.size === 0) && dispatch(actionCreator.getSearchInfoList())
			dispatch(actionCreator.inputFocus())
		}, 
		handleInputBlur(){
			dispatch(actionCreator.inputBlur())
		},
		handleMouseEnter() {
			dispatch(actionCreator.handleMouseEnter())
		},
		handleMouseLeave() {
			dispatch(actionCreator.handleMouseLeave())
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

export default connect(mapStateToProps, mapDispatchToProps)(Header)