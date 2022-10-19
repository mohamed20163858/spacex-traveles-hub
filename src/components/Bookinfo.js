import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { removeBook, removeBookInUI } from '../redux/books/books';
import './Bookinfo.css';

const Bookinfo = (props) => {
  const {
    id, title, author, category,
  } = props;
  const dispatch = useDispatch();
  const state = useSelector((state) => state.bookInfo);
  const removeAction = (e) => {
    const targetDiv = e.target.parentElement.parentElement.parentElement.parentElement;
    for (let i = 0; i < state.length; i += 1) {
      if (+state[i].id === +targetDiv.id) {
        dispatch(removeBookInUI(i));
        dispatch(removeBook(targetDiv.id)());
      }
    }
  };

  return (
    <div id={id} className="book-info">
      <div className="book-details">
        <p>{category}</p>
        <h3>{title}</h3>
        <p>{author}</p>
        <ul className="buttons">
          <li><button type="submit">Comments</button></li>
          <li><button type="submit" onClick={removeAction}>Remove</button></li>
          <li><button type="submit">Edit</button></li>
        </ul>
      </div>
      <div className="book-progress">
        <div className="statistics">
          <div className="graph" />
          <div className="graph-details">
            <p>25%</p>
            <p>Completed</p>
          </div>
        </div>
        <div className="vertical-line" />
        <div className="book-progress-details">
          <p>Current Chapter</p>
          <p>Introduction</p>
          <button type="submit">Update Progress</button>
        </div>
      </div>
    </div>
  );
};
Bookinfo.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};
export default Bookinfo;
