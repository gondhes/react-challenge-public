const initialState = {
    favorit: []
}

function favoriteReducer(state = initialState, action) {
    const { type, payload } = action
    if(type === 'favorit/setFavorit') {
        return { ...state, favorit: payload }
    }
    return state
}

export default favoriteReducer
