import * as types from './../constants/ActionTypes';
import * as Msg from './../constants/Messages';

var initialState = Msg.MSG_WELCOME;

const message = (state = initialState, action) => {
	switch(action.type){
		case types.CHANGE_MESSAGE :
			return action.message;
		default : 
			return [...state];
	}
}




export default message;
