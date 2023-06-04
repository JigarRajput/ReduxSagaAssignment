import {put, takeLatest} from 'redux-saga/effects';
import {getOrdersOfCustomer} from '../../services';
import {getOrdersFulfilled, getOrdersPending} from './OrderSlice';

function* getOrdersWorker(action) {
  const res = yield getOrdersOfCustomer(action.payload);
  yield put(getOrdersFulfilled(res?.data?.data));
}

export default function* getOrdersWatcher() {
  yield takeLatest(getOrdersPending, getOrdersWorker);
}
