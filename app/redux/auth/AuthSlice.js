import {createSlice} from '@reduxjs/toolkit';
import {strings} from '../../constants';

const initialState = {
  userId: '',
  isLoading: false,
  isLoginSuccess: false,
  cart: {},
  details: {},
  error: '',
};

const authSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    loginPending: (state, action) => {
      state.isLoading = true;
    },
    loginFulfilled: (state, action) => {
      state.isLoading = false;
      const user = action.payload.user;
      const userPassword = action.payload.password;
      if (!user) {
        state.isLoginSuccess = false;
        state.isLoading = false;
        state.error = strings.noUsersFound;
      } else {
        if (user.meta.password === userPassword) {
          state.details = user;
          state.userId = user.id;
          state.isLoginSuccess = true;
          state.isLoading = false;
          state.cart = user.meta.cart;
        } else {
          state.isLoading = false;
          state.isLoginSuccess = false;
          state.error = strings.inValidPassword;
        }
      }
    },
    loginRejected: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    signUpPending: (state, action) => {
      state.isLoading = true;
    },
    signUpFulfilled: (state, action) => {
      state.details = action.payload;
      state.isLoading = false;
      state.userId = action.payload.id;
      state.isLoginSuccess = true;
      state.cart = action.payload.meta.cart;
      state.error = action.payload;
    },
    signUpRejected: (state, action) => {
      state.isLoginSuccess = false;
      state.error = action.payload;
    },
    updateUserCartPending: (state, action) => {
      state.isLoading = true;
    },
    updateUserCartFulfilled: (state, action) => {
      state.isLoading = false;
      state.details = action.payload;
      state.cart = action.payload.meta.cart;
      state.userId = action.payload.id;
    },
    updateUserCartRejected: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
  //   extraReducers: builder => {
  //     builder
  //       .addCase(signUpThunk.pending, (state, action) => {
  //         state.isLoading = true;
  //       })
  //       .addCase(signUpThunk.fulfilled, (state, action) => {
  //         state.details = action.payload;
  //         state.isLoading = false;
  //         state.userId = action.payload.id;
  //         state.isLoginSuccess = true;
  //         state.cart = action.payload.meta.cart;
  //         state.error = action.payload;
  //       })
  //       .addCase(signUpThunk.rejected, (state, action) => {
  //         state.isLoginSuccess = false;
  //         state.error = action.payload;
  //       })
  //       .addCase(loginThunk.pending, (state, action) => {
  //         state.isLoading = true;
  //       })
  //       .addCase(loginThunk.fulfilled, (state, action) => {
  //         const user = action.payload.user;
  //         const userPassword = action.payload.password;
  //         if (!user) {
  //           state.isLoginSuccess = false;
  //           state.isLoading = false;
  //           state.error = strings.noUsersFound;
  //         } else {
  //           if (user.meta.password === userPassword) {
  //             state.details = user;
  //             state.userId = user.id;
  //             state.isLoginSuccess = true;
  //             state.isLoading = false;
  //             state.cart = user.meta.cart;
  //           } else {
  //             state.isLoading = false;
  //             state.isLoginSuccess = false;
  //             state.error = strings.inValidPassword;
  //           }
  //         }
  //       })
  //       .addCase(loginThunk.rejected, (state, action) => {
  //         state.isLoginSuccess = false;
  //         state.error = action.payload;
  //       })
  //       .addCase(updateUserCart.pending, (state, action) => {
  //         state.isLoading = true;
  //       })
  //       .addCase(updateUserCart.fulfilled, (state, action) => {
  //         state.details = action.payload;
  //         state.cart = action.payload.meta.cart;
  //         state.userId = action.payload.id;
  //       });
  //   },
});

export const {
  loginPending,
  loginFulfilled,
  loginRejected,
  signUpPending,
  signUpFulfilled,
  signUpRejected,
  updateUserCartPending,
  updateUserCartFulfilled,
  updateUserCartRejected,
} = authSlice.actions;

export const AuthSlice = authSlice.reducer;
