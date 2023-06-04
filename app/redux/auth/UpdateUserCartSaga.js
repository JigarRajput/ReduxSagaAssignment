import {put, takeLeading} from 'redux-saga/effects';
import {
  updateUserCartFulfilled,
  updateUserCartPending,
  updateUserCartRejected,
} from './AuthSlice';
import {updateUserService} from '../../services';

function* updateUserCartWorker(action) {
  try {
    const res = yield updateUserService(action.payload);
    yield put(updateUserCartFulfilled(res.data));
  } catch (e) {
    yield put(updateUserCartRejected(e.toString()));
  }
}

export default function* updateUserCartWatcher() {
  yield takeLeading(updateUserCartPending, updateUserCartWorker);
}
