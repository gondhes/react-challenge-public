import { combineReducers } from 'redux'
import countries from './countries'
import favorite from './favorite'

export default combineReducers({
  countries,
  favorite
})