import { ADD_FILTER } from "../actions";

const initialState = {};

export default function filterReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_FILTER: {
      return {
        ...state,
        ...action.payload
      };
    }
    default: {
      return state;
    }
  }
}
