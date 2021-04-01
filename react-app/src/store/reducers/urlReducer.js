const initialState = {
  data: 'https://restcountries.eu/rest/v2/all'
}

function urlReducer(state = initialState, action) {
  const { type, payload } = action
  if(type === 'url/setUrl') {
    return { ...state, data: payload }
  } 
  return state
}

export default urlReducer
