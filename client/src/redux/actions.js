import axios from "axios";

const ADD_DOGS = "ADD_DOGS";
const ADD_TEMPERAMENTS = "ADD_TEMPERAMENTS";
const SEARCH_DOGS = "SEARCH_DOGS";
const ERRORS = "ERRORS";
const FILTER_DOGS = "FILTER_DOGS";
const CLEAR_FILTERS = "CLEAR_FILTERS";
const ORDER_BY = "ORDER_BY";

const addDogs = () => {
  const endpoint = `${process.env.REACT_APP_API_URL}/dogs`;
  return async (dispatch) => {
    try {
      const { data } = await axios(endpoint);
      return dispatch({
        type: ADD_DOGS,
        payload: data,
      });
    } catch (error) {
      return dispatch({
        type: ERRORS,
        payload: error.message,
      });
    }
  };
};

const addTemperaments = () => {
  const endpoint = `${process.env.REACT_APP_API_URL}/temperaments`;
  return async (dispatch) => {
    try {
      const { data } = await axios(endpoint);
      return dispatch({
        type: ADD_TEMPERAMENTS,
        payload: data,
      });
    } catch (error) {
      return dispatch({
        type: ERRORS,
        payload: error.message,
      });
    }
  };
};

const searchDogs = (query) => {
  const endpoint = `${process.env.REACT_APP_API_URL}/dogs?name=${query}`;
  if (!!query) {
    return async (dispatch) => {
      try {
        const { data } = await axios(endpoint);
        return dispatch({
          type: SEARCH_DOGS,
          payload: data,
        });
      } catch (error) {
        return dispatch({
          type: ERRORS,
          payload: error,
        });
      }
    };
  } else {
    return (dispatch) => {
      return dispatch({ type: "" });
    };
  }
};

const filterDogs = (data) => {
  return (dispatch) => {
    return dispatch({
      type: FILTER_DOGS,
      payload: data,
    });
  };
};

const orderDogs = (data) => {
  if (!!data) {
    return (dispatch) => {
      return dispatch({
        type: ORDER_BY,
        payload: data,
      });
    };
  } else {
    return (dispatch) => {
      return dispatch({
        type: "",
      });
    };
  }
};

const clearFilters = () => {
  return (dispatch) => {
    return dispatch({
      type: CLEAR_FILTERS,
      payload: true,
    });
  };
};

export {
  ADD_DOGS,
  ADD_TEMPERAMENTS,
  SEARCH_DOGS,
  FILTER_DOGS,
  CLEAR_FILTERS,
  ORDER_BY,
  ERRORS,
  addDogs,
  addTemperaments,
  searchDogs,
  filterDogs,
  clearFilters,
  orderDogs,
};
