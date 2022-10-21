import React, { useContext } from 'react';
import { Button, Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { authContext } from '../../../contexts/AuthProvider/AuthProvider';
import LeftSideNav from '../LeftSideNav/LeftSideNav';

const Header = () => {
    const { user, logOut } = useContext(authContext);

    const handelSignOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }

    return (
        <Navbar className='mb-5' collapseOnSelect expand="lg" bg="light" variant="light">
            <Container>
                <Navbar.Brand><Link style={{ textDecoration: 'none', color: 'black', fontWeight: '800' }} to='/'>Dragon News</Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#features">All News</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>

                    </Nav>
                    <Nav>
                        <Nav>
                            {
                                user?.uid ?
                                    <>
                                        <Nav.Link href="#deets">
                                            {user?.displayName}
                                        </Nav.Link>
                                        <Button onClick={handelSignOut} className='ms-3' variant="outline-dark" height='10px'>
                                            Log Out
                                        </Button>
                                    </>
                                    :
                                    <>
                                        <Nav.Link className='me-3'><Link to='/login' style={{ textDecoration: 'none', color: 'black' }}>Login</Link></Nav.Link>
                                        <Nav.Link><Link to='register' style={{ textDecoration: 'none', color: 'black' }}>Register</Link></Nav.Link>
                                    </>
                            }

                        </Nav>
                        <Nav className='d-flex justify-content-center align-items-center ms-3'>
                            <Link to='/profile'>
                                {
                                    user?.photoURL ?
                                        <Image height='30px' roundedCircle src={user.photoURL}></Image>
                                        : <FaUser></FaUser>
                                }

                            </Link>
                        </Nav>
                    </Nav>
                    <NavDropdown className='d-lg-none' title="News Categories" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="#action/3.2">
                            <div >
                                <LeftSideNav></LeftSideNav>
                            </div>
                        </NavDropdown.Item>
                        <NavDropdown.Divider />
                    </NavDropdown>

                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;