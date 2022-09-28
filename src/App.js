-
import './App.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup'

function App() {
  return (
    <div className="App">
      
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Hotels</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Accueil</Nav.Link>
            <Nav.Link href="#link">Voyages organisé</Nav.Link>
            <NavDropdown title="Dropdown" id="basic- execursion">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <h1 className='titre'>AGENCE DE VOYAGES</h1>
    <Carousel>
      <Carousel.Item interval={1000}>
        <img
          className="slider"
          src="https://img.ev.mu/images/portfolio/pays/66/600x400/852831.jpg"
          alt=""
        />
        <Carousel.Caption>
          <h3>1</h3>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="slider"
          src="https://a.cdn-hotels.com/gdcs/production112/d1899/d77bcff2-a859-4785-bdb1-3b15a0887607.jpg?impolicy=fcrop&w=800&h=533&q=medium"
          alt=""
        />
        <Carousel.Caption>
          <h3>2</h3>
        
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="slider"
          src="https://www.slate.fr/sites/default/files/styles/1060x523/public/bush-o-graphy-ujiiuat1hz0-unsplash.jpg"
          alt=""
        />
        <Carousel.Caption>
          <h3>3</h3>
          
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    <CardGroup className='card1'>
      <Card className='carddd'>
        <Card.Img variant="top" src="https://tunisiepromo.tn/wp-content/uploads/2022/09/istanbul-wp.png" />
        <Card.Body>
          <Card.Title>TURQUIE, VENTES FLASH, VOYAGES ORGANISÉS20/09/2022</Card.Title>
          <Card.Text className='yext'>
          
Voyage organisé à ISTANBUL Automne 2022
          </Card.Text>
        </Card.Body>
       
      </Card>
      <Card className='carddd'>
        <Card.Img variant="top" src="https://tunisiepromo.tn/wp-content/uploads/2022/04/one-resort-mansour.png" />
        <Card.Body>
          <Card.Title>HÔTELS EN TUNISIE, VENTES FLASH</Card.Title>
          <Card.Text className='yext'>
          
Super Promo ! Hôtel One Resort El Mansour Mahdia.{' '}
          </Card.Text>
        </Card.Body>
       
      </Card>
      <Card className='carddd'>
        <Card.Img variant="top" src="https://tunisiepromo.tn/wp-content/uploads/2022/05/djerba-tn-1.png" />
        <Card.Body>
          <Card.Title>EXCURSIONS, VENTES FLASH
Circuit Djerba: 3 Jours / 2 Nuits

</Card.Title>
<Card.Text className='yext'>
          Top Ventes Spéciale Septembre!
HÔTELS EN TUNISIE, VENTES FLASH
          </Card.Text>
        </Card.Body>
       
      </Card>
    </CardGroup>
   <h5 className='footer'>Copyright © 2022. Tunisie Promo Hotels Powred by Tunisie Promo
Infoline 36 290 000 - 36 290 290 ou dans l’un de nos agences :
Tunis Jardin De Carthage: 58  578 345 / 71 263 102
Centre U. Nord: 58 529 286 / 58 529 482 / 71 822 099
Tunis el Mourouj: 58  529 482
Tunis Boumhel: 58 578 345
Hammamet: 58 401 004 / 72 227 000
Nabeul: 36 290 290 / 58 578 346
Sousse Kantaoui: 58 529 493 / 73 817 110
Sousse Khezama: 58 401 007 / 31 320 777
Sousse City Beach: 58 401 025
Monastir: 58 313 957 / 58 702 011
Mahdia: 36 290 000 / 58 313 960
Sfax: 58 529 481 / 36 303 393
Gafsa: 58 529 480
Djerba:  58 529 498</h5>
    </div>
  );
}

export default App;
