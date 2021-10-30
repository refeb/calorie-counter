import { combineReducers } from 'redux'

import foodReducer from './foods'
import bmrReducer from './bmr'
import logsReducer from './logs'

export default combineReducers({
  foods: foodReducer,
  BMR: bmrReducer,
  logs: logsReducer
})
