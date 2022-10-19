import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { addBook, addBookInUI } from '../redux/books/books';
import './Bookform.css';

const Bookform = () => {
  const initialInfo = {
    id: 0,
    title: null,
    author: null,
    category: 'all',
  };
  const [, setInfo] = useState(initialInfo);
  const dispatch = useDispatch();
  const sendData = (e) => {
    e.preventDefault();
    const bookName = e.target.querySelector('input:first-of-type');
    const bookAuthor = e.target.querySelector('input:last-of-type');
    const bookType = e.target.querySelector('select');
    const lastElement = document.querySelector('.books-info div:last-of-type');
    let id = 0;
    if (lastElement) {
      id = +lastElement.id;
    }
    const updatedInfo = {
      id: id + 1,
      title: bookName.value,
      author: bookAuthor.value,
      category: bookType.value,
    };
    const prepare = addBook(updatedInfo);
    setInfo(updatedInfo);
    dispatch(addBookInUI(updatedInfo));
    dispatch(prepare());
    bookName.value = '';
    bookAuthor.value = '';
  };
  return (
    <div className="form">
      <div className="hr" />
      <p>Add new book</p>
      <form onSubmit={sendData}>
        <input type="text" placeholder="Book title" required />
        <input type="text" placeholder="Book author" required />
        <select>
          <option value="Action">Action</option>
          <option value="Science Fiction">Science Fiction</option>
          <option value="Econmy">Econmy</option>
        </select>
        <button type="submit">ADD BOOK</button>
      </form>
    </div>
  );
};
export default Bookform;
