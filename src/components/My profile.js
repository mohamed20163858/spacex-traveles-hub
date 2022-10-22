import { useSelector } from 'react-redux';

const MyProfile = () => {
  const missionsInfo = useSelector((state) => state.missionInfo);
  // const rocketsInfo = useSelector((state) => state.rocketInfo);
  console.log(missionsInfo);

  return (
    <div className="profile-body">
      <div className="my-missions">
        <h2>My Missions</h2>
      </div>
      <div className="my-rockets">
        <h2>My Rockets</h2>
      </div>
    </div>
  );
};
export default MyProfile;
