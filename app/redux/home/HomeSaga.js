import {getCategories, getProducts} from '../../services';
import {put, takeLatest} from 'redux-saga/effects';
import {
  categoryFetchFulfilled,
  categoryFetchPending,
  categoryFetchRejected,
} from './CategorySlice';
import {
  filterByCategory,
  productsFetchFulfilled,
  productsFetchPending,
  productsFetchRejected,
} from './ProductSlice';

function* getCategoryWorker() {
  try {
    const res = yield getCategories();
    yield put(categoryFetchFulfilled(res?.data?.data));
  } catch (e) {
    yield put(categoryFetchRejected(e.toString()));
  }
}

function* getProductsWorker() {
  try {
    const res = yield getProducts();
    yield put(productsFetchFulfilled(res?.data?.data));
    yield put(filterByCategory('ALL'));
  } catch (e) {
    yield put(productsFetchRejected(e.toString()));
  }
}

function* homeWatcher() {
  yield takeLatest(categoryFetchPending, getCategoryWorker);
  yield takeLatest(productsFetchPending, getProductsWorker);
}

export default homeWatcher;
