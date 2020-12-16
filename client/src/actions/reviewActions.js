import axios from 'axios'
import { REVIEW_REQUEST, REVIEW_SUCCESS, REVIEW_FAIL } from './types'

export const setReview = (name, text) => async (dispatch) => {
  try {
    dispatch({
      type: REVIEW_REQUEST,
    })
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    }
    const { data } = await axios.post(
      // '/review',
      'https://api.monarchtracker.com/review',
      { name, text }, config
    )
    dispatch({
      type: REVIEW_SUCCESS,
      payload: data,
    })
    // localStorage.setItem('reviewInfo', JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: REVIEW_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}