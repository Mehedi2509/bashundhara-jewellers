import React from 'react';
import './Header.css';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../../images/logo.jpg';
import useAuth from '../../../hooks/useAuth';
import { useHistory } from 'react-router-dom';

const Header = () => {
    const { logOut, user } = useAuth();
    console.log(user)
    const history = useHistory();

    const clickToHomePage = e => {
        e.preventDefault();
        history.push('/home');
    }

    return (
        <div className="header">
            <Navbar expand="lg">
                <Container fluid>
                    <Navbar.Brand className="logo" href="#">
                        <img onClick={clickToHomePage} width="50px" src={logo} alt="" />
                        <h2 className="logo-h2" onClick={clickToHomePage}>BASHUNDHARA JEWELLERS</h2>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />

                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="ms-auto my-2 my-lg-0 align-items-center"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <div>
                                <Link a className="menu" to="/shop">SHOP</Link>
                                {user?.email &&
                                    <a>
                                        <Link a className="menu" to="dashboard">DASHBOARD</Link>
                                        <Link className="menu" to="gold">GOLD</Link>
                                        <Link className="menu" to="diamond">DIAMOND</Link>
                                    </a>
                                }
                                <Link className="menu" to="/about">ABOUT</Link>
                            </div>

                            <div style={{ textAlign: 'center', width: '120px' }}>
                                <NavDropdown style={{ width: '150%' }} title={user?.photoURL ? <img className="user-img" src={user.photoURL} alt="" /> : <i style={{ fontSize: '30px', color: 'white', marginLeft: '10px' }} className="fas fa-user-circle"></i>} id="navbarScrollingDropdown">
                                    {!user?.email ? <NavDropdown.Item style={{ textAlign: 'center' }}><Link style={{ textDecoration: 'none', color: 'black', textAlign: 'center' }} to="/signIn">Sign In</Link></NavDropdown.Item> :
                                        <div style={{ textAlign: 'center' }}>
                                            <div style={{}}>
                                                <img style={{ borderRadius: '50%', width: '50px', height: '50px', margin: '10px' }} src={user?.photoURL} alt="" />
                                                <p>{user.displayName}</p>
                                            </div>
                                            <NavDropdown.Divider />
                                            <NavDropdown.Item >My Profile</NavDropdown.Item>
                                            <NavDropdown.Item onClick={logOut}>Sign Out</NavDropdown.Item>
                                        </div>}
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