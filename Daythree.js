import React, { Component } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './App.css';
export class Daythree extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         message: "Sunshine Cafe",
      }
    }
    styles = {
        fontStyle: 'bold',
        color: 'blue',
        fontSize: '38px',
      };
      
render() {
    return (
      <div>
        
        <center><h1 style={this.styles}>{this.state.message}</h1></center>
        <center><h6> “ Stressed, blessed, and coffee obsessed..”</h6></center>
        <div className='Cafe'><Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Menu</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#Cofee">Cofee</Nav.Link>
            <Nav.Link href="#Cookies">Cookies</Nav.Link>
            <Nav.Link href="#Pastries">Pastries</Nav.Link>
            <Nav.Link href="#Cart">Cart</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      </div>
      </div>
    )
}
}
export default Daythree;