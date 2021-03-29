import './App.css';
import React from 'react'
import CountryList from './components/CountryList'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      title: 'The Nations',
      countries: [
        {
          alpha2Code: 'AF',
          name: 'Afghanistan',
          capital: 'Kabul',
          region: 'Asia'
        },
        {
          alpha2Code: 'HK',
          name: 'Hong Kong',
          capital: 'City of Victoria',
          region: 'Asia'
        },
        {
          alpha2Code: 'ID',
          name: 'Indonesia',
          capital: 'Jakarta',
          region: 'Asia'
        }
      ]
    }
  }

  render () {
    const {title, countries} = this.state

    return (
      <div>
        <h1>Hello World</h1>
        <h2>{title}</h2>
        <table>
          <thead>
            <tr>
              <th>No</th>
              <th>Code</th>
              <th>Name</th>
              <th>Capital</th>
              <th>Region</th>
            </tr>
          </thead>
          <tbody id="list">
              {
                countries.map((country, id) => {
                  return <CountryList country={country} id={id} key={country.alpha2Code}></CountryList>
                })
              }
          </tbody>
        </table>
      </div>
    )
  }
}

export default App;
