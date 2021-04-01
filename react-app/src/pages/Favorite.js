import '../App.css';
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import FavCountry from '../components/FavCountry'

import { useSelector } from 'react-redux'

function Favorite() {

  const favorites = useSelector(state => state.favorites.data)

  return (
    <div>
      <div className="text-center mt-5">
      <h1 className="mb-5">Favorite Countries</h1>
      </div>
      
      <section>
        <div className="container">
          <div className="row">
            {
              favorites.map(country => {
                return <FavCountry country={country} key={country.alpha2Code}></FavCountry>
              })
            }
          </div>
        </div>
      </section>
    </div>
  )
}

export default Favorite;
