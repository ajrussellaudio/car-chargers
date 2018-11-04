import {
  FETCH_LOCATIONS,
  FETCH_LOCATIONS_SUCCESS,
  FETCH_LOCATIONS_FAILURE
} from "../actions";

const initialState = {
  list: [],
  isLoading: false,
  error: null
};

export default function locationsReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_LOCATIONS: {
      return {
        ...state,
        isLoading: true,
        error: null
      };
    }
    case FETCH_LOCATIONS_SUCCESS: {
      return {
        ...state,
        list: action.payload,
        isLoading: false
      };
    }
    case FETCH_LOCATIONS_FAILURE: {
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    }
    default: {
      return state;
    }
  }
}
