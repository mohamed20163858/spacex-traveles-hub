import { createAsyncThunk } from '@reduxjs/toolkit';
import spacexTravelesHubAPIMethods from '../../spacexAPI/methods';

const ADD = 'spacex-traveles-hub/src/redux/missions/ADD';
const REMOVE = 'spacex-traveles-hub/src/redux/missions/REMOVE';
const GET = 'spacex-traveles-hub/src/redux/missions/GET';

export const addMissionInUI = (info) => ({
  type: ADD,
  payload: info,

});
export const removeMissionInUI = (index) => ({
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
export const fetchAllMissions = () => createAsyncThunk(
  GET,
  async () => {
    const response = await spacexTravelesHubAPIMethods.fetchMisions();
    const data = await response.data;
    const missions = Object.keys(data).map((key) => ({
      mission_id: data[key].mission_id,
      mission_name: data[key].mission_name,
      description: data[key].description,
    }));
    return missions;
  },
);
const missionsReducer = (state = [], action) => {
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
export default missionsReducer;
