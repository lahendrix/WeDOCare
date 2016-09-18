import { combineReducers } from 'redux';
import * as loginReducer from './loginReducer'
import * as diagnosisReducer from './diagnosisReducer'

export default combineReducers(Object.assign(
  loginReducer,
  diagnosisReducer,
));
