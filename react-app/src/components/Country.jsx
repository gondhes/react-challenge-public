import React from 'react'
import { Card, Button } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'

function Country(props) {
  const { alpha2Code, flag, name, region } = props.country
  let history = useHistory()

  const toCountryDetail = (code) => {
    history.push('/country/' + code)
  }

  const toFavorite = () => {
    history.push('/fav')
  }

  return (
    <>
    <div className="col-3 mt-5">
      <Card className="bg-light mb-3 text-center" style={{ height: '26rem' }}>
      <Card.Img className="div-img border mt-4 img-fluid" src={flag} alt="flag" style={{ position: 'relative', width: '16rem', height: '10rem' }}></Card.Img>
        <Card.Body>
          <Card.Title>{alpha2Code}</Card.Title>
          <Card.Text><b>{name}</b></Card.Text>
          <Card.Text>{region}</Card.Text>
          <Button variant="info" size="sm" style={{ marginTop: '5px' }} onClick={() => toCountryDetail(alpha2Code)}>see details</Button><br/>
          <Button variant="info" size="sm" style={{ marginTop: '5px' }} onClick={() => toFavorite()}>add to favorite</Button>
        </Card.Body>
      </Card>
    </div>
    </>
  )
}

export default Country
