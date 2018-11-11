import { UPDATE_MAP_BOUNDS } from "../actions";

const initialState = { bounds: {} };

export default function mapReducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_MAP_BOUNDS: {
      return {
        ...state,
        bounds: action.payload
      };
    }
    default: {
      return state;
    }
  }
}
