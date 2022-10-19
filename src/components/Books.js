import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Bookinfo from './Bookinfo';
import Bookform from './Bookform';
import { fetchAllBooks } from '../redux/books/books';

const Books = () => {
  const infoUI = [];
  const dispatch = useDispatch();
  useEffect(() => () => dispatch(fetchAllBooks()()), [dispatch]);
  const infoState = useSelector((state) => state.bookInfo);
  for (let i = 0; i < infoState.length; i += 1) {
    infoUI.push(<Bookinfo category={infoState[i].category} title={infoState[i].title} author={infoState[i].author} id={`${infoState[i].id}`} key={`book-${i + 1}`} />);
  }
  return (
    <>
      <div className="books-info">
        {infoUI}
      </div>
      <Bookform />
    </>
  );
};
export default Books;
