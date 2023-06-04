import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  category: '',
  isLoading: false,
  products: [],
  categoryProducts: [],
  filteredProducts: [],
  error: '',
};

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    productsFetchPending: (state, action) => {
      state.isLoading = true;
    },
    productsFetchFulfilled: (state, action) => {
      state.category = 'ALL';
      state.isLoading = false;
      state.products = action.payload;
      state.filteredProducts = action.payload;
      state.error = '';
    },
    productsFetchRejected: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    searchByText: (state, action) => {
      state.filteredProducts = state.products.filter(product =>
        product.name.toUpperCase().includes(action.payload.toUpperCase()),
      );
    },
    filterByCategory: (state, action) => {
      if (action.payload === 'ALL') {
        state.category = action.payload
        state.categoryProducts = state.products;
      } else {
        state.category = action.payload;
        state.categoryProducts = state.products.filter(
          product =>
            product.categories[0].name.toUpperCase() === action.payload,
        );
      }
    },
  },
});

export const {
  searchByText,
  filterByCategory,
  productsFetchPending,
  productsFetchFulfilled,
  productsFetchRejected,
} = productSlice.actions;

export default productSlice.reducer;
