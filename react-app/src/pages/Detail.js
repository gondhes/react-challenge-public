import React, { useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
// import useFetch from '../helpers/hooks/useFetch'
import { useParams } from 'react-router-dom'

import { useSelector, useDispatch } from 'react-redux'
import { setCountries } from '../store/actions/countries'
import { setUrl } from '../store/actions/url'

function Detail() {

  let { code } = useParams()
  let detailUrl = `https://restcountries.eu/rest/v2/alpha/${code}`

  const country = useSelector(state => state.countries.data)
  const url = useSelector(state => state.url.data)
  const dispatch = useDispatch()

  dispatch(setUrl(detailUrl))

  useEffect(() => {
    fetch(url)
    .then(res => res.json())
    .then(data => {
      dispatch(setCountries(data))
    })
    .catch(err => console.log(err))
  }, [url, dispatch])

  return (
    
    <div className="text-center mt-5">
      <h1>Country Information</h1>
      <div className="mt-5">
      <img className="border img-fluid" src={country.flag} alt="flag" style={{ position: 'relative', width: '16rem', height: '10rem' }}></img>
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
