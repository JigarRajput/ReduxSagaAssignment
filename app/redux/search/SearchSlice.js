import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  isLoading: false,
  searchResults: [],
  error: '',
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    searchPending: (state, action) => {
      state.isLoading = true;
    },
    searchFulfilled: (state, action) => {
      state.isLoading = false;
      state.searchResults = action.payload;
      error = '';
    },
    searchRejected: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { searchPending, searchFulfilled, searchRejected } = searchSlice.actions;
export const SearchSlice = searchSlice.reducer;
