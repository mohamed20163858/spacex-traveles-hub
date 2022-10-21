import PropTypes from 'prop-types';

const tableRow = (props) => {
  const { missionId, missionName, description } = props;

  return (
    <tr id={missionId}>
      <td>{missionName}</td>
      <td>{description}</td>
      <td>Not a member</td>
      <td><button type="submit">Join the mission</button></td>
    </tr>
  );
};
tableRow.propTypes = {
  missionId: PropTypes.string.isRequired,
  missionName: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
export default tableRow;
