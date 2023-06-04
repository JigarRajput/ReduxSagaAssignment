import {put, takeLatest} from 'redux-saga/effects';
import {getLoginStats, signUpService} from '../../services';
import {
  loginFulfilled,
  loginPending,
  loginRejected,
  signUpFulfilled,
  signUpPending,
  signUpRejected,
} from './AuthSlice';

import {setCart} from '../cart';

function* loginWorker(action) {
  try {
    const res = yield getLoginStats(action.payload);
    yield put(
      loginFulfilled({
        user: res.data.data[0],
        email: action.payload.email,
        password: action.payload.password,
      }),
    );
  } catch (e) {
    yield put(loginRejected(e));
  }
}

function* signUpWorker(action) {
  try {
    const res = yield signUpService(action.payload);
    yield put(signUpFulfilled(res.data));
    yield put(setCart(res.data.meta.cart));
  } catch (e) {
    yield put(signUpRejected(e));
  }
}

export default function* authWatcher() {
  yield takeLatest(loginPending, loginWorker);
  yield takeLatest(signUpPending, signUpWorker);
}
