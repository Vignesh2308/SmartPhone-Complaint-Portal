import * as Constants from '../actions/constants'

export const initialState = {
    spinner_status: false,
    userData: {},
    loginStatus: false,
    userList: [],
    ibdList: []

}
export default function MainReducer(state, action) {
    if (!state) {
        return initialState;
    }
    switch (action.type) {
        case Constants.LOADING_INDICATOR:
            return { ...state, spinner_status: action.value };
        case Constants.SAVE_USER_DATA:
            if(action.data.status=='success') {
                return {...state, userData: action.data, loginStatus: true};
            }else {
                return {...state, userData:{}, loginStatus: false}
            }
          
        case Constants.LOG_OUT:
            return initialState;
        default:
            return state;
    }
}