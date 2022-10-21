import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchAllMissions } from '../redux/missions/missions';
import TableRow from './missionTableRow';
import './missions.css';

const Missions = () => {
  const infoUI = [];
  const dispatch = useDispatch();
  useEffect(() => () => dispatch(fetchAllMissions()()), [dispatch]);
  const infoState = useSelector((state) => state.missionInfo);
  for (let i = 0; i < infoState.length; i += 1) {
    infoUI.push(<TableRow
      missionId={infoState[i].mission_id}
      missionName={infoState[i].mission_name}
      description={infoState[i].description}
      reserved={Boolean(infoState[i].reserved)}
      elementIndex={i}
      key={infoState[i].mission_id}
    />);
  }
  return (
    <table>
      <thead>
        <tr>
          <td>Mission</td>
          <td>Discription</td>
          <td>Status</td>
          <td>{}</td>
        </tr>
      </thead>
      <tbody>{infoUI}</tbody>
      <tfoot>{}</tfoot>
    </table>
  );
};
export default Missions;
