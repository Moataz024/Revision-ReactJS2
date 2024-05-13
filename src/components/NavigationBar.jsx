import React from 'react'
import Navbar  from 'react-bootstrap/Navbar'
import Container  from 'react-bootstrap/Container'
import Nav  from 'react-bootstrap/Nav'
import { NavLink } from 'react-router-dom'

export default function NavigationBar() {

    const active = {
        // fontWeight:"bold",
      textDecoration:"underline"
    };
  return (
    <Navbar bg="light" expand="lg" >
    <Container>
      <Nav className="me-auto">
        <Nav.Link
          as={NavLink}
          to="home"
          style={({ isActive }) => (!isActive ? undefined :active )}
        >
          Home
        </Nav.Link>
        <Nav.Link
          as={NavLink}
          to="competitions"
          style={({ isActive }) => (!isActive ? undefined :active )}
        >
          Competitions
        </Nav.Link>
       
      </Nav>
    </Container>
  </Navbar>

  )
}
