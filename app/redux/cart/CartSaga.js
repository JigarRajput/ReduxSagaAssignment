import {put, takeEvery} from 'redux-saga/effects';
import {
  addToCartFulfilled,
  addToCartPending,
  addToCartRejected,
} from './CartSlice';
import {addToCartService} from '../../services';

function* addToCartWorker(action) {
  try {
    const res = yield addToCartService(
      `v1/carts/${action.payload.cartId}`,
      action.payload,
    );

    yield put(addToCartFulfilled(res.data));
  } catch (e) {
    yield put(addToCartRejected(e.toString()));
  }
}

export default function* cartWatcher() {
  yield takeEvery(addToCartPending, addToCartWorker);
}
