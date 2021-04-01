const initialState = {
    url: 'https://restcountries.eu/rest/v2/all',
    countries: [],
    favorit: []
}

function reducer(state = initialState, action) {
    const { type, payload } = action
    if(type === 'countries/setCountries') {
        return { ...state, countries: payload }
    } else if(type === 'url/setUrl') {
        return { ...state, url: payload }
    } else if(type === 'favorit/setFavorit') {
        return { ...state, favorit: payload }
    }
    return state
}

export default reducer
