/* eslint-disable prettier/prettier */
import { call, put, takeLatest } from 'redux-saga/effects';
import request from 'utils/request';
import { GET_VALID_CREDS } from './constants';
import { getValidCredSuccess, getValidCredFailure } from './actions';

export function* fetchValidCredSaga() {
  const requestURL = 'https://68830be8-b6fb-4192-957d-e020f745ca90.mock.pstmn.io/getValidCred';

  try {
    const response = yield call(request, requestURL);
    yield put(getValidCredSuccess(response));
  } catch (err) {
    yield put(getValidCredFailure(err));
  }
}

export default function* fetchValidCredWatcher() {
  yield takeLatest(GET_VALID_CREDS, fetchValidCredSaga);
}
