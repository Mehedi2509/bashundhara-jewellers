import React from 'react';
import './Header.css';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../../images/logo.jpg';
import useAuth from '../../../hooks/useAuth';

const Header = () => {
    const { logOut, user } = useAuth();
    console.log(user)
    return (
        <div className="header">
            <Navbar expand="lg">
                <Container fluid>
                    <Navbar.Brand className="logo" href="#">
                        <img width="50px" src={logo} alt="" />
                        <h2 className="logo-h2">BASHUNDHARA JEWELLERS</h2>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />

                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="ms-auto my-2 my-lg-0 align-items-center"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <div>
                                <Link a className="menu" to="/home">HOME</Link>
                                <Link a className="menu" to="/shop">SHOP</Link>
                                <Link a className="menu" to="/about">ABOUT</Link>
                                {user?.email
                                    &&
                                    <a>
                                        <Link a className="menu" to="dashboard">DASHBOARD</Link>
                                        <Link className="menu" to="gold">GOLD</Link>
                                        <Link className="menu" to="diamond">DIAMOND</Link></a>}
                            </div>
                            <div>
                                <NavDropdown title={user?.email ? <img className="user-img" src={user.photoURL} alt="" /> : <i style={{ fontSize: '30px', color: 'white', marginLeft: '10px' }} className="fas fa-user-circle"></i>} id="navbarScrollingDropdown">
                                    {!user?.email ? <NavDropdown.Item>Sign In</NavDropdown.Item> :
                                        <div>
                                            <img src={user?.imgURL} alt="" />
                                            <p>{user.displayName}</p>
                                            <NavDropdown.Divider />
                                            <NavDropdown.Item >Profile</NavDropdown.Item>
                                            <NavDropdown.Item onClick={logOut}>
                                                Sign Out
                                            </NavDropdown.Item></div>}
                                </NavDropdown>
                            </div>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;