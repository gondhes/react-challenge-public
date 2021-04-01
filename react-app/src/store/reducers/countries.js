const initialState = {
    countries: []
}

function countriesReducer(state = initialState, action) {
    const { type, payload } = action
    if(type === 'countries/setCountries') {
        return { ...state, countries: payload }
    } 
    return state
}

export default countriesReducer
