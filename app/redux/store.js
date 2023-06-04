import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import {all} from 'redux-saga/effects';
import {HomeWatcher, ProductSlice, CategorySlice} from './home';
import {SearchSlice, SearchWatcher} from './search';
import {AuthSlice, AuthWatcher, UpdateCartWatcher} from './auth';
import {CartSlice, CartWatcher} from './cart';
import {CheckOutWatcher, OrderSlice, OrdersWatcher} from './orders';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    categories: CategorySlice,
    search: SearchSlice,
    products: ProductSlice,
    auth: AuthSlice,
    cart: CartSlice,
    order: OrderSlice,
  },
  middleware: [...getDefaultMiddleware(), sagaMiddleware],
});

function* rootSaga() {
  yield all([
    HomeWatcher(),
    SearchWatcher(),
    AuthWatcher(),
    OrdersWatcher(),
    CheckOutWatcher(),
    CartWatcher(),
    UpdateCartWatcher(),
  ]);
}

sagaMiddleware.run(rootSaga);

export default store;
