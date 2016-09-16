import * as types from './types'
import Api from '../lib/api'

export function getDiagnoses(ingredients) {
  return (dispatch, getState) => {

    return Api.get('/api/diagnoses').then(resp => {
      dispatch(setDiagnoses{diagnoses: resp}));
    }).catch( (ex) => {
      console.log(ex);
    });
  }
}

export function setDiagnoses({ diagnoses }) {
  return {
    type: types.SET_DIAGNOSES,
    diagnoses,
  }
}
