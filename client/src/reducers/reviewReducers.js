import {
  REVIEW_REQUEST,
  REVIEW_SUCCESS,
  REVIEW_FAIL,
  LIST_REVIEWS_REQUEST,
  LIST_REVIEWS_SUCCESS,
  LIST_REVIEWS_FAIL,
} from "../actions/types";

export const postReviewReducer = (state = {}, action) => {
  switch (action.type) {
    case REVIEW_REQUEST:
      return { loading: true };
    case REVIEW_SUCCESS:
      return { loading: false, reviewInfo: action.payload };
    case REVIEW_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const getReviewReducer = (state = { reviews: [] }, action) => {
  switch (action.type) {
    case LIST_REVIEWS_REQUEST:
      return { loading: true, reviews: [] };
    case LIST_REVIEWS_SUCCESS:
      return { loading: false, reviews: action.payload.reviews };
    case LIST_REVIEWS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
