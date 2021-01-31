import * as Constants from './constants';

export function Loader(value) {
    return {
        type: Constants.LOADING_INDICATOR,
        value
    }
}
export function loginAction(data) {
    return {
        type : Constants.LOGIN,
        data
    }
}
export function saveLoginResponse(data) {
    return {
        type: Constants.SAVE_USER_DATA,
        data
    }
}
export function logOut() {
    return {
        type: Constants.LOG_OUT
    }
}
