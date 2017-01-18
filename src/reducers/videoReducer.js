import initialState from './initialState';
import * as types from '../constants/actionsTypes';

export default function (state = initialState, action) {
  switch(action.type) {
    case types.SHUTTER_VIDEOS_SUCCESS:
      return [...state, action.videos];
    case types.SELECTED_VIDEO:
      return {...state, action.video};
    default:
      return state;
  }
}