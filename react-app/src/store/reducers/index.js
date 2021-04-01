import { combineReducers } from 'redux'
import countries from './countriesReducer'
import country from './countryReducer'
import favorites from './favoritesReducer'
import url from './urlReducer'

const reducer = combineReducers({
  countries,
  country,
  favorites,
  url
})

export default reducer