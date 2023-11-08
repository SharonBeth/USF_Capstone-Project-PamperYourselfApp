import React from "react";

// import "./NavBar.css";
import {useEffect, useState} from 'react';
import { NavLink } from "react-router-dom";
import { Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText, 
  Button, 
  Carousel, 
  CarouselItem, 
  CarouselControl, 
  CarouselIndicators, 
  CarouselCaption   
} from "reactstrap";


function NavBar({currentUser, logout, data}) {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const LoggedInNav = () => {
        return (
            <div>
                <Navbar >
                    <NavbarBrand href="/" >Pamper Yourself</NavbarBrand>
                    <NavbarToggler onClick={toggle} />
                    <Collapse isOpen={isOpen} navbar>
                        <Nav className="loggedIn" navbar>
                            <NavLink to="/newsearch">New Search</NavLink>
                            <NavLink to="/history">History</NavLink>
                            <NavLink to="/" onClick={logout}>Log Out</NavLink>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        )
    }

    const NotLoggedInNav = () => {
        return (
            <div>
                <Navbar>
                    <NavbarBrand href="/">Pamper Yourself</NavbarBrand>
                    <NavbarToggler onClick={toggle}/>
                    <Collapse isOpen={isOpen} navbar>
                        <Nav className="notloggedin" navbar>
                            <NavLink to="/signup">Sign Up</NavLink>
                            <NavLink to="/login">Login</NavLink>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        )
    }
    return(
        <div>
           { currentUser ? LoggedInNav() : NotLoggedInNav() }
        </div>
    )
}

export default NavBar;
