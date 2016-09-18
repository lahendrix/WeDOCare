import * as types from './types'
import axios from 'axios';

export function fetchDiagnoses() {
  return (dispatch, getState) => {
    dispatch(requestDiagnoses())
    return axios({
			url: "https://a208h8fgml.execute-api.us-east-1.amazonaws.com/dev/",
			timeout: 20000,
			method: 'get',
			responseType: 'json'
		})
		.then(function(response) {
      console.log("received diagnosis");
			dispatch(receiveDiagnoses(response.data));
		})
		.catch(function(response){
			console.log("error retrieving diagnoses");
      console.log(response);
		})
  }
}

export function requestDiagnoses () {
  return {
    type: types.DIAGNOSES_GET_REQUEST
  }
}

export function receiveDiagnoses (diagnoses) {
  return {
    type: types.DIAGNOSES_GET_SUCCESS,
    diagnoses,
  }
}
