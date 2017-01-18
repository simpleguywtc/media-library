import { put, call } from 'redux-saga/effects';
import { flickrImages, shutterStockVideos } from '../api/api.js';
import * as types from '../constants/actionsTypes';

export default function* searchMediaSaga({ payload }) {
  try {
    const videos = yield call(shutterStockVideos, payload);
    const images = yield call(flickrImages, payload);
    yield [
      put({ type: types.SHUTTER_VIDEOS_SUCCESS, videos }),
      put({ type: types.SELECTED_VIDEO, videos[0] }),
      put({ type: types.FLICKR_IMAGES_SUCCESS, images }),
      put({ type: types.SELECTED_IMAGE, images[0] }),
    ];
  }
  catch (error) {
    yield put({ type: types.SEARCH_MEDIA_ERROR, error });
  }
}