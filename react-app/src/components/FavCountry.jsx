import React from 'react'
import { Card, Button } from 'react-bootstrap'

function Country(props) {
  
  const { alpha2Code, flag, name, region } = props.country

  return (
    <>
    <div className="col-3 mt-5">
      <Card className="bg-light mb-3 text-center" style={{ height: '26rem' }}>
      <Card.Img className="div-img border mt-4 img-fluid" src={flag} alt="flag" style={{ position: 'relative', width: '16rem', height: '10rem' }}></Card.Img>
        <Card.Body>
          <Card.Title>{alpha2Code}</Card.Title>
          <Card.Text><b>{name}</b></Card.Text>
          <Card.Text>{region}</Card.Text>
          <Button variant="info" size="sm" style={{ marginTop: '5px' }}>remove</Button>
        </Card.Body>
      </Card>
    </div>
    </>
  )
}

export default Country
