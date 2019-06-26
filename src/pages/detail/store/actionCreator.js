import * as actions from './actions'
import axios from 'axios'
// import { fromJS } from 'immutable'


export const getDetail = () => {
	return (dispatch) => {
		axios.get('../api/detail.json').then( (res)=> {
			const data = res.data.data
			const action = {
				type: actions.GET_DETAIL,
				title: data.title,
				content: data.content
			}
			dispatch(action)
		}).catch( (err)=>{
			console.log(err)
		})
	}
}

