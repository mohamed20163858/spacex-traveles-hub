import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.spacexdata.com/v3/rockets',
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
});
