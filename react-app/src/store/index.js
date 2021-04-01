import { createStore } from 'redux'
import reducer from "./reducers"

// const initialState = {
//   url: 'https://restcountries.eu/rest/v2/all',
//   countries: [],
//   favorites: []
// }

// function reducer(state = initialState, action) {
//   const { type, payload } = action
//   if(type === 'countries/setCountries') {
//     return { ...state, countries: payload }
//   } else if(type === 'favorites/setFavorites') {
//     return { ...state, favorites: payload }
//   } else if(type === 'url/setUrl') {
//     return { ...state, url: payload }
//   }
//   return state
// }

const store = createStore(reducer)

export default store
