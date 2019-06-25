import * as actions from './actions'
import axios from 'axios'
import { fromJS } from 'immutable'

const updateHomeData = (data) =>({
	type:actions.GET_HOME_DATA,
	topicList: fromJS(data.topicList),
	articleList: fromJS(data.articleList),
	recommendList: fromJS(data.recommendList)	
})



export const handleSwitchPage = (page) => ({
	type: actions.SWITCHPAGE,
	value: page
})

export const getHomeData = () =>{
	return (dispatch) =>{
		axios.get('./api/home.json').then((res) => {
			const data = res.data.data
			dispatch(updateHomeData(data))
		}).catch((err) => {
			console.log(err)
		})	
	}
}

export const getMoreArtical = () => {
	return (dispatch) => {
		axios.get('./api/homeList.json').then((res) => {
			const data = res.data.data
			const action = {
				type: actions.GET_MORE_ARTICALLIST,
				value: fromJS(data)
			}
			dispatch(action)
		})
	}
}

export const getWriterList = () => {
	return (dispatch) => {
		axios.get('./api/writerList.json').then( (res)=> {
			const data = res.data.data
			const action = {
				type: actions.GET_WRITER_LIST,
				writerList: fromJS(data),
				writer_totalPage: data.length / 5
			}
			dispatch(action)
		}).catch( (err)=>{

		})
	}
}

export const changeScrollTopShow = (data) => ({
	type: actions.CHANGE_SCROLL_TOP_SHOW,
	value: data
})

