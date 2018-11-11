import { UPDATE_MAP_BOUNDS, MOVE_MAP } from "../actions";

const initialState = { bounds: {}, position: { lat: 0, lng: 0 }, zoom: 0 };

export default function mapReducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_MAP_BOUNDS: {
      return {
        ...state,
        bounds: action.payload
      };
    }
    case MOVE_MAP: {
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
