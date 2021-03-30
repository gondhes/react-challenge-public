import './App.css';
import React, { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import CountryList from './components/CountryList'

// class App extends React.Component {
//   constructor() {
//     super()

//     this.state = {
//       title: 'The Nations',
//       countries: [
//         {
//           alpha2Code: 'AF',
//           name: 'Afghanistan',
//           capital: 'Kabul',
//           region: 'Asia',
//           flag: ''
//         },
//         {
//           alpha2Code: 'HK',
//           name: 'Hong Kong',
//           capital: 'City of Victoria',
//           region: 'Asia',
//           flag: ''
//         },
//         {
//           alpha2Code: 'ID',
//           name: 'Indonesia',
//           capital: 'Jakarta',
//           region: 'Asia',
//           flag: ''
//         }
//       ]
//     }
//   }

//   getCountries = () => {
//     fetch('https://restcountries.eu/rest/v2/all')
//     .then(res => res.json())
//     .then(res => {
//       console.log(res)
//       this.setState({
//         ...this.state,
//         countries: res
//       })
//     })
//     .catch(err => console.log(err))
//   }

//   componentDidMount() {
//     this.getCountries()
//   }

//   render () {
//     const {title, countries} = this.state

//     return (
//       <div>
//         <h1 className="text-center">{title}</h1>
//         <section className="product">
//           <div className="container">
//             <div className="row">
//               {
//                 countries.map((country, id) => {
//                   return <CountryList country={country} id={id} key={country.alpha2Code}></CountryList>
//                 })
//               }
//             </div>
//           </div>
//         </section>
//       </div>
//     )
//   }
// }

function App() {
  const [countries, setCountries] = useState([])

  useEffect(() => {
    fetch('https://restcountries.eu/rest/v2/all')
    .then(res => res.json())
    .then(countries => {
      setCountries(countries)
    })
    .catch(err => console.log(err))
  }, [])

  return (
    <div>
      {/* <h1 className="text-center">{title}</h1> */}
      <section className="product">
        <div className="container">
          <div className="row">
            {
              countries.map(country => {
                return <CountryList country={country} key={country.alpha2Code}></CountryList>
              })
            }
          </div>
        </div>
      </section>
    </div>
  )
}

export default App;
