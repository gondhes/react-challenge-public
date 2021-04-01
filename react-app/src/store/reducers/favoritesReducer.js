const initialState = {
  data: []
}

function favoritesReducer(state = initialState, action) {
  const { type, payload } = action
  if(type === 'favorites/setFavorites') {
    let fav = state.data
    fav.push(payload)
    return { ...state, data: fav }
  }
  return state
}

export default favoritesReducer
