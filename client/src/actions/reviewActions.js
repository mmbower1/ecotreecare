import axios from "axios";
import {
  REVIEW_REQUEST,
  REVIEW_SUCCESS,
  REVIEW_FAIL,
  LIST_REVIEWS_REQUEST,
  LIST_REVIEWS_SUCCESS,
  LIST_REVIEWS_FAIL,
} from "./types";

export const createReview = (name, text, rating) => async (dispatch) => {
  try {
    dispatch({
      type: REVIEW_REQUEST,
    });
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const { data } = await axios.post(
      // "/review",
      "https://api.norcal-outdoors.com/review",
      { name, text, rating },
      config
    );
    dispatch({
      type: REVIEW_SUCCESS,
      payload: data,
    });
    // localStorage.setItem('reviewInfo', JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: REVIEW_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getReviews = () => async (dispatch) => {
  try {
    dispatch({ type: LIST_REVIEWS_REQUEST });

    // const { data } = await axios.get(`/review`);
    console.log("data ", data);
    const { data } = await axios.get(`https://api.monarchtracker.com/review`);

    dispatch({
      type: LIST_REVIEWS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: LIST_REVIEWS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
