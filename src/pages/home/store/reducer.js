import * as actions from './actions'
import { fromJS } from 'immutable'
const defaultState = fromJS({
	topicList:[],
	articleList:[],
	recommendList: [],
	writerList: [],
	writer_page_now: 0,
	writer_totalPage: 1
});

export default (state = defaultState, action) => {
	switch(action.type) {
		case actions.GET_HOME_DATA:
			return state.merge({
				topicList: action.topicList,
				articleList: action.articleList,
				recommendList: action.recommendList
			})
		case actions.GET_MORE_ARTICALLIST:
			return state.set('articleList',state.get('articleList').concat(action.value))
		case actions.GET_WRITER_LIST:
			return state.merge({
				writerList:action.writerList,
				writer_totalPage: action.writer_totalPage
			})
		case actions.SWITCHPAGE:
			return state.set('writer_page_now',action.value)			
		default:
			return state
	}
}