import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  isLoading: false,
  categories: [],
  error: '',
};

const categorySlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    categoryFetchPending: (state, action) => {
      state.isLoading = true;
    },
    categoryFetchFulfilled: (state, action) => {
      state.isLoading = false;
      state.categories = action.payload;
      state.error = '';
    },
    categoryFetchRejected: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const {
  categoryFetchPending,
  categoryFetchFulfilled,
  categoryFetchRejected,
} = categorySlice.actions;

export default categorySlice.reducer;
