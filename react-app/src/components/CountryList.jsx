import React from 'react'

// class CountryList extends React.Component {
//   render() {
//     const {country, id} = this.props
//     return (
//       <>
//       <div className="col-3 mt-5">
//         <div className="card bg-light mb-3">
//         <div className="div-img border"><img className="card-img" src={country.flag}></img></div>
//           <div className="card-body">
//             <h5 className="card-title text-center">{country.alpha2Code}</h5>
//             <h5 className="card-text text-center"><b>{country.name}</b></h5>
//             {/* <h5 className="card-text text-center">{country.capital}</h5> */}
//             <h5 className="card-text text-center">{country.region}</h5>
//           </div>
//         </div>
//       </div>
//       </>
//     )
//   }
// }

function CountryList(props) {
  const country = props.country
  return (
    <>
    <div className="col-3 mt-5">
      <div className="card bg-light mb-3">
      <div className="div-img border"><img className="card-img" src={country.flag} alt="flag"></img></div>
        <div className="card-body">
          <h5 className="card-title text-center">{country.alpha2Code}</h5>
          <h5 className="card-text text-center"><b>{country.name}</b></h5>
          {/* <h5 className="card-text text-center">{country.capital}</h5> */}
          <h5 className="card-text text-center">{country.region}</h5>
        </div>
      </div>
    </div>
    </>
  )
}

export default CountryList
