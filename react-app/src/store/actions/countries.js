export function setCountries(payload) {
  return { type: 'countries/setCountries', payload }
}

export function setCountriesAsync(url) {
  return (dispatch) => {
    fetch(url)
      .then(res => res.json())
      .then(data => {
        dispatch(setCountries(data))
      })
      .catch(err => console.log(err))
  }
}