// import { useEffect, useState } from 'react'
import { useEffect } from 'react'
import { setCountries } from '../../store/actions'
import { useSelector, useDispatch } from 'react-redux'

function useFetch() {

  // const [data, setData] = useState([])
  // const [loading, setLoading] = useState(false)
  // const [error, setError] = useState(null)
  // const [newUrl, setNewUrl] = useState(url)

  const countries = useSelector(state => state.countries)
  const url = useSelector(state => state.url)
  const dispatch = useDispatch()

  useEffect(() => {
    // setLoading(true)
    fetch(url)
    .then(res => res.json())
    .then(data => {
      dispatch(setCountries(data))
    })
    .catch(err => console.log(err))
    // .finally(_ => setLoading(false))
  }, [url, dispatch])

  return {
    // data,
    // loading,
    // error,
    // setNewUrl
    countries,
    url
  }
}

export default useFetch
