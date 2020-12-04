import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'

const Header = () => {
  return (
    <header>
      <Navbar bg='primary' expand='lg' collapseOnSelect>
        <Container>
          <Navbar.Brand href='/'>Ben's Store</Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ml-auto'>
              <Nav.Link href='/cart' className='fas fa-shopping-cart'>
                Cart
              </Nav.Link>
              <Nav.Link href='/login' className='fas fa-user'>
                Sign In
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header
