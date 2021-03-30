import './App.css';
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Country from './components/Country'
import useFetch from './helpers/hooks/useFetch'

function App() {

  let baseUrl = 'https://restcountries.eu/rest/v2'
  let url = baseUrl+'/all'
  const all = baseUrl+'/all'
  const africa = baseUrl+'/region/africa'
  const americas = baseUrl+'/region/americas'
  const asia = baseUrl+'/region/asia'
  const europe = baseUrl+'/region/europe'
  const oceania = baseUrl+'/region/oceania'

  function changeUrl(newUrl) {
    if (newUrl === 'all') {
      url = all
    } else if (newUrl === 'africa') {
      url = africa
    } else if (newUrl === 'americas') {
      url = americas
    } else if (newUrl === 'asia') {
      url = asia
    } else if (newUrl === 'europe') {
      url = europe
    } else if (newUrl === 'oceania') {
      url = oceania
    }
  }

  const { data, loading, error } = useFetch(url)

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
      <h1 className="text-center">Nations Of The World</h1>
      <div className="text-center">
        <button onClick={() => changeUrl('all')}>All Countries</button>
        <button onClick={() => changeUrl('africa')}>Africa</button>
        <button onClick={() => changeUrl('americas')}>Americas</button>
        <button onClick={() => changeUrl('asia')}>Asia</button>
        <button onClick={() => changeUrl('europe')}>Europe</button>
        <button onClick={() => changeUrl('oceania')}>Oceania</button>
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
