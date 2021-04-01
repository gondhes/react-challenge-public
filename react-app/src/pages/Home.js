import '../App.css';
import React, { useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Country from '../components/Country'
// import useFetch from '../helpers/hooks/useFetch'
import { Button } from 'react-bootstrap'

import { useSelector, useDispatch } from 'react-redux'
import { setCountriesAsync } from '../store/actions/countries'
import { setUrl } from '../store/actions/url'

function Home() {

  let baseUrl = 'https://restcountries.eu/rest/v2'
  let updatedUrl;
  
  const countries = useSelector(state => state.countries.data)
  const url = useSelector(state => state.url.data)
  const dispatch = useDispatch()

  function changeUrl(newUrl) {
    if (newUrl === 'all') {
      updatedUrl = `${baseUrl}/${newUrl}`
      dispatch(setUrl(updatedUrl))
    } else {
      updatedUrl = `${baseUrl}/region/${newUrl}`
      dispatch(setUrl(updatedUrl))
    } 
  }

  useEffect(() => {
    dispatch(setCountriesAsync(url))
  }, [url, dispatch])

  return (
    <div>
      <div className="text-center mt-5">
      <h1 className="mb-5">Countries Of The World</h1>
        <Button className="mr-1 ml-1" variant="outline-info" onClick={() => changeUrl('all')}>All Countries</Button>
        <Button className="mr-1 ml-1" variant="outline-info" onClick={() => changeUrl('africa')}>Africa</Button>
        <Button className="mr-1 ml-1" variant="outline-info" onClick={() => changeUrl('americas')}>Americas</Button>
        <Button className="mr-1 ml-1" variant="outline-info" onClick={() => changeUrl('asia')}>Asia</Button>
        <Button className="mr-1 ml-1" variant="outline-info" onClick={() => changeUrl('europe')}>Europe</Button>
        <Button className="mr-1 ml-1" variant="outline-info" onClick={() => changeUrl('oceania')}>Oceania</Button>
      </div>
      
      <section>
        <div className="container">
          <div className="row">
            {
              countries.map(country => {
                return <Country country={country} key={country.alpha2Code}></Country>
              })
            }
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home;
