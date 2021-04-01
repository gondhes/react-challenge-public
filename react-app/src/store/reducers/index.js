import { combineReducers } from 'redux'
import countries from './countriesReducer'
import favorites from './favoritesReducer'
import url from './urlReducer'

const reducer = combineReducers({
  countries,
  favorites,
  url
})

export default reducer