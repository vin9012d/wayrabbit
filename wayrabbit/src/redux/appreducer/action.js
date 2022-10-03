//Write the ActionCreator functions here

import axios from "axios"
import { GET_WATCHES_DATA_FAILURE, GET_WATCHES_DATA_REQUEST, GET_WATCHES_DATA_SUCCESS } from "./actiontype"

const getWatchRequest = () => {
    return {type:GET_WATCHES_DATA_REQUEST}
}
const getWatchSuccess = (payload) => {
  
    return {type:GET_WATCHES_DATA_SUCCESS,payload:payload}
}


const getWatchFailure = () => {
    return {type:GET_WATCHES_DATA_FAILURE}
}

const getWatchData = (data) => (dispatch) => {
    dispatch(getWatchRequest());
    axios.get(`http://localhost:8080/watches`,data)
        .then((res) => {
            dispatch(getWatchSuccess(res.data))
        console.log(res,'res')
        }).catch((err) => {
            dispatch(getWatchFailure())
        console.log(err,"err")
    })
}


export {getWatchRequest,getWatchFailure,getWatchSuccess,getWatchData}