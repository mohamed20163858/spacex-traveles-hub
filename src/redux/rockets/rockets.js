import { createAsyncThunk } from '@reduxjs/toolkit';
import spacexTravelesHubAPIMethods from '../../spacexAPI/methods';

const ADD = 'spacex-traveles-hub/src/redux/rockets/ADD';
const REMOVE = 'spacex-traveles-hub/src/redux/rockets/REMOVE';
const GET = 'spacex-traveles-hub/src/redux/rockets/GET';

export const addRocketInUI = (info) => ({
  type: ADD,
  payload: info,

});
export const removeRocketInUI = (index) => ({
  type: REMOVE,
  payload: +index,
});
// export const addBook = (info) => createAsyncThunk(
//   ADD,
//   async () => {
//     const response = await spacexTravelesHubAPIMethods.sendBook(info);
//     const data = await response.data;
//     return data;
//   },
// );
// export const removeBook = (index) => createAsyncThunk(
//   REMOVE,
//   async () => {
//     const response = await spacexTravelesHubAPIMethods.deleteBook(index);
//     const data = await response.data;
//     return data;
//   },
// );
export const fetchAllRockets = () => createAsyncThunk(
  GET,
  async () => {
    const response = await spacexTravelesHubAPIMethods.fetchRockets();
    const data = await response.data;
    const rockets = Object.keys(data).map((key) => ({
      id: data[key].id,
      rocket_name: data[key].rocket_name,
      description: data[key].description,
      flickr_images: data[key].flickr_images,
    }));
    return rockets;
  },
);
const rocketsReducer = (state = [], action) => {
  switch (action.type) {
    case ADD:
      return [...state, action.payload];
    case REMOVE:
      return [...state.slice(0, action.payload), ...state.slice(action.payload + 1)];
    case `${GET}/fulfilled`:
      return [...action.payload];
    default:
      return state;
  }
};
export default rocketsReducer;
