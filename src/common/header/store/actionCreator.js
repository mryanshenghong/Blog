import * as actions from './actions'
import axios from 'axios'
import { fromJS } from 'immutable'

// 
const updateSearchInfoList = (data) =>({
	type: actions.UPDATE_SEARCHINFOLIST,
	value: fromJS(data),
	totalPage: Math.ceil(data.length / 10)
})

// exports

export const inputFocus = () => ({
	type: actions.INPUT_FOCUS
})

export const inputBlur = () => ({
	type: actions.INPUT_BLUR
})

export const handleMouseEnter = () => ({
	type: actions.INPUT_MOUSE_ENTER
})

export const handleMouseLeave = () => ({
	type: actions.INPUT_MOUSE_LEAVE
})

export const handleSwitchPage = (page) => ({
	type: actions.SWITCHPAGE,
	value: page
})

export const getSearchInfoList = () =>{
	return (dispatch) =>{
		axios.get('./api/searchInfoList.json').then((res) => {
			const data = res.data.data
			dispatch(updateSearchInfoList(data))
		}).catch((err)=>{
			console.log(err.message)
		})
	}
}



