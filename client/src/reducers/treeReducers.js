import { TREES_REQUEST, TREES_SUCCESS, TREES_FAIL } from "../actions/types";

export const treesReducer = (state = { trees: [] }, action) => {
  switch (action.type) {
    case TREES_REQUEST:
      return { loading: true, trees: [] };
    case TREES_SUCCESS:
      return {
        loading: false,
        trees: action.payload.trees,
      };
    case TREES_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
