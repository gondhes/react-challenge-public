import '../App.css';
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Country from '../components/Country'
import useFetch from '../helpers/hooks/useFetch'
import { Button } from 'react-bootstrap'

import { useSelector, useDispatch } from 'react-redux'
import { setUrl } from '../store/actions'

function Home() {

  // let url = 'https://restcountries.eu/rest/v2/all'
  let baseUrl = 'https://restcountries.eu/rest/v2'

  // const { data, loading, error, setNewUrl } = useFetch(url)
  let updatedUrl;
  const url = useSelector(state => state.url)
  const countries = useSelector(state => state.countries)
  const dispatch = useDispatch()

  // dispatch(setUrl(url))
  useFetch()

  function changeUrl(newUrl) {
    if (newUrl === 'all') {
      updatedUrl = `${baseUrl}/${newUrl}`
      dispatch(setUrl(updatedUrl))
    } else {
      updatedUrl = `${baseUrl}/region/${newUrl}`
      dispatch(setUrl(updatedUrl))
      console.log(url, "<<<<<<")
    } 
    // dispatch(setUrl(url))
    // console.log(url, "<<<<<<")
  }

  // if (loading) {
  //   return (
  //     <div className="text-center">
  //       <img src='../public/ripple.svg' alt='loading..'></img>
  //     </div>
  //   )
  // }

  // if (error) {
  //   return (
  //     <div className="text-center">
  //       <h2>Error: {error.message}</h2>
  //     </div>
  //   )
  // }

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
