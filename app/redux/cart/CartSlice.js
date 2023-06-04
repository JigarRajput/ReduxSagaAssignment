import {createSlice} from '@reduxjs/toolkit';
import {signUpThunk, addToCart, updateUserCart, loginThunk} from '../thunks';
import {updateUserCartFulfilled} from '../auth';

const initialState = {
  cart: {},
  subtotal: 0,
  isLoading: false,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setCart: (state, action) => {
      state.cart = action.payload;
      state.subtotal = action.payload.subtotal;
    },
    addToCartPending: (state, action) => {
      state.isLoading = true;
    },
    addToCartFulfilled: (state, action) => {
      state.isLoading = false;
      state.cart = action.payload;
      state.subtotal = action.payload.subtotal;
    },
    addToCartRejected: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },

  extraReducers: builder => {
    builder.addCase(updateUserCartFulfilled, (state, action) => {
      state.isLoading = false;
      state.cart = action.payload?.meta?.cart;
      state.subtotal = action.payload?.meta?.cart?.subtotal;
    });
  },
  //   extraReducers: builder => {
  //     builder.addCase(loginThunk.pending, (state, action) => {
  //       state.isLoading = true
  //     }).addCase(loginThunk.fulfilled, (state, action) => {
  //       state.isLoading = false
  //       state.cart = action.payload.user.meta.cart
  //       state.subtotal = action.payload.user.meta.cart.subtotal
  //     })
  //       .addCase(signUpThunk.fulfilled, (state, action) => {
  //         state.cart = action.payload.meta.cart;
  //       })
  //       .addCase(addToCart.pending, (state, action) => {
  //         state.isLoading = true;
  //       })
  //       .addCase(addToCart.fulfilled, (state, action) => {
  //         state.isLoading = false;
  //         state.cart = action.payload;
  //         state.subtotal = action.payload.subtotal
  //       })
  //       .addCase(addToCart.rejected, (state, action) => {
  //         state.isLoading = false;
  //       })
  //       .addCase(updateUserCart.pending, (state, action) => {
  //         state.isLoading = true;
  //       })
  //       .addCase(updateUserCart.fulfilled, (state, action) => {
  //         state.isLoading = false;
  //         state.cart = action.payload.meta.cart;
  //         state.subtotal = action.payload.meta.cart.subtotal
  //       })
  //       .addCase(updateUserCart.rejected, (state, action) => {
  //         state.isLoading = false;
  //       });
  //   },
});

export const {
  setCart,
  addToCartPending,
  addToCartFulfilled,
  addToCartRejected,
} = cartSlice.actions;

export default cartSlice.reducer;
