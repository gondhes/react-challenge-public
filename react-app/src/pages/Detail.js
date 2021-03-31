import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import useFetch from '../helpers/hooks/useFetch'
import { useParams } from 'react-router-dom'

function Detail() {

  let { code } = useParams()
  let url = `https://restcountries.eu/rest/v2/alpha/${code}`

  const { data, loading, error, setNewUrl } = useFetch(url)
  const country = data

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
    
    <div className="text-center mt-5">
      <h1>Country Information</h1>
      <div className="mt-5">
      <img src={country.flag} alt="flag" style={{ position: 'relative', width: '16rem', height: '10rem' }}></img>
        <div className="mt-5">
          <h3>{country.alpha2Code}</h3>
          <h2><b>{country.name}</b></h2>
          <h3>Region: {country.region}</h3>
          <h5>Sub Region: {country.subregion}</h5><br/>
          <h5>Capital: {country.capital}</h5>
          <h5>Population: {country.population}</h5>
          <h5>Area: {country.area}</h5>
        </div>
      </div>
    </div>
  )
}

export default Detail;
