import {createSlice} from '@reduxjs/toolkit';
import {checkOutThunk, getOrders} from '../thunks';

const initialState = {
  isLoading: false,
  orderSuccess: false,
  ordersList: [],
  orderDetails: {},
  error: '',
};

const orderSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {
    toggleOrderSuccess: (state, action) => {
      state.orderSuccess = !state.orderSuccess;
    },
    getOrdersPending: (state, action) => {
      state.isLoading = true;
    },
    getOrdersFulfilled: (state, action) => {
      state.isLoading = false;
      state.ordersList = action.payload;
      state.error = '';
    },
    getOrdersRejected: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    checkOutPending: (state, action) => {
      state.isLoading = true;
    },
    checkOutFulfilled: (state, action) => {
      state.isLoading = false;
      state.orderDetails = action.payload;
      state.orderSuccess = true;
    },
    checkOutRejected: (state, action) => {
      state.isLoading = false;
      state.error = '';
      state.orderDetails = {};
    },
  },
  extraReducers: builder => {
    builder
      .addCase(checkOutThunk.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(checkOutThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.orderDetails = action.payload;
        state.orderSuccess = true;
      })
      .addCase(checkOutThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(getOrders.fulfilled, (state, action) => {
        state.ordersList = action.payload;
      });
  },
});

export const {
  toggleOrderSuccess,
  getOrdersPending,
  getOrdersFulfilled,
  checkOutPending,
  checkOutFulfilled,
  checkOutRejected,
} = orderSlice.actions;

export default orderSlice.reducer;
