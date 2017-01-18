import { takeLastest } from 'redux-saga';
import { searchMediaSaga } from './mediaSaga';
import * as types from '../constants/actionsTypes';

export default function* watchSearchMedia() {
  yield* takeLastest(types.SEARCH_MEDIA_REQUEST, searchMediaSaga);
}