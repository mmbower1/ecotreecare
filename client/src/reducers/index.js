import { combineReducers } from "redux";
// redux persist for localStorage
// import { persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
// reducers
import { getReviewReducer, postReviewReducer } from "./reviewReducers";
import { treesReducer } from "./treeReducers";
// import profile from './profile';

// const persistConfig = {
//   key: 'root',
//   storage,
//   whitelist: ['cart']
// }

const rootReducer = combineReducers({
  getReviewReducer,
  postReviewReducer,
  treesReducer,
  // profile
});

// export default persistReducer(persistConfig, rootReducer);
export default rootReducer;
