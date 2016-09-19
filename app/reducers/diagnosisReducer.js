import * as Types from '../actions/types'
import { createReducer } from 'reduxsauce'

export const INITIAL_STATE = {
  diagnoses: []
}

// successful logins
const setDiagnoses = (state, action) => {
  return Object.assign({}, state, {
    diagnoses: action.diagnoses
  })
}

// map our types to our handlers
const ACTION_HANDLERS = {
  [Types.DIAGNOSES_GET_SUCCESS]: setDiagnoses
}

export default createReducer(INITIAL_STATE, ACTION_HANDLERS)
