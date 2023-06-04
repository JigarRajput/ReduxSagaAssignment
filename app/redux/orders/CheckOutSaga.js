import {takeLeading, put} from 'redux-saga/effects';
import {
  checkOutFulfilled,
  checkOutPending,
  checkOutRejected,
} from './OrderSlice';
import {getCheckOutId, getOrder} from '../../services';
import {updateUserCartPending} from '../auth';

function* checkOutWorker(action) {
  try {
    const type = action.payload.type;
    const id = action.payload.id;

    const checkOutRes = yield getCheckOutId(id, type);
    const checkOutId = checkOutRes?.data?.id;
    const orderResponse = yield getOrder(checkOutId, action.payload); // gets an order for checkout id

    yield put(updateUserCartPending(action.payload.userDetails)); // creates new cart for this user
    yield put(checkOutFulfilled(orderResponse.data)); // dispatch checkout success
  } catch (e) {
    yield put(checkOutRejected(e.toString())); // if something goes wrong dispatch checkout rejected
  }
}

export default function* checkOutWatcher() {
  yield takeLeading(checkOutPending, checkOutWorker);
}
