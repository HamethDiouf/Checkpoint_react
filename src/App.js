import React from 'react';
import './App.css';
import {Form, Container, Navbar, Nav, Card, Button, FormControl } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <Navbar bg="dark" variant="dark" >
       
        <Navbar.Brand className='' id='logo'> Agro<span>Elevage</span></Navbar.Brand>
        
        <Nav className=" mx-auto">
          <Nav.Link href="#home">Accueil</Nav.Link>
          <Nav.Link href="#features">Fonctionnalités</Nav.Link>
          <Nav.Link href="#contact">Contact</Nav.Link>
        </Nav>
        <Form inline>
          <div className='d-flex justify-content-center ms-auto'>
            <FormControl type="text" placeholder="Rechercher" className="mr-sm-2" id='form'/>

            {/* <Button variant="outline-success">Rechercher</Button> */}
            </div>
          </Form>
      </Navbar>
      <Container >
      <div className='d-flex justify-content-center ms-auto'>
        <h1 id='title'>Agriculture et élevage</h1>
        </div>
        <div className='' id='card'>
          <Card>
            <div>
            <Card.Body>
              <Card.Title id='milo'>Carte 1 </Card.Title>
              <Card.Text id='content'>Contenu de la carte 1.</Card.Text>
            </Card.Body>
            </div>
          </Card>
          <Card>
          <div>
            <Card.Body>
              <Card.Title id='milo'>Carte 2</Card.Title>
              <Card.Text id='content'>Contenu de la carte 2.</Card.Text>
            </Card.Body>
            </div>
          </Card>
          <Card >
          <div>
            <Card.Body>
              <Card.Title id='milo'>Carte 3</Card.Title>
              <Card.Text id='content'>Contenu de la carte 3.</Card.Text>
            </Card.Body>
            </div>
          </Card>
          </div>
      </Container>
    </div>
  );
}

export default App;
