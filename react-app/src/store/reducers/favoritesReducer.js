const initialState = {
  data: []
}

function favoritesReducer(state = initialState, action) {
  const { type, payload } = action
  if(type === 'favorites/setFavorites') {
    return { ...state, data: payload }
  }
  return state
}

export default favoritesReducer
