export function setCountry(payload) {
  return { type: 'country/setCountry', payload }
}

export function setCountryAsync(url) {
  return (dispatch) => {
    fetch(url)
      .then(res => res.json())
      .then(data => {
        dispatch(setCountry(data))
      })
      .catch(err => console.log(err))
  }
}