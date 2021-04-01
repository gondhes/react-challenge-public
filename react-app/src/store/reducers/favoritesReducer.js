const initialState = {
  data: []
}

function favoritesReducer(state = initialState, action) {
  const { type, payload } = action
  if(type === 'favorites/setFavorites') {
    let fav = state.data
    if(fav.find(country => country.alpha2Code === payload.alpha2Code) === undefined ) {
      fav.push(payload)
    }
    return { ...state, data: fav }
  }
  return state
}

export default favoritesReducer
