const initialState = {
  data: []
}

function countryReducer(state = initialState, action) {
  const { type, payload } = action
  if(type === 'country/setCountry') {
      return { ...state, data: payload }
  } 
  return state
}

export default countryReducer
