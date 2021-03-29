import React from 'react'

class CountryList extends React.Component {
  render() {
    const {country, id} = this.props
    return (
      <>
      <tr>
        <td>{id+1}</td>
        <td>{country.alpha2Code}</td>
        <td>{country.name}</td>
        <td>{country.capital}</td>
        <td>{country.region}</td>
      </tr>
      </>
    )
  }
}

export default CountryList
