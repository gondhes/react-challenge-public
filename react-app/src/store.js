import { createStore } from 'redux'

const initialState = {
    countries: []
}

function reducer(state = initialState, action) {
    const { type, payload } = action
    if(type === 'countries/setCountries') {
        return { ...state, countries: payload }
    }
}

const store = createStore(reducer)

export default store
