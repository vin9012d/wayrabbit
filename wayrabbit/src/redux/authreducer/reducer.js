import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from "./actiontype";

// NOTE: DO NOT MODIFY the intial state structure in this file.
const initialState = {
  isAuth: false,
  token: "",
  isLoading: false,
  isError: false,
};

const reducer = (state = initialState,{payload,type}) => {
  switch (type) {
    case LOGIN_REQUEST: {
      return {...state,isLoading:true,isError:false}
  }
    case LOGIN_SUCCESS: {
      return { ...state, isLoading: false, isError: false, token: payload, isAuth: true}
    }
    case LOGIN_FAILURE: {
      return {...state,isLoading:false,isError:true}
      }
}
  
  return state;
};

export { reducer };