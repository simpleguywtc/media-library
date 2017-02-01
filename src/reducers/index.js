import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import images from './imageReducer';
import videos from './videoReducer';

const rootReducer = combineReducers({
  images,
  videos,
  routing: routerReducer
});

export default rootReducer;