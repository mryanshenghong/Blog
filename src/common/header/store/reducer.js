import * as actions from './actions'
import { fromJS } from 'immutable'
const defaultState = fromJS({
	focused: false,
	mouseIn: false,
	searchInfoList:[],
	page: 0,
	totalPage: 1,
	activeLink:'home'
});

export default (state = defaultState, action) => {
	switch(action.type) {
		case actions.INPUT_FOCUS:
			return state.set('focused', true)
		case actions.INPUT_BLUR:
			return state.set('focused', false)
		case actions.UPDATE_SEARCHINFOLIST:
			return state.merge({
				'searchInfoList':action.value,
				'totalPage':action.totalPage
			})
		case actions.INPUT_MOUSE_ENTER:
			return state.set('mouseIn',true)
		case actions.INPUT_MOUSE_LEAVE:
			return state.set('mouseIn',false)	
		case actions.SWITCHPAGE:
			return state.set('page',action.value)
		case actions.CHANGE_ACTIVE_LINK:
			return state.set('activeLink',action.value)			
		default:
			return state
	}
}