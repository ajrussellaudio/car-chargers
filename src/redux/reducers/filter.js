import { ADD_FILTER, REMOVE_FILTER } from "../actions";

const initialState = {};

export default function filterReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_FILTER: {
      return {
        ...state,
        ...action.payload
      };
    }
    case REMOVE_FILTER: {
      const { [action.payload]: x, ...stateMinusKey } = state;
      return stateMinusKey;
    }
    default: {
      return state;
    }
  }
}
