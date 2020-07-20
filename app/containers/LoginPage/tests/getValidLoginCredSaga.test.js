import { put, takeLatest } from 'redux-saga/effects';

import { GET_VALID_CREDS } from '../constants';
import { getValidCredSuccess, getValidCredFailure } from '../actions';

import fetchValidCredWatcher, {
  fetchValidCredSaga,
} from '../getValidLoginCredentialsSaga';

describe('getValidCred Saga', () => {
  let getValidCredGenerator;

  beforeEach(() => {
    getValidCredGenerator = fetchValidCredSaga();

    const callDescriptor = getValidCredGenerator.next().value;
    expect(callDescriptor).toMatchSnapshot();
  });

  it('should dispatch the getValidCredSuccess action if the response is received successfully', () => {
    const response = {
      email: 'admin@gmail.com',
      password: 'admin@123',
    };
    const putDescriptor = getValidCredGenerator.next(response).value;
    expect(putDescriptor).toEqual(put(getValidCredSuccess(response)));
  });

  it('should call the getValidCredError action if the response errors', () => {
    const response = new Error('Something went wrong');
    const putDescriptor = getValidCredGenerator.throw(response).value;
    expect(putDescriptor).toEqual(put(getValidCredFailure(response)));
  });
});

describe('fetchProductList Watcher', () => {
  const fetchCredWatcher = fetchValidCredWatcher();

  it('should start task to watch for GET_VALID_CREDS action', () => {
    const takeLatestDescriptor = fetchCredWatcher.next().value;
    expect(takeLatestDescriptor).toEqual(
      takeLatest(GET_VALID_CREDS, fetchValidCredSaga),
    );
  });
});
