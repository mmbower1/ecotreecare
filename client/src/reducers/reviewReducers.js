import {
  REVIEW_REQUEST,
  REVIEW_SUCCESS,
  REVIEW_FAIL
} from '../actions/types';

export const reviewReducer = (state = {}, action) => {
  switch (action.type) {
    case REVIEW_REQUEST:
      return { loading: true }
    case REVIEW_SUCCESS:
      return { loading: false, reviewInfo: action.payload }
    case REVIEW_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}