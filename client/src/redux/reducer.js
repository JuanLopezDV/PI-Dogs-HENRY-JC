import {
  ADD_DOGS,
  ADD_TEMPERAMENTS,
  ERRORS,
  SEARCH_DOGS,
  FILTER_DOGS,
  CLEAR_FILTERS,
} from "./actions";

const initialState = {
  allDogs: [],
  allTemperaments: [],
  filteredDogs: [],
  errors: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_DOGS:
      return {
        ...state,
        allDogs: [...action.payload],
        filteredDogs: [...action.payload],
      };

    case ADD_TEMPERAMENTS:
      return {
        ...state,
        allTemperaments: [...action.payload],
      };

    case SEARCH_DOGS:
      return {
        ...state,
        filteredDogs: [...action.payload],
      };

    case FILTER_DOGS:
      return {
        ...state,
        filteredDogs: [...action.payload],
      };

    case CLEAR_FILTERS:
      return {
        ...state,
        filteredDogs: [...state.allDogs],
      };

    case ERRORS:
      return {
        ...state,
        errors: [...state.errors, action.payload],
      };

    default:
      return { ...state };
  }
};

export { rootReducer };
