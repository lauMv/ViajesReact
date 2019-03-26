import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Jumbotron, Container, Row, Col, Image, Button } from 'react-bootstrap';
import './Home.css';
import CustomNavbar from './CustomNavbar';

export default class Home extends Component {
  render() {
    return (
      <Container>
        <div className='.background-image'
      style ={ { backgroundImage: "url('assets/home.jpg')" } }>
        <Jumbotron>
          <h2>Welcome to Traveling</h2>
          <p> where you can find incredible travel photos of all our users. Join up!</p>
          <Link to="/JoinUs">
            {/* <Button bsStyle="primary">Entrar</Button> */}
            <button class="ui inverted yellow button">Entrar</button>
          </Link>
        </Jumbotron>
       
        <Row className="show-grid text-center">
           <Col xs={12} sm={4} className="person-wrapper" style={{ color: 'white' }} >
            <Image src="assets/image1.jpg" circle className="another-pic"/>
            <h3>Venice</h3>
            <p>Built by Giuseppe Benoni in 1677 to ensure no ship entered the Grand Canal without paying duties, the warehouses reopened in 2009 after a striking reinvention by Japanese architect Tadao Ando. The dramatic space now hosts exhibitions of ambitious, large-scale contemporary artworks from some of the world's most provocative creative minds.</p>
           </Col> 
          <Col xs={12} sm={4} className="person-wrapper" style={{ color: 'white' }}>
            <Image src="assets/image2.jpg" circle className="profile-pic"/>
            <h3>Greece</h3>
            <p>Greece was a crossroad of civilisations that had left their traces everywhere: the architecture of the museums and settlements, miniature art, daily life, nutritional customs and in all forms of popular art in the various regions of the country. The visitor can come into contact with this multihued and impressive mosaic through trips into historical, cultural, artistic and folkloric traditions.</p>
          </Col>
          <Col xs={12} sm={4} className="person-wrapper" style={{ color: 'white' }}>
            <Image src="assets/image3.jpg" circle className="profile-pic"/>
            <h3>Riff</h3>
            <p>That's a crooked tree. We'll send him to Washington. These little son of a guns hide in your brush and you just have to push them out.</p>
          </Col>
        </Row> 
        </div>
      </Container>
    )
  }
}