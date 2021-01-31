import { call, put, takeLatest, takeEvery } from 'redux-saga/effects';
import request from '../../utils/request';
import * as constants from '../actions/constants'
import * as actions from '../actions/action'
import history from '../../utils/history'
const API_URL = 'http://127.0.0.1:8000';

export function* login(action) {
 
  const requestURL = `${API_URL}/login_auth/`;
  const requestAttrs = {
    method: 'POST',
    body: JSON.stringify(action.data)
  };

  try {
    yield put(actions.Loader(true));
    const response = yield call(request, requestURL, requestAttrs);
    if (response.status=='success') {
      history.push('/Complaints')
    }
    yield put(actions.saveLoginResponse(response));
    yield put(actions.Loader(false));

  } catch (err) {
    yield put(actions.Loader(false));
    console.log(err)
  }
}



export default function* appData() {
  yield takeLatest(constants.LOGIN, login);
}