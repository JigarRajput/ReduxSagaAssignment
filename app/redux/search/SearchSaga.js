import {debounce, put} from 'redux-saga/effects';
import {getProducts, searchProducts} from '../../services';
import {searchFulfilled, searchPending, searchRejected} from './SearchSlice';

function* searchWorker(action) {
  try {
    if (action.payload === '') {
      const res = yield getProducts();
      yield put(searchFulfilled(res?.data?.data));
      return;
    } else {
      const res = yield searchProducts(action.payload);
      if (res?.data?.data) {
        yield put(searchFulfilled(res?.data?.data));
        return;
      } else {
        yield put(searchFulfilled([]));
      }
    }
  } catch (e) {
    yield put(searchRejected(e));
  }
}

export default function* searchWatcher() {
  yield debounce(1500, searchPending, searchWorker);
}
