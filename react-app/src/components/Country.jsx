import React from 'react'
import { Card } from 'react-bootstrap'

function Country(props) {
  const country = props.country
  return (
    <>
    <div className="col-3 mt-5">
      <Card className="bg-light mb-3 text-center" style={{ height: '20rem' }}>
      <Card.Img className="div-img border mt-4" src={country.flag} alt="flag" style={{ position: 'relative', width: '13rem', height: '8rem' }}></Card.Img>
        <Card.Body>
          <Card.Title>{country.alpha2Code}</Card.Title>
          <Card.Text><b>{country.name}</b></Card.Text>
          <Card.Text>{country.region}</Card.Text>
        </Card.Body>
      </Card>
    </div>
    </>
  )
}

export default Country
