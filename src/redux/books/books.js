import { createAsyncThunk } from '@reduxjs/toolkit';
import BookStoreAPIMethods from '../../api/methods';

const ADD = 'Bookstore/src/redux/books/ADD';
const REMOVE = 'Bookstore/src/redux/books/REMOVE';
const GET = 'Bookstore/src/redux/books/GET';

export const addBookInUI = (info) => ({
  type: ADD,
  payload: info,

});
export const removeBookInUI = (index) => ({
  type: REMOVE,
  payload: +index,
});
export const addBook = (info) => createAsyncThunk(
  ADD,
  async () => {
    const response = await BookStoreAPIMethods.sendBook(info);
    const data = await response.data;
    return data;
  },
);
export const removeBook = (index) => createAsyncThunk(
  REMOVE,
  async () => {
    const response = await BookStoreAPIMethods.deleteBook(index);
    const data = await response.data;
    return data;
  },
);
export const fetchAllBooks = () => createAsyncThunk(
  GET,
  async () => {
    const response = await BookStoreAPIMethods.getBooks();
    const data = await response.data;
    const books = Object.keys(data).map((key) => ({
      id: key,
      title: data[key][0].title,
      author: data[key][0].author,
      category: data[key][0].category,
    }));
    return books;
  },
);
const bookReducer = (state = [], action) => {
  switch (action.type) {
    case ADD:
      return [...state, action.payload];
    case REMOVE:
      return [...state.slice(0, action.payload), ...state.slice(action.payload + 1)];
    case `${GET}/fulfilled`:
      return [...action.payload];
    default:
      return state;
  }
};
export default bookReducer;
