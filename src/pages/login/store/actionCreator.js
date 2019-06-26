import * as actions from './actions'
import axios from 'axios'
// import { fromJS } from 'immutable'

const changeLogin = () => ({
	type: actions.CHANGE_LOGIN,
	value: true
})
export const login = (acc,pwd) => {
	return (dispatch) => {
		axios.get('./api/login.json?account=' + acc + '&password=' + pwd).then( (res)=> {
			const data = res.data.data
			if(data){
				dispatch(changeLogin())
			}else{

			}
			
		}).catch( (err)=>{

		})
	}
}

export const logout = () => ({
	type: actions.CHANGE_LOGOUT,
	value: false
})

