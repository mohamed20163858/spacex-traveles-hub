import axios from 'axios';
import http from './api-connector';

const BaseURL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/8BP3Zy30smZEP0tcJ66W/books';
// const createBook = (data) => {
//   const response = fetch(BaseURL, {
//     method: 'POST',
//     body: JSON.stringify(data),
//     headers: {
//       'Content-type': 'application/json; charset=UTF-8',
//     },
//   });
//   const recievedData = response.json();
//   return recievedData;
// };
const createBookOBj = (info) => (
  {
    item_id: info.id,
    title: info.title,
    author: info.author,
    category: info.category,
  }
);
// const sendBook = (info) => {
//   const data = createBookOBj(info);
//   const recievedData = createBook(data);
//   return recievedData;
// };
const sendBook = (info) => axios.post(BaseURL, createBookOBj(info));
const getBooks = () => http.get('/apps/8BP3Zy30smZEP0tcJ66W/books');
const deleteBook = (bookId) => http.delete(`/apps/8BP3Zy30smZEP0tcJ66W/books/${bookId}`);
const BookStoreAPIMethods = {
  sendBook,
  getBooks,
  deleteBook,
};
export default BookStoreAPIMethods;
