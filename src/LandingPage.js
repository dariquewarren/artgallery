import React from 'react'
import { Container,Row } from 'react-bootstrap'

function LandingPage() {
  return (
    <div>
    <h2>Welcome to LULU ISLAND!</h2>
    <h5>Destination:</h5>
    <Row style={{width:'90vw', height:'auto',marginLeft:'auto', marginRight:'auto', border:'2px solid yellow'}}>
    <Container style={{width:'50%', height:'50%', border:'2px solid black'}}>
    All art
    </Container>
    <Container style={{width:'50%', height:'50%', border:'2px solid red'}}>
    New Art
    </Container>
    <Container style={{width:'50%', height:'50%', border:'2px solid blue'}}>
    Curated Art
    </Container>
    <Container style={{width:'50%', height:'50%', border:'2px solid green'}}>
    artist alley
    </Container>
    </Row>
    </div>
  )
}

export default LandingPage