export {default as store} from './store';

export {
  HomeWatcher,
  CategorySlice,
  ProductSlice,
  categoryFetchPending,
  productsFetchPending,
  searchByText,
  filterByCategory,
} from './home';

export {
  searchPending,
  searchFulfilled,
  searchRejected,
  SearchSlice,
  SearchWatcher,
} from './search';

export {
  toggleOrderSuccess,
  getOrdersPending,
  getOrdersFulfilled,
  checkOutPending,
  checkOutFulfilled,
  checkOutRejected,
  OrdersWatcher,
  OrderSlice,
  CheckOutWatcher,
} from './orders';

export {
  AuthSlice,
  loginPending,
  loginFulfilled,
  loginRejected,
  signUpPending,
  signUpFulfilled,
  signUpRejected,
  updateUserCartPending,
  updateUserCartFulfilled,
  updateUserCartRejected,
  UpdateCartWatcher,
} from './auth';

export {
  setCart,
  addToCartPending,
  addToCartFulfilled,
  addToCartRejected,
  CartSlice,
} from './cart';
