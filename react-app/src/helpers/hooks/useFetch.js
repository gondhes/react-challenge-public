import { useEffect } from 'react'
import { setCountries } from '../../store/actions'
import { useSelector, useDispatch } from 'react-redux'

function useFetch() {

  const countries = useSelector(state => state.countries)
  const url = useSelector(state => state.url)
  const dispatch = useDispatch()

  useEffect(() => {
    fetch(url)
    .then(res => res.json())
    .then(data => {
      dispatch(setCountries(data))
    })
    .catch(err => console.log(err))
  }, [url, dispatch])

  return {
    countries,
    url
  }
}

export default useFetch
