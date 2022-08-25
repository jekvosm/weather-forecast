import { Link } from 'react-router-dom'

import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

const Navigation = () => {
  return (
    <Navbar
      collapseOnSelect
      expand='lg'
      fixed='top'
      className='bg-custom-primary text-cyan-300'
    >
      <Container>
        <Nav.Link
          as={Link}
          to='/'
          className='fs-3 text text-uppercase'
          tabIndex={0}
          eventKey='1'
        >
          Погода
        </Nav.Link>

        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav' className='flex-grow-0'>
          <Nav className='me-auto '>
            <Nav.Link
              as={Link}
              to='/about'
              className='fs-4 text-uppercase'
              tabIndex={0}
              eventKey='2'
            >
              About
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Navigation
