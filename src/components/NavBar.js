import React, { useContext } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import chalk_logo from '../assets/chalk_logo.png'
import styles from '../styles/NavBar.module.css';
import { NavLink } from 'react-router-dom';
import { CurrentUserContext } from '../App';

const NavBar = () => {
    const currentUser = useContext(CurrentUserContext);
    const loggedInIcons = <>{currentUser?.username}</>
    const loggedOutIcons = (
        <>
            <NavLink className={styles.Navlink} activeClassName={styles.Active} to="/signin">
                <i className='fas fa-sign-in-alt'></i> Sign In
            </NavLink>
            <NavLink className={styles.Navlink} activeClassName={styles.Active} to="/signup">
                <i className='fas fa-user-plus'></i> Sign Up
            </NavLink>
        </>
    );

    return (
        <Navbar className={styles.NavBar} expand="md" fixed='top'>
            <Container>
                <NavLink to="/">
                    <Navbar.Brand>
                        <img src={chalk_logo} alt='logo' height='80' />
                    </Navbar.Brand></NavLink>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto text-left">
                        <NavLink exact className={styles.Navlink} activeClassName={styles.Active} to="/">
                            <i className='fas fa-home'></i> Home
                        </NavLink >
                        {currentUser ? loggedInIcons : loggedOutIcons}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar >
    )
}

export default NavBar