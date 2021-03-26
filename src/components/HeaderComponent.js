import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import { Navbar, 
    NavbarBrand, 
    Nav, 
    NavbarToggler, 
    Collapse, 
    NavItem, 
    Jumbotron,
    Button,
    Modal, 
    ModalHeader, 
    ModalBody,
    Form, 
    FormGroup, 
    Input, 
    Label } from 'reactstrap';
import NavLink from 'reactstrap/lib/NavLink';

const HeaderComponent = () => {
    return (
        <>
            <Navbar className="navbar navbar-expand-sm navbar-light justify-content-between pb-3" id="navBar">
                <NavbarToggler type="button" data-toggle="collapse" data-target="#navigationCollapse">
                    <i className="navbar-toggler-icon"></i>
                </NavbarToggler>
                <a href="index.html" className="navbar-brand" id="mobile-branding">CitiViews</a>
                <Collapse className="collapse navbar-collapse justify-content-center" id="navigationCollapse">
                    <ul className="navbar-nav">
                        <NavbarBrand href="">CitiViews</NavbarBrand>
                        <NavItem>
                            <NavLink>Photo Gallery</NavLink>
                        </NavItem>
                        <li className="nav-item">
                            <a className="nav-link">Account</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link">About</a>
                        </li>
                    </ul>
                </Collapse>
                <Collapse className="collapse navbar-collapse justify-content-center" id="navigationCollapse">
                    <ul className="navbar-nav">
                        <NavItem className="nav-item px-2">
                            <NavLink href="" className="nav-link" data-toggle="modal" data-target="#signUpModal">
                                <i className="fa fa-user-plus fa-lg" data-toggle="tooltip" data-placement="bottom" title="Sign Up"></i>
                            </NavLink> 
                        </NavItem>
                        <NavItem className="nav-item px-2">
                            <NavLink href="" className="nav-link">
                                <i className="fa fa-search fa-lg" data-toggle="tooltip" data-placement="bottom" title="Advanced Search"></i>
                            </NavLink>
                        </NavItem>
                        <NavItem className="nav-item px-2">
                            <NavLink href="" className="nav-link">
                                <i className="fa fa-user-circle fa-lg" data-toggle="tooltip" data-placement="bottom" title="My Profile"></i>
                            </NavLink>
                        </NavItem>
                    </ul>
                </Collapse>
            </Navbar>
        </>
    )
}

export default HeaderComponent

