import React from 'react'
import { Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Country(props) {
  const country = props.country
  const path = "/country/" + country.alpha2Code
  return (
    <>
    <div className="col-3 mt-5">
      <Card className="bg-light mb-3 text-center" style={{ height: '25rem' }}>
      <Card.Img className="div-img border mt-4 img-fluid" src={country.flag} alt="flag" style={{ position: 'relative', width: '16rem', height: '10rem' }}></Card.Img>
        <Card.Body>
          <Card.Title>{country.alpha2Code}</Card.Title>
          <Card.Text><b>{country.name}</b></Card.Text>
          <Card.Text>{country.region}</Card.Text>
          <Link to={path}>see details</Link><br/>
          <Link to="/fav">add to favorit</Link>
          {/* <Button variant="info" size="sm" style={{ marginTop: '5px' }}>add to favorite</Button> */}
        </Card.Body>
      </Card>
    </div>
    </>
  )
}

export default Country
