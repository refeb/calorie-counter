import { combineReducers } from 'redux'

import foodReducer from './foods'
import bmrReducer from './bmr'

export default combineReducers({
  foods: foodReducer,
  BMR: bmrReducer
})
