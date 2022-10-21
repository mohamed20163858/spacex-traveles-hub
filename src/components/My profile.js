import { useDispatch, useSelector } from 'react-redux';
import { checkCategoriesStatus } from '../redux/categories/categories';

const Categories = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.categoryInfo);
  return (
    <>
      <button type="submit" onClick={() => dispatch(checkCategoriesStatus())}>Check status</button>
      <h2>{state}</h2>
    </>
  );
};
export default Categories;
