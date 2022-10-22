import httpRocket from './rocket-api-connector.mjs';
import httpMissions from './missions-api-connector.mjs';

const fetchRockets = () => httpRocket.get('');
const fetchMisions = () => httpMissions.get('');
const spacexTravelesHubAPIMethods = {
  fetchRockets,
  fetchMisions,
};
export default spacexTravelesHubAPIMethods;
