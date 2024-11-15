import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import chalk_logo from '../assets/chalk_logo.png'
import styles from '../styles/NavBar.module.css';

const NavBar = () => {
    return (
        <Navbar className={styles.NavBar} expand="md" fixed='top'>
            <Container>
                <Navbar.Brand>
                    <img src={chalk_logo} alt='logo' height='80' />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto text-left">
                        <Nav.Link>
                            <i className='fas fa-home'></i> Home
                        </Nav.Link>
                        <Nav.Link>
                            <i className='fas fa-sign-in-alt'></i> Sign In
                        </Nav.Link>
                        <Nav.Link>
                            <i className='fas fa-user-plus'></i> Sign Up
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar >
    )
}

export default NavBar