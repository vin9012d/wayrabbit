import { ADD_WATCHES_DATA_SUCCESS, GET_WATCHES_DATA_FAILURE, GET_WATCHES_DATA_REQUEST, GET_WATCHES_DATA_SUCCESS } from "./actiontype";

// NOTE: DO NOT MODIFY the intial state structure in this file.
const initialState = {
  watches: [],
  isLoading: false,
  isError: false,
  total: Infinity
};

const reducer = (state = initialState, {type,payload}) => {
  switch (type) {
    case GET_WATCHES_DATA_REQUEST: {
      return {...state,isLoading:true,isError:false}       
    }

    case GET_WATCHES_DATA_SUCCESS: {
      console.log(payload,'payload is here')
      return { ...state, isLoading: false, isError: false, watches:payload.data,total:payload.total_pages}
    }
    case GET_WATCHES_DATA_FAILURE: {
      return {...state,isLoading:false,isError:true}
    }
    case ADD_WATCHES_DATA_SUCCESS: {
      return {...state}
      }

      default:   return state;
  }

};

export { reducer };