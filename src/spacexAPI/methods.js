import httpRocket from './rocket-api-connector';
import httpMissions from './missions-api-connector';

const fetchRockets = () => httpRocket.get('');
const fetchMisions = () => httpMissions.get('');
const spacexTravelesHubAPIMethods = {
  fetchRockets,
  fetchMisions,
};
export default spacexTravelesHubAPIMethods;
