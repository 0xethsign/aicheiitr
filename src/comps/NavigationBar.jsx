import React from 'react'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import { BrowserRouter as Router } from 'react-router-dom'



const NavigationBar = () => {
    return (
        <div>
            <Router>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Navbar.Brand href="/">AIChE IIT-Roorkee</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="/blogs">Blogs</Nav.Link>
                            <NavDropdown title="Competitions" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="/competitions/competition1">competition1</NavDropdown.Item>
                                <NavDropdown.Item href="/competitions/competition2">competition2</NavDropdown.Item>
                                <NavDropdown.Item href="/competitions/competition3">competition3</NavDropdown.Item>
                                <NavDropdown.Item href="/competitions/competition4">competition4</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="/team">Team</Nav.Link>
                            <Nav.Link href="/contact-us">Contact Us</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                <br />
            </Router>
        </div>
    )
}

export default NavigationBar
