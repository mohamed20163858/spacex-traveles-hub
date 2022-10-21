import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchAllRockets } from '../redux/rockets/rockets';
import RocketCard from './rocketCard';

const Rockets = () => {
  const infoUI = [];
  const dispatch = useDispatch();
  useEffect(() => () => dispatch(fetchAllRockets()()), [dispatch]);
  const infoState = useSelector((state) => state.rocketInfo);
  for (let i = 0; i < infoState.length; i += 1) {
    infoUI.push(<RocketCard
      rocketId={infoState[i].id}
      rocketName={infoState[i].rocket_name}
      rocketDescription={infoState[i].description}
      rocketImage={infoState[i].flickr_images[0]}
      key={`rocket-${infoState[i].id}`}
    />);
  }
  return (
    <>
      {infoUI}
    </>
  );
};
export default Rockets;
