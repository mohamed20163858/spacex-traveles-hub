import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchAllRockets } from '../redux/rockets/rockets';

const Categories = () => {
  const dispatch = useDispatch();
  useEffect(() => () => dispatch(fetchAllRockets()()), [dispatch]);
  const infoState = useSelector((state) => state.missionInfo);
  console.log(infoState);
  return (
    <>
      <button type="submit" onClick={() => dispatch(fetchAllRockets())}>Check status</button>
      <h2>hi</h2>
    </>
  );
};
export default Categories;
