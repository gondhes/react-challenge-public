import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import useFetch from '../helpers/hooks/useFetch'

function Detail() {

  let url = 'https://restcountries.eu/rest/v2/alpha/af'

  const { data, loading, error, setNewUrl } = useFetch(url)

  if (loading) {
    return (
      <div className="text-center">
        <img src='../public/ripple.svg' alt='loading..'></img>
      </div>
    )
  }

  if (error) {
    return (
      <div className="text-center">
        <h2>Error: {error.message}</h2>
      </div>
    )
  }

  return (
    
    <div>
        {
              JSON.stringify(data)
        }
    </div>
  )
}

export default Detail;
