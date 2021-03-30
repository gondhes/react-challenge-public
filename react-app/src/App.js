import './App.css';
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Country from './components/Country'
import useFetch from './helpers/hooks/useFetch'
import { Button } from 'react-bootstrap'

function App() {

  const { data, loading, error, setNewUrl } = useFetch()

  let url;
  let baseUrl = 'https://restcountries.eu/rest/v2'

  function changeUrl(newUrl) {
    if (newUrl === 'all') {
      url = `${baseUrl}/${newUrl}`
    } else {
      url = `${baseUrl}/region/${newUrl}`
    } 
    setNewUrl(url)
  }

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
      <div className="text-center mt-5">
      <h1>Countries Of The World</h1><br></br>
        <Button variant="outline-info" onClick={() => changeUrl('all')}>All Countries</Button>{' '}
        <Button variant="outline-info" onClick={() => changeUrl('africa')}>Africa</Button>{' '}
        <Button variant="outline-info" onClick={() => changeUrl('americas')}>Americas</Button>{' '}
        <Button variant="outline-info" onClick={() => changeUrl('asia')}>Asia</Button>{' '}
        <Button variant="outline-info" onClick={() => changeUrl('europe')}>Europe</Button>{' '}
        <Button variant="outline-info" onClick={() => changeUrl('oceania')}>Oceania</Button>
      </div>
      
      <section className="product">
        <div className="container">
          <div className="row">
            {
              data.map(country => {
                return <Country country={country} key={country.alpha2Code}></Country>
              })
            }
          </div>
        </div>
      </section>
    </div>
  )
}

export default App;
