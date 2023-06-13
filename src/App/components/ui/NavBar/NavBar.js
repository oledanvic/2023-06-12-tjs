import React from 'react';
import PropTypes from 'prop-types';
import style from './NavBar.module.css';
import '../../../../../node_modules/bootstrap/dist/css/bootstrap.css'
import '../../../../../node_modules/bootstrap/dist/js/bootstrap.js'
import { Navbar, Container, Nav } from 'react-bootstrap';

const NavBar = (props) => {
  return (
    <div className={style.NavBar} data-testid="NavBar">
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Home</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Thumbnail</Nav.Link>
            <Nav.Link href="#features">New mem</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

NavBar.propTypes = {
};

export default NavBar;