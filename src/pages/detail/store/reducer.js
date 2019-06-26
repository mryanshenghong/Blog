import * as actions from './actions'
import { fromJS } from 'immutable'
const defaultState = fromJS({
	title:'',
	content: '',
});

export default (state = defaultState, action) => {
	switch(action.type) {	
		case actions.GET_DETAIL:
			return state.merge({
				title: action.title,
				content: action.content
			})
		default:
			return state
	}
}