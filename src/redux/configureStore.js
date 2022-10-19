import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import bookReducer from './books/books';
import categoryReducer from './categories/categories';

const rootReducer = combineReducers(
  {
    bookInfo: bookReducer,
    categoryInfo: categoryReducer,
  },
);
const store = configureStore({ reducer: rootReducer });
export default store;
