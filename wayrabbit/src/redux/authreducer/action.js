
import axios from "axios"

import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from "./actiontype"

const loginRequest = () => {
    return {type:LOGIN_REQUEST}
}
const loginSuccess = (payload) => {
    return { type: LOGIN_SUCCESS, payload: payload}
}
const loginFailure = () => {
    return {type:LOGIN_FAILURE}
}

const loginWatch = (payload) => (dispatch) => {
    dispatch(loginRequest());
    return axios({
        method: "post",
        url:"login",
        baseURL: "https://young-brook-10850.herokuapp.com",
        data:payload
    })
        .then((r) => {
            console.log(r,'r')
        return dispatch(loginSuccess(r.data.token))
        }).catch((err) => {
        dispatch(loginFailure())
    })
}




export {loginRequest,loginSuccess,loginFailure,loginWatch}