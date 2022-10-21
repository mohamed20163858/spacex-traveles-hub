import PropTypes from 'prop-types';
import './rocketCards.css';

const rocketCard = (props) => {
  const {
    rocketId, rocketName, rocketDescription, rocketImage,
  } = props;

  return (
    <div className="rocket-card" id={rocketId}>
      <img src={rocketImage} alt="rocket" width="200" />
      <div className="card-info">
        <h2>{rocketName}</h2>
        <p>{rocketDescription}</p>
        <button type="submit">Reserve Rocket</button>
      </div>
    </div>
  );
};
rocketCard.propTypes = {
  rocketId: PropTypes.number.isRequired,
  rocketName: PropTypes.string.isRequired,
  rocketDescription: PropTypes.string.isRequired,
  rocketImage: PropTypes.string.isRequired,
};
export default rocketCard;
