import { useEffect, useState } from 'react'

function useFetch() {

  const url = 'https://restcountries.eu/rest/v2/all'
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [newUrl, setNewUrl] = useState(url)

  useEffect(() => {
    setLoading(true)
    fetch(newUrl)
    .then(res => res.json())
    .then(data => {
      setData(data)
    })
    .catch(err => setError(err))
    .finally(_ => setLoading(false))
  }, [newUrl])

  return {
    data,
    loading,
    error,
    setNewUrl
  }
}

export default useFetch
