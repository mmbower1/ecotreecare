import axios from "axios";
import { TREES_REQUEST, TREES_SUCCESS, TREES_FAIL } from "./types";

export const listTrees =
  (keyword = "") =>
  async (dispatch) => {
    try {
      dispatch({
        type: TREES_REQUEST,
      });
      const { data } = await axios.get(
        `/search?keyword=${keyword}`
        // 'https://api.norcal-outdoors.com/review',
      );
      dispatch({
        type: TREES_SUCCESS,
        payload: data,
      });
      // localStorage.setItem('reviewInfo', JSON.stringify(data));
    } catch (error) {
      dispatch({
        type: TREES_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
