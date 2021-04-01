const initialState = {
  data: []
}

function countriesReducer(state = initialState, action) {
  const { type, payload } = action
  if(type === 'countries/setCountries') {
      return { ...state, data: payload }
  } 
  return state
}

export default countriesReducer
