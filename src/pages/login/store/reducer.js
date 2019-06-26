import * as actions from './actions'
import { fromJS } from 'immutable'
const defaultState = fromJS({
	login: false
});

export default (state = defaultState, action) => {
	switch(action.type) {	
		case actions.CHANGE_LOGIN:
			return state.set('login',action.value)
		case actions.CHANGE_LOGOUT:
			return state.set('login',action.value)			
		default:
			return state
	}
}