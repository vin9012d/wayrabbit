//Write the ActionCreator functions here

import axios from "axios"
import { ADD_WATCHES_DATA_SUCCESS, GET_WATCHES_DATA_FAILURE, GET_WATCHES_DATA_REQUEST, GET_WATCHES_DATA_SUCCESS } from "./actiontype"

const getWatchRequest = () => {
    return {type:GET_WATCHES_DATA_REQUEST}
}
const getWatchSuccess = (payload) => {
  
    return {type:GET_WATCHES_DATA_SUCCESS,payload:payload}
}
const addwathsuccess = () => {
    return {type:ADD_WATCHES_DATA_SUCCESS}
}


const getWatchFailure = () => {
    return {type:GET_WATCHES_DATA_FAILURE}
}

const getWatchData = (page) => (dispatch) => {
   
    dispatch(getWatchRequest());
    axios.get(`https://reqres.in/api/users?page=${page}`)
        .then((res) => {
          return  dispatch(getWatchSuccess(res.data))
        console.log(res,'res')
        }).catch((err) => {
            dispatch(getWatchFailure())
        console.log(err,"err")
    })
}

const addWatchData = (payload) => (dispatch) => {
    
    dispatch(getWatchRequest());
    axios.post(`https://reqres.in/api/users`,payload)
        .then((res) => {
             return dispatch(addwathsuccess())
        console.log(res,'res')
        }).catch((err) => {
            dispatch(getWatchFailure())
        console.log(err,"err")
    })
}


export {getWatchRequest,getWatchFailure,getWatchSuccess,getWatchData,addWatchData}